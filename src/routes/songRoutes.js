import express from "express";
import { addSong, getSongs } from "../controllers/songController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Lấy danh sách bài hát
router.get("/", authMiddleware, getSongs);

// Thêm bài hát mới
router.post("/", authMiddleware, addSong);

export default router;
