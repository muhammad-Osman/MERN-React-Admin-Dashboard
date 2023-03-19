import express from "express";
import {
  fetchUser,
  getDashboardStats,
  signin,
  signup,
} from "../controllers/general_controller.js";

const router = express.Router();

router.post("/register", signup);
router.post("/login", signin);
router.get("/user/:id", fetchUser);
router.get("/dashboard", getDashboardStats);

export default router;
