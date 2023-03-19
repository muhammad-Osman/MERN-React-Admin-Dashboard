import express from "express";
import {
  fetchAdmins,
  fetchUserPerformance,
} from "../controllers/management_controller.js";

const router = express.Router();

router.get("/admin", fetchAdmins);
router.get("/performance/:id", fetchUserPerformance);

export default router;
