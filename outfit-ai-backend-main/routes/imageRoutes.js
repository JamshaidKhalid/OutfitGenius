const express = require('express');
const router = express.Router();

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({storage: storage});
const {imageUpload} = require('../controllers/imageController');

router.post('/upload', upload.single('image'), imageUpload);

module.exports = router;