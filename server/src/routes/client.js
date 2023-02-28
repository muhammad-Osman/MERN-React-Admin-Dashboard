import express from 'express';
import { fetchProducts } from '../controllers/client_controller.js';

const router = express.Router();

router.get("/products", fetchProducts);

export default router;