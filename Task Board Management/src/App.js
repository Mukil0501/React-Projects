import React, { useState } from 'react';
import './App.css';


export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    assignee: '',
    priority: 'P0',
    category: '',
    startDate: '',
    endDate: '',
    status: 'Pending'
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation: check all fields filled
    for (const key in formData) {
      if (!formData[key]) {
        alert(`Please fill the ${key} field`);
        return;
      }
    }
    setTasks(prev => [...prev, {...formData, id: Date.now()}]);
    // Clear form
    setFormData({
      title: '',
      description: '',
      assignee: '',
      priority: 'P0',
      category: '',
      startDate: '',
      endDate: '',
      status: 'Pending'
    });
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <form onSubmit={handleSubmit}>
        Title: <input id="title" placeholder="Title" value={formData.title} onChange={handleChange} />
        Description: <input id="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        Assignee: <input id="assignee" placeholder="Assignee" value={formData.assignee} onChange={handleChange} />
        priority: <select id="priority" value={formData.priority} onChange={handleChange}>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>
        Category: <input id="category" placeholder="Category" value={formData.category} onChange={handleChange} />
       Start-Date:  <input id="startDate" type="date" value={formData.startDate} onChange={handleChange} />
       End-Date: <input id="endDate" type="date" value={formData.endDate} onChange={handleChange} />
       Status: <select id="status" value={formData.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit">Add Task</button>
      </form>

      <table border="1" style={{marginTop:'20px', width:'100%'}}>
        <thead>
          <tr>
            <th>Title</th><th>Description</th><th>Assignee</th><th>Priority</th><th>Category</th><th>Start</th><th>End</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.assignee}</td>
              <td>{task.priority}</td>
              <td>{task.category}</td>
              <td>{task.startDate}</td>
              <td>{task.endDate}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
