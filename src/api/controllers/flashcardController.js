const Flashcard = require("../models/flashcard");

// Create a new flashcard
exports.createFlashcard = async (req, res) => {
  try {
    const newFlashcard = new Flashcard(req.body);
    const savedFlashcard = await newFlashcard.save();
    res.status(201).json(savedFlashcard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all flashcards
exports.getAllFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.find();
    res.json(flashcards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single flashcard by ID
exports.getFlashcard = async (req, res) => {
  try {
    const flashcard = await Flashcard.findById(req.params.id);
    if (!flashcard)
      return res.status(404).json({ message: "Flashcard not found" });
    res.json(flashcard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a flashcard
exports.updateFlashcard = async (req, res) => {
  try {
    const updatedFlashcard = await Flashcard.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedFlashcard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a flashcard
exports.deleteFlashcard = async (req, res) => {
  try {
    const flashcard = await Flashcard.findByIdAndDelete(req.params.id);
    if (!flashcard)
      return res.status(404).json({ message: "Flashcard not found" });
    res.json({ message: "Flashcard deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
