const express = require('express');
const app = express();
app.use(express.json());

const port = 3000;

// Placeholder route
app.get('/', (req, res) => {
  res.send('Flashcard Learning API');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
