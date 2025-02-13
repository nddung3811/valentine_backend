import express from "express";
import LoveMemory from "../models/loveMemory.js";

const router = express.Router();

// Thêm địa điểm kỷ niệm
router.post("/add", async (req, res) => {
    try {
        const { name, lat, lng, date, image, description } = req.body;
        const newMemory = new LoveMemory({ name, lat, lng, date, image, description });
        await newMemory.save();
        res.json({ success: true, memory: newMemory });
    } catch (error) {
        res.status(500).json({ error: "Lỗi lưu dữ liệu" });
    }
});

// Lấy danh sách địa điểm theo thời gian
router.get("/list", async (req, res) => {
    try {
        const memories = await LoveMemory.find().sort({ date: -1 });
        res.json(memories);
    } catch (error) {
        res.status(500).json({ error: "Lỗi lấy dữ liệu" });
    }
});

export default router;
