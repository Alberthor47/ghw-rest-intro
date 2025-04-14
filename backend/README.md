# Tasks Application API

This is a simple tasks application built with Node.js and Express. It provides a RESTful API for managing tasks, including creating, reading, updating, and deleting tasks (CRUD).

## Project Structure

``` plaintext
backend
├── src
│   ├── index.js               # Entry point of the application
│   ├── controllers            # Contains the task controller
│   │   └── tasksController.js
│   ├── routes                 # Contains the task routes
│   │   └── tasksRoutes.js
│   ├── models                 # Contains the task model
│   │   └── taskModel.js
│   └── config                 # Contains database configuration
│       └── db.js
├── package.json               # NPM configuration file
├── README.md                  # Project documentation
└── slides                     # Contains presentation slides in Marp format
    └── tasks-presentation.md
```

## Installation

1. Clone the repository:

2. Navigate to the project directory:

   ``` bash
   cd backend
   ```

3. Install the dependencies:

   ``` bash
   npm install
   ```

## Usage

1. Start the server:

   ``` bash
   npm start
   ```

2. The API will be available at `http://localhost:3000`.

## API Endpoints

- `POST /tasks` - Create a new task
- `GET /tasks` - Retrieve all tasks
- `GET /tasks/:id` - Retrieve a task by ID
- `PUT /tasks/:id` - Update a task by ID
- `DELETE /tasks/:id` - Delete a task by ID

## Database Configuration

Make sure to configure your MongoDB connection in `src/config/db.js` before starting the server.

## License

This project is licensed under the MIT License.
