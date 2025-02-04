import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
    const [tasks, setTasks] = useState(TASKS);
    const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    }

    const handleFilterChange = (category) => {
        setSelectedCategory(category);
    }

    const handleTaskFormSubmit = (taskText, taskCategory) => {
        const newTask = { id: tasks.length + 1, text: taskText, category: taskCategory };
        setTasks([...tasks, newTask]);
    }

    return (
        <div className="App">
            <h2>My tasks</h2>
            <CategoryFilter 
                categories={CATEGORIES} 
                selectedCategory={selectedCategory} 
                onFilterChange={handleFilterChange} 
            />
            <NewTaskForm onTaskFormSubmit={handleTaskFormSubmit} categories={CATEGORIES} />
            <TaskList tasks={tasks} deleteTask={deleteTask}/>
        </div>
    );
}

export default App;