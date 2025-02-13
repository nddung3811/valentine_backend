import mongoose from "mongoose";

const memorySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String },
}, { timestamps: true });

export default mongoose.model('Memory', memorySchema);