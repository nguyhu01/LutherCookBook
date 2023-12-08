#!usr/bin/env python3

import werkzeug

from flask_bcrypt import Bcrypt
from logging.config import dictConfig
from werkzeug.exceptions import HTTPException
from flask import Flask, jsonify, json
from flask_cors import CORS
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from model import Ingredients, Comments, RecipeList, Users, Recipes


###
### Create App
###

app = Flask(__name__)

# CORS Initialization
CORS(app)

# Encryption Initialization
bcrypt = Bcrypt(app)

###
### Configure Logger
###

dictConfig({
    'version': 1,
    'formatters': {'default': {
        'format': '[%(asctime)s] %(levelname)s in %(module)s: %(message)s',
    }},
    'handlers': {'wsgi': {
        'class': 'logging.StreamHandler',
        'stream': 'ext://flask.logging.wsgi_errors_stream',
        'formatter': 'default'
    }},
    'root': {
        'level': 'INFO',
        'handlers': ['wsgi']
    }
})

###
### Initialize SQLAlchemy Engine
###

engine = create_engine("sqlite:///ingredients.sqlite3")
Session = sessionmaker(bind=engine)

###
### Tester to add to empty databases
###

def newRecipe(username, description, dishname, servings, ingredients):
    session = Session()

    try:
        new_recipe = Recipes(
            Username=username,
            Description=description,
            DishName=dishname,
            Servings=servings,
            Ingredients=ingredients
        )

        session.add(new_recipe)
        session.commit()

    except:
        ErrorHandler = {"Error": "Found"}
        return jsonify(ErrorHandler)

    finally:
        session.close()


###
### Adding Functions
###

@app.route("/addUser/<username>/<password>")
def addUser(username, password):
    session = Session()

    try:
        query = session.query(Users)
        exists = bool(query.filter_by(Username=username).first())

        if not exists:
            new_user = Users(
                Username=username,
                Password=password
            )

            session.add(new_user)
            session.commit()
            worked = {"Works":"Yes"}
            return jsonify(worked)
        
        elif exists:
            app.logger.info('%s failed to log in', query.filter_by(Username=username).first())
            worked = {"Works":"No"}
            return  jsonify(worked)
        
    except:
        ErrorHandler = {"Error": "Found"}
        return jsonify(ErrorHandler)

    finally:
        session.close()


@app.route("/addRecipe/<username>/<description>/<dish_name>/<servings>/<ingredients>/<image>")
def addRecipe(username, description, dish_name, servings, ingredients, image):
    session = Session()

    try:
        query = session.query(Users)

        new_recipe = Recipes(
            Username=username,
            Description=description,
            DishName=dish_name,
            Servings=servings,
            Ingredients=ingredients,
            Image=image
        )

        session.add(new_recipe)
        session.commit()
        worked = {"Works":"Yes"}
        return jsonify(worked)
    
    except:
        ErrorHandler = {"Error": "Found"}
        return jsonify(ErrorHandler)

    finally:
        session.close()


@app.route("/addComment/<username>/<recipeid>/<comment>/<rating>")
def addComment(username, recipeid, comment, rating):
    session = Session()

    try:
        query = session.query(Comments)

        new_comment = Comments(
            Username=username,
            RecipeID=recipeid,
            Comment=comment,
            Rating=rating
        )

        session.add(new_comment)
        session.commit()
        worked = {"Works":"Yes"}
        return jsonify(worked)
    
    except:
        ErrorHandler = {"Error": "Found"}
        return jsonify(ErrorHandler)

    finally:
        session.close()


@app.route("/addRecipeList/<recipeid>/<usernameadded>/<usernameself>/<description>/<dishname>/<servings>/<ingredients>/<image>")
def addRecipeList(recipeid, usernameadded, usernameself, description, dishname, servings, ingredients, image):
    session = Session()

    try:
        query = session.query(RecipeList)

        new_recipelist = RecipeList(
            RecipeID=recipeid, 
            UsernameAdded=usernameadded, 
            UsernameSelf=usernameself, 
            Description=description, 
            DishName=dishname, 
            Servings=servings, 
            Ingredients=ingredients,
            Image=image
        )

        session.add(new_recipelist)
        session.commit()
        worked = {"Works":"Yes"}
        return jsonify(worked)
    
    except:
        ErrorHandler = {"Error": "Found"}
        return jsonify(ErrorHandler)

    finally:
        session.close()


###
### Delete Function
###

