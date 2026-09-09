const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from my backend!');
});
app.get('/api/students', (req, res) => {
  const students = [
    { name: "Dhanya", course: "MERN" },
    { name: "Anu", course: "Python" }
  ];
  res.json(students);
});

app.get('/api/students/:name', (req, res) => {
  res.send(`Looking for student: ${req.params.name}`);
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
