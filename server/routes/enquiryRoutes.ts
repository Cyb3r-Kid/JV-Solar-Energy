import { Router } from 'express';
import { createEnquiry, listEnquiries } from '../controllers/enquiryController';

const router = Router();

router.post('/enquiries', createEnquiry);
router.get('/enquiries', listEnquiries);

export default router;