@app.route("/deleteRecipe/<username>/<description>/<dish_name>/<servings>/<ingredients>/<image>")
def deleteRecipe(username, description, dish_name, servings, ingredients, image):
    session = Session()

    try:
        query = session.query(Recipes).filter(
            Recipes.Username == username,
            Recipes.Description == description,
            Recipes.DishName == dish_name,
            Recipes.Servings == servings,
            Recipes.Ingredients == ingredients,
            Recipes.Image == image).first()

        session.delete(query)
        session.commit()
        worked = {"Works":"Yes"}
        return jsonify(worked)
    
    except:
        ErrorHandler = {"Error": "Found"}
        return jsonify(ErrorHandler)

    finally:
        session.close()


@app.route("/deleteRecipeList/<recipeid>/<usernameadded>/<usernameself>/<description>/<dishname>/<servings>/<ingredients>/<image>")
def deleteRecipeList(recipeid, usernameadded, usernameself, description, dishname, servings, ingredients, image):
    session = Session()

    try:
        query = session.query(RecipeList).filter(
            RecipeList.RecipeID == recipeid,
            RecipeList.UsernameAdded == usernameadded,
            RecipeList.UsernameSelf == usernameself,
            RecipeList.Description == description,
            RecipeList.DishName == dishname,
            RecipeList.Servings == servings,
            RecipeList.Ingredients == ingredients,
            RecipeList.Image == image).first()

        session.delete(query)
        session.commit()
        worked = {"Works":"Yes"}
        return jsonify(worked)
    
    except:
        ErrorHandler = {"Error": "Found"}
        return jsonify(ErrorHandler)

    finally:
        session.close()


@app.route("/deleteComment/<username>/<recipeid>/<comment>/<rating>")
def deleteComment(username, recipeid, comment, rating):
    session = Session()

    try:
        query = session.query(Comments).filter(
            Comments.Username == username,
            Comments.RecipeID == recipeid,
            Comments.Comment == comment,
            Comments.Rating == rating).first()

        session.delete(query)
        session.commit()
        worked = {"Works":"Yes"}
        return jsonify(worked)
    
    except:
        ErrorHandler = {"Error": "Found"}
        return jsonify(ErrorHandler)

    finally:
        session.close()


###
### Get/Filtering Functions
###

@app.route("/recipes", defaults={"dishname": None})
@app.route("/recipes/<dishname>")
def getRecipe(dishname):
    session = Session()

    try:
        query = session.query(Recipes)

        if dishname:
            query = query.filter_by(DishName=dishname)

        recipes = query.all()

        recipes_list = [
            {
                "Username": recipe.Username,
                "Description": recipe.Description,
                "Dish Name": recipe.DishName,
                "Servings": recipe.Servings,
                "Ingredients": recipe.Ingredients,
                "Image": recipe.Image
            }

            for recipe in recipes
        ]

        response = jsonify(recipes_list)
        return response
    
    except:
        ErrorHandler = {"Error": "Found"}
        return jsonify(ErrorHandler)

    finally:
        session.close()


@app.route("/recipelist", defaults={"usernameself": None})
@app.route("/recipelist/<usernameself>")
def getRecipeList(usernameself):
    session = Session()

    try:
        query = session.query(RecipeList)

        if usernameself:
            query = query.filter_by(UsernameSelf=usernameself)

        recipelists = query.all()

        recipelist_list = [
            {
                "RecipeID": recipelist.RecipeID,
                "Username Who Added": recipelist.UsernameAdded,
                "Username of Self": recipelist.UsernameSelf,
                "Description": recipelist.Description,
                "Dish Name": recipelist.DishName,
                "Servings": recipelist.Servings,
                "Ingredients": recipelist.Ingredients,
                "Image": recipelist.Image
            }

            for recipelist in recipelists
        ]

        response = jsonify(recipelist_list)
        return response
    
    except:
        ErrorHandler = {"Error": "Found"}
        return jsonify(ErrorHandler)
    
    finally:
        session.close()

# For some reason, all passwords must be lowercase, except for a few,
#     but for simplicity, keep them all lowercase
@app.route("/users", defaults={"password": None})
@app.route("/users/<password>")
def getUsers(password):
    session = Session()

    try:
        query = session.query(Users)

        if password:
            query = query.filter_by(Password=password)
            users = query.all()

            users_list = [
                {
                    "Username": user.Username,
                    "Password": user.Password
                }

                for user in users
            ]

            response = jsonify(users_list)
            return response
        
        else:
            return "<h1>No Access Rights</h1>"
    
    except:
        ErrorHandler = {"Error": "Found"}
        return jsonify(ErrorHandler)
    
    finally:
        session.close()


@app.route("/comments", defaults={"recipeid": None})
@app.route("/comments/<recipeid>")
def getComments(recipeid):
    session = Session()

    try:
        query = session.query(Comments)

        if recipeid:
            query = query.filter_by(RecipeID=recipeid)

        comments = query.all()

        comments_list = [
            {
                "Username": comment.Username,
                "RecipeID": comment.RecipeID,
                "Comment": comment.Comment,
                "Rating": comment.Rating
            }

            for comment in comments
        ]

        response = jsonify(comments_list)
        return response
    
    except:
        ErrorHandler = {"Error": "Found"}
        return jsonify(ErrorHandler)

    finally:
        session.close()

