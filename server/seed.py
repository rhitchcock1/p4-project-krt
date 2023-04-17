#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
# from faker import Faker

# Local imports
from app import app
from models import db, Restaurant, User, Review

with app.app_context():
    # Restaurant.query.delete()
    # User.query.delete()
    # Review.query.delete()

    res1= Restaurant(name = "KRT", location = 'North')
    res2= Restaurant(name = "KRT", location = 'South')
    res3= Restaurant(name = "KRT", location = 'East')
    res4= Restaurant(name = "KRT", location = 'West')
    restaraunts = [res1, res2, res3, res4]

    u1= User(username = "Robert", location= "New York")
    u2= User(username = "Kevin", location= "Chicago")
    u3= User(username = "Tim", location= "Virginia")
    users = [u1, u2, u3]

    rv1 = Review(rating_ = 1, review = "Terrible!", img="https://cdn.vox-cdn.com/thumbor/WlP2DAt400x6VMVsbvXLCIY5os8=/0x66:2681x1470/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19729951/bk.png", user_id = 1, restaurant_id = 1)
    rv3 = Review(rating_ = 3, review = "meh",img="https://media.blogto.com/articles/2019611-eats.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70", user_id = 3, restaurant_id = 3)
    rv2 = Review(rating_ = 5, review = "Great",img="https://fwtx.com/downloads/15764/download/goodfood%201.jpg.jpe?cb=16ba676f84fa45a37228db7e65f7257b", user_id = 2, restaurant_id = 2)
    reviews = [rv1, rv2, rv3]


if __name__ == '__main__':
    # fake = Faker()
    with app.app_context():
        Restaurant.query.delete()
        User.query.delete()
        Review.query.delete()
        print("Starting seed...")
        db.session.add_all(restaraunts)
        db.session.add_all(users)
        db.session.add_all(reviews)
        db.session.commit()
        # Seed code goes here!
