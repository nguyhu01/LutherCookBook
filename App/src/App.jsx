
import React from 'react';
import Navbar from './components/Navbar';
import RecipesGrid from './components/RecipesGrid';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import AddRecipe from './components/AddRecipe';
import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';
import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/recipes" element={<RecipesGrid />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add_recipe" element={<AddRecipe />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;