@app.route("/ingredients", defaults={"category": None})
@app.route("/ingredients/<string:category>")
def getIngredients(category):
    session = Session()

    try:
        query = session.query(Ingredients)

        if category:
            category = category.title()
            query = query.filter_by(Category=category)

        ingredients = query.all()

        ingredients_list = [
            {
                "Ingredient Data": {
                "Category": ingredient.Category,
                "Description": ingredient.Description,
                "Nutrient Data Bank Number": ingredient.Nutrient_Data_Bank_Number},
                "Nutrition Data": {
                "Data.Alpha Carotene": ingredient.Data_Alpha_Carotene,
                "Data.Beta Carotene": ingredient.Data_Beta_Carotene,
                "Data.Beta Cryptoxanthin": ingredient.Data_Beta_Cryptoxanthin,
                "Data.Carbohydrate": ingredient.Data_Carbohydrate,
                "Data.Cholesterol": ingredient.Data_Cholesterol,
                "Data.Choline": ingredient.Data_Choline,
                "Data.Fiber": ingredient.Data_Fiber,
                "Data.Lutein and Zeaxanthin": ingredient.Data_Lutein_and_Zeaxanthin,
                "Data.Lycopene": ingredient.Data_Lycopene,
                "Data.Niacin": ingredient.Data_Niacin,
                "Data.Protein": ingredient.Data_Protein,
                "Data.Retinol": ingredient.Data_Retinol,
                "Data.Riboflavin": ingredient.Data_Riboflavin,
                "Data.Selenium": ingredient.Data_Selenium,
                "Data.Sugar Total": ingredient.Data_Sugar_Total,
                "Data.Thiamin": ingredient.Data_Thiamin,
                "Data.Water": ingredient.Data_Water,
                "Data.Fat.Monosaturated Fat": ingredient.Data_Fat_Monosaturated_Fat,
                "Data.Fat.Polysaturated Fat": ingredient.Data_Fat_Polysaturated_Fat,
                "Data.Fat.Saturated Fat": ingredient.Data_Fat_Saturated_Fat,
                "Data.Fat.Total Lipid": ingredient.Data_Fat_Total_Lipid,
                "Data.Major Minerals.Calcium": ingredient.Data_Major_Minerals_Calcium,
                "Data.Major Minerals.Copper": ingredient.Data_Major_Minerals_Copper,
                "Data.Major Minerals.Iron": ingredient.Data_Major_Minerals_Iron,
                "Data.Major Minerals.Magnesium": ingredient.Data_Major_Minerals_Magnesium,
                "Data.Major Minerals.Phosphorus": ingredient.Data_Major_Minerals_Phosphorus,
                "Data.Major Minerals.Potassium": ingredient.Data_Major_Minerals_Potassium,
                "Data.Major Minerals.Sodium": ingredient.Data_Major_Minerals_Sodium,
                "Data.Major Minerals.Zinc": ingredient.Data_Major_Minerals_Zinc,
                "Data.Vitamins.Vitamin A - RAE": ingredient.Data_Vitamins_Vitamin_A_RAE,
                "Data.Vitamins.Vitamin B12": ingredient.Data_Vitamins_Vitamin_B12,
                "Data.Vitamins.Vitamin B6": ingredient.Data_Vitamins_Vitamin_B6,
                "Data.Vitamins.Vitamin C": ingredient.Data_Vitamins_Vitamin_C,
                "Data.Vitamins.Vitamin E": ingredient.Data_Vitamins_Vitamin_E,
                "Data.Vitamins.Vitamin K": ingredient.Data_Vitamins_Vitamin_K
            }}

            for ingredient in ingredients
        ]

        response = jsonify(ingredients_list)

        return response
    
    except:
        ErrorHandler = {"Error": "Found"}
        return jsonify(ErrorHandler)

    finally:
        session.close()

###
### Error Handler
###

@app.errorhandler(werkzeug.exceptions.BadRequest)
def handle_BadRequest(e):
    ErrorHandler = {
        "Error": "Found",
        "ErrorHandler": f"{e}"
    }

    return jsonify(ErrorHandler)

@app.errorhandler(HTTPException)
def handle_exception(e):
    response = e.get_response()
    response.data = json.dumps({
        "Error Code": e.code,
        "Error Name": e.name,
        "Error Description": e.description,
    })

    response.content_type = "application/json"
    return response


###
### Run
###

if __name__ == '__main__':
    app.run(host="localhost", port=6000, debug=True)