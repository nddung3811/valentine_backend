import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    caption: { type: String, required: true },
    imageUrl: { type: String, default: null }, // Ảnh có thể không bắt buộc
    videoUrl: { type: String, default: null }, // Thêm videoUrl
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Post", postSchema);
