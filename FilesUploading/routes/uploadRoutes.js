const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require("fs");
const router = express.Router();

const storageConfig = {
  images: {
    storage: multer.diskStorage({
      destination: 'images',
      filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
      }
    }),
    limits: { fileSize: 1000000 },
    allowedFormats: /\.(png|jpg|JPG)$/,
    fieldName: 'image'
  },
  videos: {
    storage: multer.diskStorage({
      destination: 'videos',
      filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
      }
    }),
    limits: { fileSize: 10000000 },
    allowedFormats: /\.(mp4|MPEG-4)$/,
    fieldName: 'video'
  }
};

const uploadMiddleware = (type) => {
  const config = storageConfig[type];

  return multer({
    storage: config.storage,
    limits: config.limits,
    fileFilter(req, file, cb) {
      if (!file.originalname.match(config.allowedFormats)) {
        return cb(new Error(`Please upload a valid ${type.toUpperCase()}`));
      }
      cb(null, true);
    }
  }).single(config.fieldName);
};

router.post('/uploadImage', uploadMiddleware('images'), (req, res) => {
  res.send(req.file);
}, (error, req, res, next) => {
  res.status(400).send({ error: error.message });
});

router.get("/images", (req, res) => {
  const directoryPath = path.join("images");
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error("Error getting images:", err.message);
      return res
        .status(500)
        .json({ error: `Could not retrieve images ${err}` });
    }
    const images = files.map((file) => `../src/images/${file}`);
    res.json({ images: images });
  });
});

router.post('/uploadVideo', uploadMiddleware('videos'), (req, res) => {
  res.send(req.file);
}, (error, req, res, next) => {
  res.status(400).send({ error: error.message });
});


module.exports = router;