import mongoose from "mongoose";

const DiaryEntrySchema = new mongoose.Schema({
    filename: String,
    type: String, // "image" hoặc "video"
    description: String,
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("DiaryEntry", DiaryEntrySchema);
