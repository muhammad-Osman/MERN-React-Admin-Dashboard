import express from 'express';
import { fetchSales } from '../controllers/sales_controller.js';

const router = express.Router();

router.get("/sales", fetchSales);

export default router;