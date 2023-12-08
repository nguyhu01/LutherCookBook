// import React, { useState } from 'react';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
  
//     const handleLogin = async () => {
      
//       const url = `http://localhost:5000/users/${password}`; 
  
//       const data = {
//         username,
//         password,
//       };
  
//       try {
//         const response = await fetch(url, {
        
//         });
  
//         if (response.ok) {
//           const result = await response.json();
//           alert(`Login successful! User ID: ${result.user_id}`);
//         } else {
//           alert('Login failed. Please check your username and password.');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form>
//         <label>
//           Username:
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
//         <br />
//         <button type="button" onClick={handleLogin}>Log In</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigateTo = useNavigate();

//   Generate Unique Token for Local Storage

function generateUniqueToken(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

// 

  const handleLogin = async () => {
    const url = `http://localhost:5000/users/${password}`;

    try {
      const response = await fetch(url);

      if (response.ok) {
        const result = await response.json();
        if (result.length > 0) {
          alert(`Login successful! User ID: ${result[0].Username}`);

          const userToken = generateUniqueToken(12);

          localStorage.setItem('token', userToken);
          localStorage.setItem('username', username);
          document.cookie = `username=${username}; path=/`;

          // Redirect to RecipesGrid.jsx
          navigateTo('/recipes');
        } else {
          alert('Login failed. Please check your username and password.');
        }
      } else {
        alert('Login failed. Please check your username and password.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;

