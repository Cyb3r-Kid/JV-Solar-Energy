import { Request, Response } from 'express';
import { z } from 'zod';
import { saveEnquiry, getEnquiries } from '../config/db';
import { sendEnquiryNotification } from '../services/emailService';

// Indian phone regex: allows optional +91/91/0, optional spaces/dashes, and 10 digits starting with 6,7,8,9
const phoneRegex = /^(?:(?:\+|0{0,2})91[\s-]*)?[6789]\d{4}[\s-]?\d{5}$|^[6789]\d{9}$/;

export const EnquirySchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters').max(100),
  companyName: z.string().max(120).optional().or(z.literal('')),
  phone: z.string().regex(phoneRegex, 'Please enter a valid 10-digit Indian phone number'),
  email: z.string().email('Please enter a valid email address'),
  projectType: z.enum([
    'Residential Rooftop',
    'Commercial Solar',
    'Industrial Solar EPC',
    'Ground Mounted Plant',
    'Solar Water Pump',
    'Other / Custom Project'
  ], {
    errorMap: () => ({ message: 'Please select a valid project solution' })
  }),
  projectLocation: z.string().min(3, 'Location must be at least 3 characters').max(150),
  requiredCapacity: z.string().max(80).optional().or(z.literal('')),
  currentBillRange: z.string().max(80).optional().or(z.literal('')),
  additionalRequirements: z.string().max(2000).optional().or(z.literal('')),
  botTrap: z.string().max(0, 'Spam detected').optional()
});

export const createEnquiry = async (req: Request, res: Response) => {
  try {
    // Check spam honeypot
    if (req.body.botTrap && req.body.botTrap.length > 0) {
      return res.status(400).json({ success: false, error: 'Spam submission detected.' });
    }

    const validatedData = EnquirySchema.parse(req.body);

    const savedRecord = await saveEnquiry({
      fullName: validatedData.fullName.trim(),
      companyName: validatedData.companyName?.trim() || undefined,
      phone: validatedData.phone.trim(),
      email: validatedData.email.trim().toLowerCase(),
      projectType: validatedData.projectType,
      projectLocation: validatedData.projectLocation.trim(),
      requiredCapacity: validatedData.requiredCapacity?.trim() || undefined,
      currentBillRange: validatedData.currentBillRange?.trim() || undefined,
      additionalRequirements: validatedData.additionalRequirements?.trim() || undefined,
      source: 'JV Solar Website Quote Form'
    });

    // Fire email notification asynchronously
    sendEnquiryNotification(savedRecord).catch((err) => {
      console.error('Failed to dispatch notification email:', err);
    });

    return res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully. A JV Solar Energy engineer will contact you shortly.',
      data: {
        enquiryId: savedRecord.enquiryId,
        fullName: savedRecord.fullName,
        projectType: savedRecord.projectType,
        createdAt: savedRecord.createdAt
      }
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      const issues = error.issues || (error as any).errors || [];
      return res.status(400).json({
        success: false,
        error: 'Validation error',
        details: issues.map((e: any) => ({ field: (e.path || []).join('.'), message: e.message }))
      });
    }

    console.error('Error handling enquiry submission:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your enquiry. Please contact us directly at +91 9840571770.'
    });
  }
};

export const listEnquiries = async (_req: Request, res: Response) => {
  try {
    const list = await getEnquiries();
    return res.json({ success: true, count: list.length, data: list });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: 'Failed to retrieve enquiries' });
  }
};
