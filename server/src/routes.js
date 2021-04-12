const express = require('express');
const router = express.Router();
const classifier = require('./classifier')

const multer = require('multer');
const inMemoryStorage = multer.memoryStorage();
const uploadStrategy = multer({storage: inMemoryStorage}).single('image');

router.post('/classify', uploadStrategy, classifier.imageClassification);


module.exports = router;
