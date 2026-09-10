const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://dhanya098:Dh%40nya98@cluster0.fsckz8b.mongodb.net/?appName=Cluster0';

mongoose.connect(dbURI, { tlsAllowInvalidCertificates: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.log('MongoDB connection error:', err));
  const studentSchema = new mongoose.Schema({
  name: String,
  course: String
});

const Student = mongoose.model('Student', studentSchema);

app.get('/', (req, res) => {
  res.send('Hello from my backend!');
});
app.get('/api/students', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});
app.post('/api/students', async (req, res) => {
  const newStudent = new Student(req.body);
  await newStudent.save();
  res.json(newStudent);
});
app.put('/api/students/:id', async (req, res) => {
  const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

app.delete('/api/students/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted" });
});
app.get('/api/students/:name', (req, res) => {
  res.send(`Looking for student: ${req.params.name}`);
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
