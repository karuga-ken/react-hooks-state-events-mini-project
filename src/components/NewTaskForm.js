import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
 const [taskText, setTaskText] = useState("");
 const [taskCategory, setTaskCategory] = useState(categories[0]);

 const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(taskText, taskCategory);
    setTaskText("");
    setTaskCategory(categories[0]);
 }

 return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)}>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
 );
}

export default NewTaskForm;