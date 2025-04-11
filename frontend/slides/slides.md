---
marp: true
theme: default
paginate: true
footer: "Intro to RESTful APIs Part 3 | Major League Hacking"
size: 16:9
---

# Session 3: Building the Frontend

---

## Session 3 Objectives & Setup 🎨

- **Purpose:**  
  - Create a frontend interface that consumes your REST API
- **Tech Options:**  
  - Plain HTML, CSS, and JavaScript or a framework like React/Vue
- **Goals:**  
  - Display API data and handle user interactions
  - Ensure smooth asynchronous communication with the backend

---

## Building the Frontend Interface 🌟

- **Project Setup:**  
  - Basic HTML structure, linking CSS and JavaScript files
- **Example HTML Skeleton:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Task Manager</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Task Manager</h1>
    <div id="task-list"></div>
    <script src="app.js"></script>
</body>
</html>
```

---

## Connecting Frontend with the API 🔗

- **JavaScript Example (Using fetch):**

```javascript
async function fetchTasks() {
    try {
        const response = await fetch('http://localhost:3000/tasks');
        if (!response.ok) throw new Error('Network response was not ok');
        const tasks = await response.json();
        displayTasks(tasks);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function displayTasks(tasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = tasks.map(task => `<p>${task.title}</p>`).join('');
}

// Initialize on page load
fetchTasks();
```

- **Debugging Tips:**  
  - Use browser developer tools  
  - Check network requests and console logs

---

## Enhancing User Experience 🚀

- **Error Handling:**  
  - Show user-friendly error messages  
- **Responsive Design:**  
  - Ensure layout adjusts to different screens  
- **Next Steps:**  
  - Ideas for enhancing features and integrating advanced UI libraries

---

## Session 3 Wrap-Up & Final Q&A 🎤

- **Recap:**  
  - Overview of the complete full-stack workflow  
  - How backend and frontend communicate
- **Open Q&A:**  
  - Final questions and feedback discussion

---

## Workshop Conclusion 🎉

### Key Takeaways

- **REST Fundamentals:**  
  - Deep understanding of REST, HTTP, and related design constraints
- **Modern APIs:**  
  - Compare SOAP, REST, and GraphQL architectures
- **Practical Skills:**  
  - Build a backend API and a frontend that consumes it

---

## Thank You! 🙏

- **Stay Connected:**  
  - *Your Contact Info*  
  - Links to additional resources and repositories
- **Feedback:**  
  - Please share your thoughts and suggestions for future workshops!

---
