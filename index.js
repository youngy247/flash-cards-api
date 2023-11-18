const express = require("express");
const connectDB = require("./src/config/db");
const flashcardRoutes = require("./src/api/routes/flashcardRoutes");
const app = express();
app.use(express.json());

const port = 3000;

// Connect to Database
connectDB();

app.use("/api/flashcards", flashcardRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
