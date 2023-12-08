#!usr/bin/env python3
"""Model Holder"""

from config import db, ma

class Recipes(db.Model):
    """Recipe class"""
    __tablename__ = "Recipes"
    An_id = db.Column(db.Integer, primary_key=True)
    Username = db.Column(db.String, nullable=False)
    Description = db.Column(db.String)
    DishName = db.Column(db.String)
    Servings = db.Column(db.Integer)
    Ingredients = db.Column(db.String)
    Image = db.Column(db.String)


    def __repr__(self):
        return f"<Recipes(name={self.DishName!r})>"
    
class RecipesSchema(ma.SQLAlchemySchema):
    """Recipes schema"""
    class Meta:
        """Recipes metadata"""
        model = Recipes
        load_instance = True

    An_id = ma.auto_field()
    Username = ma.auto_field()
    Description = ma.auto_field()
    DishName = ma.auto_field()
    Servings = ma.auto_field()
    Ingredients = ma.auto_field()
    Image = ma.auto_field()


class RecipeList(db.Model):
    """RecipeList class"""
    __tablename__ = "RecipeList"
    An_id = db.Column(db.Integer, primary_key=True)
    RecipeID = db.Column(db.Integer)
    UsernameAdded = db.Column(db.String)
    UsernameSelf = db.Column(db.String)
    Description = db.Column(db.String)
    DishName = db.Column(db.String)
    Servings = db.Column(db.Integer)
    Ingredients = db.Column(db.String)
    Image = db.Column(db.String)


    def __repr__(self):
        return f"<RecipeList(name={self.DishName!r})>"
    
class RecipeListSchema(ma.SQLAlchemySchema):
    """RecipeList schema"""
    class Meta:
        """RecipeList metadata"""
        model = RecipeList
        load_instance = True

    An_id = ma.auto_field()
    RecipeID = ma.auto_field()
    UsernameAdded = ma.auto_field()
    UsernameSelf = ma.auto_field()
    Description = ma.auto_field()
    DishName = ma.auto_field()
    Servings = ma.auto_field()
    Ingredients = ma.auto_field()
    Image = ma.auto_field()


class Users(db.Model):
    """Users class"""
    __tablename__ = "Users"
    An_id = db.Column(db.Integer, primary_key=True)
    Username = db.Column(db.String)
    Password = db.Column(db.String)


    def __repr__(self):
        return f"<Users(name={self.Username!r})>"
    
class UsersSchema(ma.SQLAlchemySchema):
    """Users schema"""
    class Meta:
        """Users metadata"""
        model = Users
        load_instance = True

    An_id = ma.auto_field()
    Username = ma.auto_field()
    Password = ma.auto_field()


class Comments(db.Model):
    """Comments class"""
    __tablename__ = "Comments"
    An_id = db.Column(db.Integer, primary_key=True)
    Username = db.Column(db.String)
    RecipeID = db.Column(db.Integer)
    Comment = db.Column(db.String)
    Rating = db.Column(db.Integer)


    def __repr__(self):
        return f"<Comments(name={self.Username!r})>"
    
class CommentsSchema(ma.SQLAlchemySchema):
    """Comments schema"""
    class Meta:
        """Comments metadata"""
        model = Comments
        load_instance = True

    An_id = ma.auto_field()
    Username = ma.auto_field()
    RecipeID = ma.auto_field()
    Comment = ma.auto_field()
    Rating = ma.auto_field()


