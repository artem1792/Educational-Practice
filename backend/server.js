require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Connection error:', err))

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
})

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  createdAt: { type: Date, default: Date.now }
})

const Contact = mongoose.model('Contact', contactSchema)
const Project = mongoose.model('Project', projectSchema)

app.post('/contact', (req, res) => {
  Contact.create(req.body)
    .then(doc => res.status(201).json(doc))
    .catch(err => res.status(400).json({ error: err.message }))
})

app.get('/contact', (req, res) => {
  Contact.find()
    .then(docs => res.json(docs))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.post('/projects', (req, res) => {
  Project.create(req.body)
    .then(doc => res.status(201).json(doc))
    .catch(err => res.status(400).json({ error: err.message }))
})

app.get('/projects', (req, res) => {
  Project.find()
    .then(docs => res.json(docs))
    .catch(err => res.status(500).json({ error: err.message }))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('Server running on port', PORT))
