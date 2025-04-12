import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

function EditTask() {
  const { id } = useParams();
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await api.get(`/${id}`);
      setTask(res.data);
    };
    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put(`/${id}`, task);
    navigate("/");
  };

  const styles = {
    container: {
        width: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial",
        fontSize: "16px"
      },
      heading: {
        textAlign: "center",
        marginBottom: "20px"
      },
      label: {
        display: "block",
        marginBottom: "6px",
        fontWeight: "bold"
      },
      input: {
        width: "100%",
        padding: "10px",
        marginBottom: "15px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize:"16px",
        fontWeight:"bold"
      },
    button: {
        width: "100%",
        padding: "10px",
        backgroundColor: "#4CAF50",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Edit Task</h3>
      <form onSubmit={handleSubmit}>
        <label style={styles.label}>Title</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Description</label>
        <input
          type="text"
          name="description"
          value={task.description}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Status</label>
        <input
          type="text"
          name="status"
          value={task.status}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>Update Task</button>
      </form>
    </div>
  );
}

export default EditTask;