class Ingredients(db.Model):
    """Ingredients class"""
    __tablename__ = "Ingredients"
    An_id = db.Column(db.Integer, primary_key=True)
    Category = db.Column(db.String)
    Description = db.Column(db.String)
    Nutrient_Data_Bank_Number = db.Column(db.Float)
    Data_Alpha_Carotene = db.Column(db.Float)
    Data_Beta_Carotene = db.Column(db.Float)
    Data_Beta_Cryptoxanthin = db.Column(db.Float)
    Data_Carbohydrate = db.Column(db.Float)
    Data_Cholesterol = db.Column(db.Float)
    Data_Choline = db.Column(db.Float)
    Data_Fiber = db.Column(db.Float)
    Data_Lutein_and_Zeaxanthin = db.Column(db.Float)
    Data_Lycopene = db.Column(db.Float)
    Data_Niacin = db.Column(db.Float)
    Data_Protein = db.Column(db.Float)
    Data_Retinol = db.Column(db.Float)
    Data_Riboflavin = db.Column(db.Float)
    Data_Selenium = db.Column(db.Float)
    Data_Sugar_Total = db.Column(db.Float)
    Data_Thiamin = db.Column(db.Float)
    Data_Water = db.Column(db.Float)
    Data_Fat_Monosaturated_Fat = db.Column(db.Float)
    Data_Fat_Polysaturated_Fat = db.Column(db.Float)
    Data_Fat_Saturated_Fat = db.Column(db.Float)
    Data_Fat_Total_Lipid = db.Column(db.Float)
    Data_Major_Minerals_Calcium = db.Column(db.Float)
    Data_Major_Minerals_Copper = db.Column(db.Float)
    Data_Major_Minerals_Iron = db.Column(db.Float)
    Data_Major_Minerals_Magnesium = db.Column(db.Float)
    Data_Major_Minerals_Phosphorus = db.Column(db.Float)
    Data_Major_Minerals_Potassium = db.Column(db.Float)
    Data_Major_Minerals_Sodium = db.Column(db.Float)
    Data_Major_Minerals_Zinc = db.Column(db.Float)
    Data_Vitamins_Vitamin_A_RAE = db.Column(db.Float)
    Data_Vitamins_Vitamin_B12 = db.Column(db.Float)
    Data_Vitamins_Vitamin_B6 = db.Column(db.Float)
    Data_Vitamins_Vitamin_C = db.Column(db.Float)
    Data_Vitamins_Vitamin_E = db.Column(db.Float)
    Data_Vitamins_Vitamin_K = db.Column(db.Float)

    def __repr__(self):
        return f"<Ingredients(name={self.Description!r})>"
    
class IngredientsSchema(ma.SQLAlchemySchema):
    """Ingredients schema"""
    class Meta:
        """Ingredients metadata"""
        model = Ingredients
        load_instance = True

    Category = ma.auto_field()
    Description = ma.auto_field()
    Nutrient_Data_Bank_Number = ma.auto_field()
    Data_Alpha_Carotene = ma.auto_field()
    Data_Beta_Carotene = ma.auto_field()
    Data_Beta_Cryptoxanthin = ma.auto_field()
    Data_Carbohydrate = ma.auto_field()
    Data_Cholesterol = ma.auto_field()
    Data_Choline = ma.auto_field()
    Data_Fiber = ma.auto_field()
    Data_Lutein_and_Zeaxanthin = ma.auto_field()
    Data_Lycopene = ma.auto_field()
    Data_Niacin = ma.auto_field()
    Data_Protein = ma.auto_field()
    Data_Retinol = ma.auto_field()
    Data_Riboflavin = ma.auto_field()
    Data_Selenium = ma.auto_field()
    Data_Sugar_Total = ma.auto_field()
    Data_Thiamin = ma.auto_field()
    Data_Water = ma.auto_field()
    Data_Fat_Monosaturated_Fat = ma.auto_field()
    Data_Fat_Polysaturated_Fat = ma.auto_field()
    Data_Fat_Saturated_Fat = ma.auto_field()
    Data_Fat_Total_Lipid = ma.auto_field()
    Data_Major_Minerals_Calcium = ma.auto_field()
    Data_Major_Minerals_Copper = ma.auto_field()
    Data_Major_Minerals_Iron = ma.auto_field()
    Data_Major_Minerals_Magnesium = ma.auto_field()
    Data_Major_Minerals_Phosphorus = ma.auto_field()
    Data_Major_Minerals_Potassium = ma.auto_field()
    Data_Major_Minerals_Sodium = ma.auto_field()
    Data_Major_Minerals_Zinc = ma.auto_field()
    Data_Vitamins_Vitamin_A_RAE = ma.auto_field()
    Data_Vitamins_Vitamin_B12 = ma.auto_field()
    Data_Vitamins_Vitamin_B6 = ma.auto_field()
    Data_Vitamins_Vitamin_C = ma.auto_field()
    Data_Vitamins_Vitamin_E = ma.auto_field()
    Data_Vitamins_Vitamin_K = ma.auto_field()