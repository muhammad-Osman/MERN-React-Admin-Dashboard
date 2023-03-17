import express from 'express';
import { fetchProducts, fetchCustomers, fetchTransactions } from '../controllers/client_controller.js';

const router = express.Router();

router.get("/products", fetchProducts);
router.get("/customers", fetchCustomers);
router.get("/transactions", fetchTransactions);

export default router;