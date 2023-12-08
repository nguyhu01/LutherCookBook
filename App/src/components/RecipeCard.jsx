// import React from 'react';

// function RecipeCard({ title, description, servings, ingredients }) {
//   return (
//     <div className="recipe-card">
     
//       {/* <img src={imageUrl} alt={title} className="recipe-image" /> */}
//       <div className="recipe-content">
//         <h3>{title}</h3>
      
//         {/* <div className="recipe-rating">
//           {'★'.repeat(rating)}
//           {'☆'.repeat(5 - rating)}
//         </div> */}
//         <p>{description}</p>
//         <p>Servings: {servings}</p>
//         <p>Ingredients: {ingredients}</p>
//       </div>
//     </div>
//   );
// }

// export default RecipeCard;

import React, {useState } from 'react';
import '../App.css'



function RecipeCard({ RecipeID, UsernameAdded, UsernameSelf, Description, DishName, Ingredients, Servings, Image }) {
    const [cartItems, setCartItems] = useState([]);
    const [selected, setSelected] = useState(false);

    const handleAddToCart = async (e) => {
        e.preventDefault();

        
        
      // Double check updatedCartItems
        const updatedCartItems = [...cartItems, { RecipeID, UsernameAdded, UsernameSelf, Description, DishName, Ingredients, Servings, Image }];
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            
        
        const addToCart = (recipe) => {
          fetch(`http://localhost:5000/addRecipeList/${recipe.RecipeID}/${recipe.UsernameAdded}/${recipe.UsernameSelf}/${recipe.Description}/${recipe.DishName}/${recipe.Ingredients}/${recipe.Servings}/${recipe.Image}`, {
            
          })
            .then(response => response.json())
            .then(data => {
              alert(`Added ${recipe.DishName} to the cart`);
        
            })
            .catch(error => {
              console.error('Error adding to cart:', error);
              
            });
        };

        addToCart({ RecipeID, UsernameAdded, UsernameSelf, Description, DishName, Ingredients, Servings, Image });
        setSelected(true);
  }
  return (
    <div className="recipe-card">
      <div className="recipe-content">
        <h3 className="recipe-title">{cartItems.DishName}</h3>
        <p className="recipe-description">{cartItems.Description}</p>
        <p className="recipe-details">Servings: {cartItems.Servings}</p>
        <p className="recipe-details">Ingredients: {cartItems.Ingredients}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );

}
export default RecipeCard;
