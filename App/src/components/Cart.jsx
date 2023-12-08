// // import React, { useState } from 'react';

// // const AddRecipe = () => {
// //   // State to store form data
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     description: '',
// //     price: 0,
// //     availability: false,
// //     image: null,
// //   });

// //   // Handle form input changes
// //   const handleInputChange = (e) => {
// //     const { name, value, type, checked, files } = e.target;
    
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
// //     }));
// //   };

// //   // Handle form submission
// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const formData = new FormData();
// //     formData.append('name', formData.name);
// //     formData.append('description', formData.description);
// //     formData.append('price', formData.price);
// //     formData.append('availability', formData.availability);
// //     formData.append('image', formData.image);

// //     try {
// //       // Make a POST request to your Flask back-end
// //       const response = await fetch('your-flask-api-endpoint', {
// //         method: 'POST',
// //         body: formData,
// //       });

// //       if (response.ok) {
        
// //         console.log('Recipe added successfully!');
// //       } else {
      
// //         console.error('Error adding recipe:', response.statusText);
// //       }
// //     } catch (error) {
      
// //       console.error('Network error:', error.message);
// //     }

// //     // Clear the form after submission
// //     setFormData({
// //       name: '',
// //       description: '',
// //       price: 0,
// //       availability: false,
// //       image: null,
// //     });
// //   };

// //   return (

// //     <div className="container mt-4">
// //       <div>
// //         <h2>Add a Recipe</h2>
// //         <p>Share your favorite recipe with the community!</p>
        
// //         <form onSubmit={handleSubmit} encType="multipart/form-data">
// //           <div className="mb-3">
// //             <label htmlFor="name" className="form-label">Name</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               id="name"
// //               name="name"
// //               value={formData.name}
// //               onChange={handleInputChange}
// //               required
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="description" className="form-label">Description</label>
// //             <textarea
// //               className="form-control"
// //               id="description"
// //               name="description"
// //               value={formData.description}
// //               onChange={handleInputChange}
// //             ></textarea>
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="price" className="form-label">Price</label>
// //             <input
// //               type="number"
// //               className="form-control"
// //               id="price"
// //               name="price"
// //               value={formData.price}
// //               onChange={handleInputChange}
// //               required
// //             />
// //           </div>
// //           <div className="mb-3 form-check">
// //             <input
// //               type="checkbox"
// //               className="form-check-input"
// //               id="availability"
// //               name="availability"
// //               checked={formData.availability}
// //               onChange={handleInputChange}
// //             />
// //             <label className="form-check-label" htmlFor="availability">Available</label>
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="image" className="form-label">Recipe Image</label>
// //             <input
// //               type="file"
// //               className="form-control"
// //               id="image"
// //               name="image"
// //               onChange={handleInputChange}
// //             />
// //           </div>
// //           <button type="submit" className="btn btn-primary">Add Recipe</button>
// //         </form>
// //       </div>

// //       <hr />

// //       {/* Display existing recipes */}
// //       {/* Implement logic to fetch and display existing recipes */}
// //     </div>
// //   );
// // };

// // export default AddRecipe;

// // //   return (
// // //     <div>
// // //       <h2>Add a Recipe</h2>
// // //       <p>Share your favorite recipe with the community!</p>
// // //       {/* Add a form for users to submit recipes */}
// // //     </div>
// // //   );
// // // }


// import React, { useState } from 'react';
// import '../App.css';

// const AddRecipe = () => {
//   const [username, setUsername] = useState('');
//   const [description, setDescription] = useState('');
//   const [dishName, setDishName] = useState('');
//   const [servings, setServings] = useState('');
//   const [ingredients, setIngredients] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Assuming you have a function `newRecipe` in app.py to handle adding a new recipe
  
//     const url = 'http://localhost:5000/add_recipe';  

//     const data = {
//       username,
//       description,
//       dishName,
//       servings,
//       ingredients,
//     };

//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
        
//         console.log('Recipe added successfully!');
//       } else {
        
//         console.error('Failed to add recipe');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (

//       <div className="container mt-4 add-recipe-container">
//         <h3 className="add-recipe-title">Add New Recipe</h3>
//         <form className="add-recipe-form" onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="username" className="form-label">Username</label>
//             <input type="text" className="form-control" id="username" name="username" required onChange={(e) => setUsername(e.target.value)} />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="description" className="form-label">Description</label>
//             <textarea className="form-control" id="description" name="description" onChange={(e) => setDescription(e.target.value)}></textarea>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="dishName" className="form-label">Dish Name</label>
//             <input type="text" className="form-control" id="dishName" name="dishName" required onChange={(e) => setDishName(e.target.value)} />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="servings" className="form-label">Servings</label>
//             <input type="number" className="form-control" id="servings" name="servings" required onChange={(e) => setServings(e.target.value)} />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="ingredients" className="form-label">Ingredients</label>
//             <input type="text" className="form-control" id="ingredients" name="ingredients" required onChange={(e) => setIngredients(e.target.value)} />
//           </div>
//           <button type="submit" className="btn btn-primary">Add Recipe</button>
//         </form>
//       </div>
//     );
//   };


// export default AddRecipe;


import React, { useEffect,useState } from 'react';
import '../App.css';
import RecipesGrid from './RecipesGrid';

// const AddRecipe = () => {
//   const [RecipeID, setRecipe] = useState('');
//   const [UsernameAdded, setAuthor] = useState('');
//   const [UsernameSelf, setUser] = useState('');
//   const [Description, setDescription] = useState('');
//   const [DishName, setDishName] = useState('');
//   const [Ingredients, setIngredients] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const url = `http://localhost:5000/RecipeList/${RecipeID}/${UsernameAdded}/${UsernameSelf}/${Description}/${DishName}/${Ingredients}/mughees.jpeg`;
  
//     try {
//       const response = await fetch(url);
  
//       if (response.ok) {
//         alert('Recipe added successfully!');
//       } else {
//         console.error('Failed to add recipe');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

// function Cart ({}) {
const Cart = () => {
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems'))
    // const [recipes, setRecipes] = useState([]);
    // const [cartItems, setCartItems] = useState([]);
    // localStorage.getItem('cartItems')

    
  
    useEffect(() => {
      const fetchRecipes = async () => {
        try {
          const response = await fetch(`http://localhost:5000/recipelist`);
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
        }
  
          const data = await response.json();
  
        //   updateCartItems(data);
        } catch (error) {
          console.error('Error fetching recipes:', error);
        }
      };
  
      fetchRecipes();
    }, []);
  
    

    return (
        <div className="recipe-card">
          <div className="recipe-content">
            <h3 className="recipe-title">{cartItems.DishName}</h3>
            <p className="recipe-description">{cartItems.Description}</p>
            <p className="recipe-details">Servings: {cartItems.Servings}</p>
            <p className="recipe-details">Ingredients: {cartItems.Ingredients}</p>
            
          </div>
        </div>
      );
    };

export default Cart;

