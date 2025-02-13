import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
    name: String,
    latitude: Number,
    longitude: Number,
    images: [{ url: String, caption: String }],
    notes: String,
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Place", placeSchema);
