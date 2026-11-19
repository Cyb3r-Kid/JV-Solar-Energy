import fs from 'fs';
import path from 'path';

export interface EnquiryRecord {
  id: string;
  enquiryId: string;
  fullName: string;
  companyName?: string;
  phone: string;
  email: string;
  projectType: string;
  projectLocation: string;
  requiredCapacity?: string;
  currentBillRange?: string;
  additionalRequirements?: string;
  source?: string;
  createdAt: string;
  status: 'PENDING' | 'CONTACTED' | 'PROPOSAL_SENT' | 'CLOSED';
}

const DATA_DIR = path.resolve(process.cwd(), 'server', 'data');
const DATA_FILE = path.join(DATA_DIR, 'enquiries.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Ensure database file exists
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), 'utf-8');
}

export const getEnquiries = async (): Promise<EnquiryRecord[]> => {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw) as EnquiryRecord[];
  } catch (error) {
    console.error('Error reading enquiries database:', error);
    return [];
  }
};

export const saveEnquiry = async (record: Omit<EnquiryRecord, 'id' | 'enquiryId' | 'createdAt' | 'status'>): Promise<EnquiryRecord> => {
  const enquiries = await getEnquiries();
  
  // Generate readable unique Enquiry ID: JVS-YYYYMMDD-XXXX
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const enquiryId = `JVS-${dateStr}-${randomSuffix}`;
  
  const newRecord: EnquiryRecord = {
    ...record,
    id: Buffer.from(`${Date.now()}-${randomSuffix}`).toString('base64url'),
    enquiryId,
    createdAt: new Date().toISOString(),
    status: 'PENDING'
  };

  enquiries.unshift(newRecord);
  fs.writeFileSync(DATA_FILE, JSON.stringify(enquiries, null, 2), 'utf-8');
  return newRecord;
};
