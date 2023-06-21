const express = require("express");
const router = express.Router();

router.get("/image-resizer", (req, res) => {
  // API call to check if token is required for this API or not
  // If token required then render login page
  res.render("tools-page", {
    pageTitle: "Image Resizer",
    toolDescription: "Resize all your images to custom dimensions with ease!",
    submitButtonText: "Resize",
    inputs: [
      ["file-input", "Pick an image"],
      ["number-input", "Enter width"],
      ["number-input", "Enter height"],
    ],
    outputs: [["file-output", "Output Image..."]],
  });
});

router.get("/generate-text-from-audio", (req, res) => {
  // API call to check if token is required for this API or not
  // If token required then render login page
  res.render("tools-page", {
    pageTitle: "Generate Text From Audio",
    toolDescription: "Generate audio from text with ease!",
    submitButtonText: "Generate",
    inputs: [["file-input", "Pick an audio file"]],
    outputs: [["text-output", "Text Generated..."]],
  });
});

router.get("/video-to-mp3-converter", (req, res) => {
  // API call to check if token is required for this API or not
  // If token required then render login page
  res.render("tools-page", {
    pageTitle: "Video To MP3 Converter",
    toolDescription: "Convert video files to MP3 (audio) files with ease!",
    submitButtonText: "Convert",
    inputs: [["file-input", "Pick a video file"]],
    outputs: [["file-output", "Output MP3..."]],
  });
});

router.get("/extract-text-from-image", (req, res) => {
  // API call to check if token is required for this API or not
  // If token required then render login page
  res.render("tools-page", {
    pageTitle: "Extract Text From Image",
    toolDescription: "Extract text from images with accuracy & ease!",
    submitButtonText: "Extract",
    inputs: [["file-input", "Pick an image"]],
    outputs: [["text-output", "Extracted text..."]],
  });
});

router.get("/extract-text-from-video", (req, res) => {
  // API call to check if token is required for this API or not
  // If token required then render login page
  res.render("tools-page", {
    pageTitle: "Extract text from video",
    toolDescription: "Extract all text from videos with ease!",
    submitButtonText: "Check",
    inputs: [
      ["file-input", "Pick a video"],
    ],
    outputs: [["text-output", "Extracted Text..."]],
  });
});

router.get("/QR-generator", (req, res) => {
  // API call to check if token is required for this API or not
  // If token required then render login page
  res.render("tools-page", {
    pageTitle: "QR Code Generator",
    toolDescription: "Generate QR code of any text/URL with ease!",
    submitButtonText: "Generate",
    inputs: [["text-input-multi-line", "Enter text"]],
    outputs: [["file-output", "Generated QR Code..."]],
  });
});

module.exports = router;
