import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "tasks",            // optional
        resource_type: "auto",      // image, raw, auto for all
    },
});

const upload = multer({ storage });

// single file upload field name: "file"
router.post("/", upload.single("file"), (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ message: "No file uploaded" });
        // multer-storage-cloudinary sets file.path to URL in many versions
        // sometimes file.path or file?.path or file?.secure_url depending on lib version
        const url = req.file.path || req.file?.secure_url || req.file?.url;
        return res.json({ url, file: req.file });
    } catch (err) {
        console.error("Upload error:", err);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
});

export default router;
