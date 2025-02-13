import Message from "../models/Message.js";

// Lấy danh sách tin nhắn
export const getMessages = async (req, res) => {
    try {
        const messages = await Message.find({ user: req.user.id });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server" });
    }
};

// Gửi tin nhắn mới
export const sendMessage = async (req, res) => {
    try {
        const { content } = req.body;
        const newMessage = new Message({
            user: req.user.id,
            content
        });
        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server" });
    }
};
