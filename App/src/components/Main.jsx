import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import '../App'

const AuthButtons = () => {
    const navigateTo = useNavigate();

    const checkLoggedInUser = () => {
        const storedToken = localStorage.getItem('token'); 

    if (storedToken) {
        // User is logged in, redirect to RecipeGrid
        navigateTo('/recipes');
        }
    };

    React.useEffect(() => {
        checkLoggedInUser();
      }, []);

  const mainStyle = {
    padding: '20px',

  }
  const buttonStyle ={
    padding: '5px',
  }

  return (
    
    <div style= {mainStyle} className="auth-buttons">
        <ul style= {buttonStyle}>
      <Link to="/login">Log In</Link>
        </ul>

        <ul style= {buttonStyle}>
      <Link to="/signup">Sign Up</Link>
        </ul>

        {/* <li style= {buttonStyle}  className="buttons">
      <Link to="/signup">SignUp</Link>

      </li> */}
    </div>
  );
};

export default AuthButtons;

