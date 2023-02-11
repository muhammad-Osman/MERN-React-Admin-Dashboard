import express from "express";
import { fetchUser, signin, signup } from "../controllers/general_controller.js";

const router = express.Router();

router.post("/register", signup);
router.post("/login", signin);
router.get("/user/:id", fetchUser);

export default router;
