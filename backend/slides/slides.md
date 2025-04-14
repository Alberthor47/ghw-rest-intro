---
marp: true
theme: default
paginate: true
footer: "Intro to RESTful APIs Part 2 | Major League Hacking"
size: 16:9
---

# Session 2: Building the Backend

---

## Session 2 Objectives & Setup 🛠️

- **Tech Stack:**  
  - Example: Python Flask or Node.js with Express
- **Goals:**  
  - Set up a backend service from scratch  
  - Implement full CRUD endpoints  
  - Understand middleware and error handling

---

## Project Setup & API Design 📐

- **Project Structure:**  
  - Define directories, install dependencies  
- **API Scope Example:**  
  - To-Do App (tasks: create, read, update, delete)
- **Endpoint Mapping:**  
  - `/tasks` (GET, POST)  
  - `/tasks/{id}` (GET, PUT, DELETE)

---

## Live Coding: Building Your API 🖥️

- **Initial Setup:**  
  - Initialize project and configure routing  
- **Example with Node.js/Express:**

```javascript
const express = require('express');
const app = express();
app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const task = { id: tasks.length + 1, ...req.body };
    tasks.push(task);
    res.status(201).json(task);
});

// Implement PUT and DELETE similarly

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

- **Testing:**  
  - Use Postman or curl to ensure endpoints work as expected

---

## Discussion & Q&A Session 2 💬

- Review challenges and debugging tips
- Explore middleware options (logging, security)
- Open floor for questions
