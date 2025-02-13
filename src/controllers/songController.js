import Song from "../models/Song.js";

// Lấy danh sách bài hát
export const getSongs = async (req, res) => {
    try {
        const songs = await Song.find({ user: req.user.id });
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server" });
    }
};

// Thêm bài hát mới
export const addSong = async (req, res) => {
    try {
        const { title, artist, link } = req.body;
        const newSong = new Song({
            user: req.user.id,
            title,
            artist,
            link
        });
        await newSong.save();
        res.status(201).json(newSong);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server" });
    }
};
