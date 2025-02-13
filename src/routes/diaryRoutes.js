import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import DiaryEntry from "../models/DiaryEntry.js";

const router = express.Router();

// Fix lỗi __dirname trong ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cấu hình lưu trữ file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../uploads"));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// API: Upload bài viết (ảnh/video + nội dung)
router.post("/upload", upload.single("file"), async (req, res) => {
    try {
        const { description } = req.body;
        const newEntry = new DiaryEntry({
            filename: req.file.filename,
            type: req.file.mimetype.startsWith("video") ? "video" : "image",
            description
        });
        await newEntry.save();
        res.json({ success: true, message: "Tải lên thành công!", entry: newEntry });
    } catch (error) {
        res.status(500).json({ success: false, message: "Lỗi server!" });
    }
});

// API: Lấy danh sách bài đăng
router.get("/", async (req, res) => {
    try {
        const entries = await DiaryEntry.find().sort({ createdAt: -1 });
        res.json(entries);
    } catch (error) {
        res.status(500).json({ success: false, message: "Lỗi server!" });
    }
});

export default router;
