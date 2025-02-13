import mongoose from "mongoose";

const LoveMemorySchema = new mongoose.Schema({
    name: String,
    lat: Number,
    lng: Number,
    date: String,
    image: String, // URL ảnh từ Firebase
    description: String,
});

const LoveMemory = mongoose.model("LoveMemory", LoveMemorySchema);
export default LoveMemory;
