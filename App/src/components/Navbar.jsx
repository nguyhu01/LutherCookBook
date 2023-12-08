// Displays navigation options like Home, Search, Submit Recipe, and Favorites.

import React from 'react';
import { Link } from 'react-router-dom'; 
// import '../NavBar.css';

function Navbar() {
    const navbarStyle = {
        backgroundColor: '#7d4071',
        padding: '15px 30px',
        color: 'white',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      };
    
      const navListStyle = {
        listStyle: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
      };
    
      const navItemStyle = {
        margin: '0 20px',
      };
    
      const navLinkStyle = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.2em',
      };
    return (
        <nav style={navbarStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 className="headerTitle">Luther CookBook</h1>
            <ul style={navListStyle}>
            {/* Repeat for each nav item */}
            <li style={navItemStyle}>
                <Link to="/" style={navLinkStyle}>🏠 Home</Link>
            </li>

            <li style={navItemStyle}>
                <Link to="/about" style={navLinkStyle}>🌐 About</Link>
            </li>

            <li style={navItemStyle}>
                <Link to="/contact" style={navLinkStyle}>☎️ Contact</Link>
            </li>

            <li style={navItemStyle}>
                <Link to="/add_recipe" style={navLinkStyle}>📝 Add Recipe</Link>
            </li>

            <li style={navItemStyle}>
                <Link to="/cart" style={navLinkStyle}>🛒 Cart</Link>
            </li>
            </ul>
        </div>
        </nav>

    );
    }

export default Navbar;
