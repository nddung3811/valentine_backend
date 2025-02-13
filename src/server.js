// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import path from "path";
import { fileURLToPath } from "url";

// Import Routes
import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import memoryRoutes from './routes/memoryRoutes.js';
import songRoutes from './routes/songRoutes.js';
import loveMemoriesRoutes from "./routes/loveMemories.js";
import loveMapRoutes from "./routes/loveMap.js";
import postRoutes from "./routes/postRoutes.js"
import diaryRoutes from "./routes/diaryRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Connect Database
connectDB();

// Routes
app.use("/api/diary", diaryRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/memories', memoryRoutes);
app.use('/api/songs', songRoutes);
app.use("/api/loveMemories", loveMemoriesRoutes);
app.use("/api/loveMap", loveMapRoutes);
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));