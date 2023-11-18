const express = require("express");
const router = express.Router();
const flashcardController = require("../controllers/flashcardController");

router.post("/", flashcardController.createFlashcard);
router.get("/", flashcardController.getAllFlashcards);
router.get("/:id", flashcardController.getFlashcard);
router.put("/:id", flashcardController.updateFlashcard);
router.delete("/:id", flashcardController.deleteFlashcard);

module.exports = router;
