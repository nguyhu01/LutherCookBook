#!usr/bin/env python3
"""Build Database"""

import csv
import pathlib

import sqlalchemy as sa
from sqlalchemy.orm import scoped_session, sessionmaker

from model import Recipes, Users, Comments, RecipeList, Ingredients

this_dir = pathlib.Path(__file__).parent
engine = sa.create_engine(f"sqlite:///{this_dir}/ingredients.sqlite3")
session = scoped_session(sessionmaker(bind=engine))

def init_db(filename: str):
    """Initialize the database"""
    if pathlib.Path(f"{this_dir}/{filename}.sqlite3").exists():
        pathlib.Path(f"{this_dir}/{filename}.sqlite3").unlink()

    Recipes.metadata.create_all(engine)
    Users.metadata.create_all(engine)
    Comments.metadata.create_all(engine)
    RecipeList.metadata.create_all(engine)
    Ingredients.metadata.create_all(engine)

    with open(f"{filename}.csv", "r", encoding="utf8") as connection:
        list = csv.DictReader(connection)

        for item in list:

            _Ingredients = Ingredients(
                Category=item["Category"],
                Description=item["Description"],
                Nutrient_Data_Bank_Number=item["Nutrient Data Bank Number"],
                Data_Alpha_Carotene=item["Data.Alpha Carotene"],
                Data_Beta_Carotene=item["Data.Beta Carotene"],
                Data_Beta_Cryptoxanthin=item["Data.Beta Cryptoxanthin"],
                Data_Carbohydrate=item["Data.Carbohydrate"],
                Data_Cholesterol=item["Data.Cholesterol"],
                Data_Choline=item["Data.Choline"],
                Data_Fiber=item["Data.Fiber"],
                Data_Lutein_and_Zeaxanthin=item["Data.Lutein and Zeaxanthin"],
                Data_Lycopene=item["Data.Lycopene"],
                Data_Niacin=item["Data.Niacin"],
                Data_Protein=item["Data.Protein"],
                Data_Retinol=item["Data.Retinol"],
                Data_Riboflavin=item["Data.Riboflavin"],
                Data_Selenium=item["Data.Selenium"],
                Data_Sugar_Total=item["Data.Sugar Total"],
                Data_Thiamin=item["Data.Thiamin"],
                Data_Water=item["Data.Water"],
                Data_Fat_Monosaturated_Fat=item["Data.Fat.Monosaturated Fat"],
                Data_Fat_Polysaturated_Fat=item["Data.Fat.Polysaturated Fat"],
                Data_Fat_Saturated_Fat=item["Data.Fat.Saturated Fat"],
                Data_Fat_Total_Lipid=item["Data.Fat.Total Lipid"],
                Data_Major_Minerals_Calcium=item["Data.Major Minerals.Calcium"],
                Data_Major_Minerals_Copper=item["Data.Major Minerals.Copper"],
                Data_Major_Minerals_Iron=item["Data.Major Minerals.Iron"],
                Data_Major_Minerals_Magnesium=item["Data.Major Minerals.Magnesium"],
                Data_Major_Minerals_Phosphorus=item["Data.Major Minerals.Phosphorus"],
                Data_Major_Minerals_Potassium=item["Data.Major Minerals.Potassium"],
                Data_Major_Minerals_Sodium=item["Data.Major Minerals.Sodium"],
                Data_Major_Minerals_Zinc=item["Data.Major Minerals.Zinc"],
                Data_Vitamins_Vitamin_A_RAE=item["Data.Vitamins.Vitamin A - RAE"],
                Data_Vitamins_Vitamin_B12=item["Data.Vitamins.Vitamin B12"],
                Data_Vitamins_Vitamin_B6=item["Data.Vitamins.Vitamin B6"],
                Data_Vitamins_Vitamin_C=item["Data.Vitamins.Vitamin C"],
                Data_Vitamins_Vitamin_E=item["Data.Vitamins.Vitamin E"],
                Data_Vitamins_Vitamin_K=item["Data.Vitamins.Vitamin K"],
            )
            session.add(_Ingredients)
            
        session.commit()

def main():
    init_db("ingredients")

if __name__ == "__main__":
    main()