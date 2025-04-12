import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    const res = await api.get("/task");
    setTasks(res.data);
  };

  const deleteTask = async (id) => {
    await api.delete(`/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const styles = {
    container: { textAlign: "center", margin: "20px" },
    button: {
      marginBottom: "20px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      padding: "10px 20px",
      cursor: "pointer",
      borderRadius: "4px"
    },
    table: {
      width: "80%",
      margin: "0 auto",
      borderCollapse: "collapse",
      fontFamily: "Arial, sans-serif",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)"
    },
    th: {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "12px",
      border: "1px solid #ddd",
      textAlign: "left"
    },
    td: {
      padding: "12px",
      border: "1px solid #ddd"
    },
    editBtn: {
      marginRight: "10px",
      backgroundColor: "#2196F3",
      color: "white",
      border: "none",
      padding: "6px 12px",
      cursor: "pointer",
      borderRadius: "4px"
    },
    deleteBtn: {
      backgroundColor: "#f44336",
      color: "white",
      border: "none",
      padding: "6px 12px",
      cursor: "pointer",
      borderRadius: "4px"
    }
  };

  return (
    <div style={styles.container}>
      <h2>Task Manager</h2>
      <button style={styles.button} onClick={() => navigate("/add")}>
        Add Task
      </button>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Title</th>
            <th style={styles.th}>Description</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td style={styles.td}>{task.title}</td>
              <td style={styles.td}>{task.description}</td>
              <td style={styles.td}>{task.status}</td>
              <td style={styles.td}>
                <button
                  style={styles.editBtn}
                  onClick={() => navigate(`/edit/${task.id}`)}
                >
                  Edit
                </button>
                <button
                  style={styles.deleteBtn}
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
