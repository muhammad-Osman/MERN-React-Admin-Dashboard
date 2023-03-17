import express from "express";
import {
  fetchProducts,
  fetchCustomers,
  fetchTransactions,
  fetchGeography
} from "../controllers/client_controller.js";

const router = express.Router();

router.get("/products", fetchProducts);
router.get("/customers", fetchCustomers);
router.get("/transactions", fetchTransactions);
router.get("/geography", fetchGeography);

export default router;
