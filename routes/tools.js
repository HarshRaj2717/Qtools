const express = require("express");
const router = express.Router();

router.get("/image-resizer", (req, res) => {
  // API call to check if token is required for this API or not
  // If token required then render login page
  res.render("tool-pages/file-in-file-out", {
    pageTitle: "Image Resizer",
  });
});

router.get("/audio-to-text-converter", (req, res) => {
  // API call to check if token is required for this API or not
  // If token required then render login page
  res.render("tool-pages/file-in-text-out", {
    pageTitle: "Audio To Text Converter",
  });
});

router.get("/video-to-mp3-converter", (req, res) => {
  // API call to check if token is required for this API or not
  // If token required then render login page
  res.render("tool-pages/file-in-file-out", {
    pageTitle: "Video To MP3 Converter",
  });
});

router.get("/image-to-text-converter", (req, res) => {
  // API call to check if token is required for this API or not
  // If token required then render login page
  res.render("tool-pages/file-in-text-out", {
    pageTitle: "Image To Text Converter",
  });
});

router.get("/QR-generator", (req, res) => {
  // API call to check if token is required for this API or not
  // If token required then render login page
  res.render("tool-pages/text-in-file-out", {
    pageTitle: "QR Code Generator",
  });
});

router.get("/ISS-location-checker", (req, res) => {
  // API call to check if token is required for this API or not
  // If token required then render login page
  res.render("tool-pages/null-in-text-out", {
    pageTitle: "ISS Location Checker",
  });
});

module.exports = router;
