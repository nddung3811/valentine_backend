import Memory from "../models/Memory.js";

// Lấy danh sách kỷ niệm
export const getMemories = async (req, res) => {
    try {
        const memories = await Memory.find({ user: req.user.id });
        res.status(200).json(memories);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server" });
    }
};

// Thêm kỷ niệm mới
export const addMemory = async (req, res) => {
    try {
        const { title, description, image } = req.body;
        const newMemory = new Memory({
            user: req.user.id,
            title,
            description,
            image
        });
        await newMemory.save();
        res.status(201).json(newMemory);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server" });
    }
};
