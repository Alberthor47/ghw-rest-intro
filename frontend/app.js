const API_URL = 'http://localhost:3030/api/tasks'; // Replace with your backend URL

const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task-btn');

// Fetch and display tasks
async function fetchTasks() {
    try {
        const response = await fetch(API_URL);
        const tasks = await response.json();
        console.log('Fetching tasks...', tasks);
        renderTasks(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}

// Render tasks in the DOM
function renderTasks(tasks) {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.title}</span>
            <div>
                <button class="edit-btn" onclick="editTask('${task._id}', '${task.title}')">Edit</button>
                <button class="delete-btn" onclick="deleteTask('${task._id}')">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Add a new task
async function addTask() {
    const taskName = newTaskInput.value.trim();
    if (!taskName) return alert('Task name cannot be empty');

    try {
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: taskName }),
        });
        newTaskInput.value = '';
        fetchTasks();
    } catch (error) {
        console.error('Error adding task:', error);
    }
}

// Edit a task
async function editTask(id, currentName) {
    const newName = prompt('Edit task name:', currentName);
    if (!newName) return;

    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newName }),
        });
        fetchTasks();
    } catch (error) {
        console.error('Error editing task:', error);
    }
}

// Delete a task
async function deleteTask(id) {
    if (!confirm('Are you sure you want to delete this task?')) return;

    try {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        fetchTasks();
    } catch (error) {
        console.error('Error deleting task:', error);
    }
}

// Event listeners
addTaskBtn.addEventListener('click', addTask);

// Initial fetch
fetchTasks();