import express from "express";
import authCtrl from "../middleware/authCtrl";

const router = express.Router();

router.post('/register', authCtrl.register)
export default router;