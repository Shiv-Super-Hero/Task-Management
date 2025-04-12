import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", { username, password });
      setSuccess("Registered successfully! Redirecting to login...");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      setError("Registration failed");
    }
  };

  const styles = {
    container: {
      maxWidth: "400px",
      margin: "100px auto",
      padding: "30px",
      backgroundColor: "#f5f5f5",
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      fontFamily: "Arial, sans-serif"
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "14px"
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "bold"
    },
    error: {
      color: "red",
      fontSize: "14px"
    },
    success: {
      color: "green",
      fontSize: "14px"
    },
    link: {
      display: "block",
      marginTop: "15px",
      color: "#007bff",
      textDecoration: "none"
    }
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          style={styles.input}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}
        <button style={styles.button} type="submit">
          Register
        </button>
      </form>
      <Link to="/" style={styles.link}>
        Already have an account? Login here
      </Link>
    </div>
  );
}

export default Register;
