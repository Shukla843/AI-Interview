import multer from "multer";
import path from "path";
import os from "os";

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, os.tmpdir())  // ← uses system temp folder, works everywhere
    },
    filename: function(req, file, cb) {
        const filename = Date.now() + "-" + file.originalname;
        cb(null, filename)
    }
})

export const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
})