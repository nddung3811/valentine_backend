import express from "express";
import multer from "multer";
import Post from "../models/Post.js";

const router = express.Router();

// Cấu hình Multer để lưu file vào thư mục uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage }).fields([
    { name: "image", maxCount: 1 },
    { name: "video", maxCount: 1 }
]);

router.post("/upload", upload, async (req, res) => {
    try {
        const { caption } = req.body;
        if (!caption) {
            return res.status(400).json({ error: "Caption là bắt buộc!" });
        }

        let imageUrl = req.files && req.files["image"] ? `/uploads/${req.files["image"][0].filename}` : null;
        let videoUrl = req.files && req.files["video"] ? `/uploads/${req.files["video"][0].filename}` : null;

        const newPost = new Post({ caption, imageUrl, videoUrl });
        await newPost.save();

        res.json({ message: "Đăng bài thành công!", post: newPost });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Lỗi server!" });
    }
});

export default router;
