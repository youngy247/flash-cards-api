// models/flashcard.js
const mongoose = require("mongoose");

const flashcardSchema = new mongoose.Schema({
  question: String,
  answer: String,
  category: String,
  difficulty: String,
});

const Flashcard = mongoose.model("Flashcard", flashcardSchema);

module.exports = Flashcard;
