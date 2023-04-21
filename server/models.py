from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData, DateTime
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

# metadata = MetaData(naming_convention={
#     "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
#     "uq": "uq_%(table_name)s_%(column_0_name)s",
#     "ck": "ck_%(table_name)s_%(constraint_name)s",
#     "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
# })

# Models go here!
from config import db

# db = SQLAlchemy(metadata=metadata)

class User(db.Model, SerializerMixin):
    __tablename__ ='users'
    serialize_rules= ("-created_at", "-updated_at", "-reviews",)
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    location = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    reviews = db.relationship('Review', backref = 'user', cascade = 'all, delete-orphan')
    restaurants = association_proxy('reviews', 'restaurant')



class Restaurant(db.Model, SerializerMixin):
    __tablename__ ='restaurants'
    serialize_rules= ("-created_at", "-updated_at", "-reviews",)
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    location = db.Column(db.String)
    img = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    reviews = db.relationship('Review', backref = 'restaurant', cascade = 'all, delete-orphan')
    users = association_proxy('reviews', 'user')



class Review(db.Model, SerializerMixin):
    __tablename__ ='reviews'
    serialize_rules= ("-created_at", "-updated_at",)
    id = db.Column(db.Integer, primary_key=True)
    rating_ = db.Column(db.Integer)
    review = db.Column(db.String)
    img = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurants.id'))
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    @validates('rating_')
    def validate_rating(self, key, rating_num):
        if not (1 <= rating_num <= 10):
            raise ValueError('rating must be be between 1 and 10!')
        return rating_num