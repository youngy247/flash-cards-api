const express = require("express");
const router = express.Router();
const FlashcardController = require("../controllers/flashcardController");

// routes
router.post("/", FlashcardController.createFlashcard);
router.get("/", FlashcardController.getAllFlashcards);
router.get("/:id", FlashcardController.getFlashcard);
router.put("/:id", FlashcardController.updateFlashcard);
router.delete("/:id", FlashcardController.deleteFlashcard);

module.exports = router;
