import express from 'express';
import { fetchProducts, fetchCustomers } from '../controllers/client_controller.js';

const router = express.Router();

router.get("/products", fetchProducts);
router.get("/customers", fetchCustomers);

export default router;