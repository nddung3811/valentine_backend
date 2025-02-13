import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    url: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Song', songSchema);
