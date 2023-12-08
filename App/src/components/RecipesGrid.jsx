// // Displays the grid of recipes.//

// // import React from 'react';
// // import RecipeCard from './RecipeCard';

// // function RecipesGrid() {
// //     return (
// //       <div className="recipes-grid">
// //         {/* Example usage of RecipeCard, replace with dynamic content later */}
// //         <RecipeCard 
// //             title="Chocolate Cake" 
// //             description="Delicious chocolate cake recipe" 
// //             imageUrl="/static/chocolate-cake.jpg" 
// //             rating={4} 
// //         />
        
// //         <RecipeCard 
// //             title="Chicken Wings" 
// //             description="Mouth-watering chicken wings with Ranch sauce recipe" 
// //             imageUrl="/static/chicken-wings.jpg" 
// //             rating={5} 
// //         />

// //         <RecipeCard 
// //             title="Spaghetti" 
// //             description="Italian-style spaghetti recipe" 
// //             imageUrl="/static/spaghetti.webp" 
// //             rating={3} 
// //         />

// //         <RecipeCard 
// //             title="Pho Bo" 
// //             description="Vietnamese traditional Pho bo (Beef Pho) recipe" 
// //             imageUrl="/static/pho-bo.jpg" 
// //             rating={5} 
// //         />
// //       </div>
// //     );
// //   }

// // export default RecipesGrid;

// import React, { useEffect, useState } from 'react';
// import RecipeCard from './RecipeCard';
// import '../App.css'

// const RecipesGrid = () => {
//   const [recipes, setRecipes] = useState([]);

//   // 
//   const RecipeCard = ({ DishName, Description, Servings, Ingredients }) => {
//     const [selected, setSelected] = useState(false);
  
//     const handleAddToCart = () => {
//       addToCart({ DishName, Description, Servings, Ingredients });
//       setSelected(true);
//     };
  
//     const handleRemoveFromCart = () => {
//       if (selected) {
//         removeFromCart({ DishName, Description, Servings, Ingredients });
//         setSelected(false);
//       }
//     };
  
//     const addToCart = (recipe) => {
//       fetch('http://localhost:5000/addRecipeList', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(recipe),
//       })
//         .then(response => response.json())
//         .then(data => {
//           alert(`Added ${recipe.DishName} to the cart`);
//           // Handle success, update UI or state as needed
//         })
//         .catch(error => {
//           console.error('Error adding to cart:', error);
//           // Handle error, show error message or retry logic
//         });
//     };
  
//     const removeFromCart = (recipe) => {
//       fetch(`http://localhost:5000/removeRecipeList/${recipe.DishName}`, {
//         method: 'DELETE',
//       })
//         .then(response => response.json())
//         .then(data => {
//           alert(`Removed ${recipe.DishName} from the cart`);
//           // Handle success, update UI or state as needed
//         })
//         .catch(error => {
//           console.error('Error removing from cart:', error);
//           // Handle error, show error message or retry logic
//         });
//     };
//   };
//     // 

//   useEffect(() => {
//     // Fetch recipes from your Flask API
//     const fetchRecipes = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/recipes');

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//       }

//         const data = await response.json();

//         setRecipes(data);
//       } catch (error) {
//         console.error('Error fetching recipes:', error);
//       }
//     };

//     fetchRecipes();
//   }, []);

  

// return (
  
//   <div >
//     <h2 className='headerTitle'>All Recipes</h2>
//     <div className='recipes-grid'>
//       {recipes.map((recipe, index) => (
//         <RecipeCard key={index} {...recipe} />
//       ))}
      
//     </div>
//   </div>
// );
// };
// export default RecipesGrid;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import RecipeCard from './RecipeCard';
import '../App.css';

const RecipesGrid = () => {
  const navigateToCart = useNavigate();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:5000/recipes');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const RecipeCardWrapper = ({ RecipeID, UsernameAdded, UsernameSelf, Description, DishName, Ingredients, Servings, Image }) => {
      const [selected, setSelected] = useState(false);

      const handleAddToCart = () => {
        addToCart({ RecipeID, UsernameAdded, UsernameSelf, Description, DishName, Ingredients, Servings, Image });
        setSelected(true);
    //     fetch(`/addRecipeList/${recipe.recipeid}/${recipe.usernameadded}/${recipe.usernameself}/${recipe.description}/${recipe.dishname}/${recipe.servings}/${recipe.ingredients}/${recipe.image}`)
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data);
    //       alert(`Added ${recipe.dishname} to cart`)
          
    //     })
    //     .catch(error => {
    //       // Handle error
    //       alert(`Error adding recipe to cart:`, error);
    //     });
    // };
      };

      const handleRemoveFromCart = () => {
        if (selected) {
          removeFromCart({ RecipeID, UsernameSelf, Description, DishName, Ingredients, Servings, Image });
          setSelected(false);
        }
      };

      // 

      const removeFromCart = (recipe) => {
        fetch(`http://localhost:5000/deleteRecipe/${RecipeID}/${UsernameSelf}/${Description}/${DishName}/${Ingredients}/${Servings}/${Image}`, {
          method: 'DELETE',
        })
          .then(response => response.json())
          .then(data => {
            alert(`Removed ${recipe.DishName} from the cart`);
            
          })
          .catch(error => {
            console.error('Error removing from cart:', error);
            
          });
      };

  //   return (
  //     <div className="recipe-card">
  //       <div className="recipe-content">
  //         <h3 className="recipe-title">{DishName}</h3>
  //         <p className="recipe-description">{Description}</p>
  //         <p className="recipe-details">Servings: {Servings}</p>
  //         <p className="recipe-details">Ingredients: {Ingredients}</p>
          
  //           {/* <button onClick={handleAddToCart}>Add to Cart</button> */}
          
  //       </div>
  //     </div>
  //   );
  };

 
return (
  
  <div >
    <h2 className='headerTitle'>All Recipes</h2>
    <div className='recipes-grid'>
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} {...recipe} />
      ))}
      
    </div>
  </div>
);
};
export default RecipesGrid;