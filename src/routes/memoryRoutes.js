import express from "express";
import { addMemory, getMemories } from "../controllers/memoryController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Lấy danh sách kỷ niệm
router.get("/", authMiddleware, getMemories);

// Thêm kỷ niệm mới
router.post("/", authMiddleware, addMemory);

export default router;
