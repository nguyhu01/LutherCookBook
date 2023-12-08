import React, { useEffect, useState } from 'react';
import '../App.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password) {
      fetchSignUp();
    }
  };

  const fetchSignUp = async () => {
    try {
      const response = await fetch(`http://localhost:5000/addUser/${username}/${password}`, {});

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      alert(`User added successfully: ${JSON.stringify(data)}`);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };



  return (
    <div className="container">
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label className="form-label">
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
            />
          </label>

          <label className="form-label">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
          </label>
          <button type="submit" className="form-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
