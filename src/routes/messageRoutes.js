import express from "express";
import { sendMessage, getMessages } from "../controllers/messageController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Lấy danh sách tin nhắn
router.get("/", authMiddleware, getMessages);

// Gửi tin nhắn mới
router.post("/", authMiddleware, sendMessage);

export default router;
