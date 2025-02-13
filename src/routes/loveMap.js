import express from "express";
import Place from "../models/Place.js"; // Model MongoDB

const router = express.Router();

// Lấy danh sách địa điểm
router.get("/", async (req, res) => {
    try {
        const places = await Place.find();
        res.json(places);
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi lấy danh sách địa điểm" });
    }
});

// Thêm địa điểm mới
router.post("/", async (req, res) => {
    try {
        const { name, latitude, longitude } = req.body;
        const newPlace = new Place({ name, latitude, longitude, images: [], notes: "" });
        await newPlace.save();
        res.status(201).json(newPlace);
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi thêm địa điểm" });
    }
});

// Cập nhật ảnh và nội dung
router.put("/:id", async (req, res) => {
    try {
        const { images, notes } = req.body;
        const updatedPlace = await Place.findByIdAndUpdate(
            req.params.id,
            { $set: { images, notes } },
            { new: true }
        );
        res.json(updatedPlace);
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi cập nhật địa điểm" });
    }
});

// Xóa địa điểm
router.delete("/:id", async (req, res) => {
    try {
        await Place.findByIdAndDelete(req.params.id);
        res.json({ message: "Đã xóa địa điểm thành công" });
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi xóa địa điểm" });
    }
});

export default router;
