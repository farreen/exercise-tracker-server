const router = require("express").Router();
const fileController = require("../controllers/fileController");

router.post("upload/pic", fileController.upLoadFile)