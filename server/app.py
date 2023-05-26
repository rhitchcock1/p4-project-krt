#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response, render_template
from flask_restful import Resource

# Local imports
from config import app, db, api
from config import app
from models import User, Restaurant, Review
from dotenv import load_dotenv
load_dotenv()



@app.route('/')
@app.route('/<int:id>')
def index(id=0):
    return render_template('index.html')
# Views go here!
@app.route('/')
def index():
    return '<h1>Restraunt KRT</h1>'

class Reviews(Resource):
    def get(self):
        review_list = [r.to_dict() for r in Review.query.all()]
        if review_list == None:
            return make_response({"error":"review not found"}, 404)
        return make_response (review_list, 200)
    
    def post(self):
        data = request.get_json()
        try:
            new_review = Review (
            rating_ = data['rating_'],
            review = data["review"],
            img = data["img"],
            user_id = data["user_id"],
            restaurant_id = data["restaurant_id"]
            )
        except ValueError:
            return make_response({"error": "must be valid review"}, 404)

        db.session.add(new_review)
        db.session.commit()
        return make_response(new_review.to_dict(), 201)
    
api.add_resource(Reviews, "/reviews")

class ReviewById(Resource):
    def get(self, id):
        review = Review.query.filter_by(id = id).first()
        if review == None:
            return make_response({"error":"review not found"}, 404)
        return make_response(review.to_dict(), 200)
    
    def delete(self, id):
        review = Review.query.filter_by(id = id).first()
        if review == None:
            return make_response({"error":"review not found"}, 404)
        db.session.delete(review)
        db.session.commit()
        return make_response({"deleted": "she gone"}, 204)
    
    def patch(self, id):
        review = Review.query.filter_by(id = id).first()
        data = request.get_json()
        for attr in data:
            setattr(review, attr, data[attr])
        db.session.add(review)
        db.session.commit()
        return make_response(review.to_dict(), 201)
    
api.add_resource(ReviewById, "/reviews/<int:id>")
    

class Users(Resource):
    def get(self):
        u_list = []
        for u in User.query.all():
            u_dict={
                'id': u.id,
                'username': u.username,
                'location': u.location
            }
            u_list.append(u_dict)
        return make_response (u_list, 200)
        
    def post(self):
        data = request.get_json()
        try:
            new_user = User(username = data['username'],
                            location = data['location'])
        except ValueError:
            return make_response({}, )
        db.session.add(new_user)
        db.session.commit()
        return make_response(new_user.to_dict(), 201)
    
api.add_resource(Users, "/users")
    

class Restaurants(Resource):
    def get(self):
        r_list = []
        for r in Restaurant.query.all():
            r_dict={
                'id': r.id,
                'name': r.name,
                'location': r.location,
                'img': r.img,
                'reviews': [{'id': review.id, 'rating': review.rating_ , 'review': review.review, 'img': review.img, 'date': review.created_at} for review in r.reviews]
            }
            r_list.append(r_dict)
        return make_response (r_list, 200)
    
    def post(self):
        data = request.get_json
        try:
            new_restaurant = Restaurant(name = data['name'],
                                        location = data['location'])
        except ValueError:
            return make_response({}, )
        db.session.add(new_restaurant)
        db.session.commit()
        return make_response(new_restaurant.to_dict(), 201)

api.add_resource(Restaurants, "/restaurants")


if __name__ == '__main__':
    app.run(port=5555, debug=True)
# fetch("http://localhost:5555/reviews", {
#   method: "POST",
#   headers: {
#     "Content-Type": "application/json",
#   },
#   body: JSON.stringify({
#     rating_ : 5,
#     review: "best fries in town!!",
#     img: "https://images.themodernproper.com/billowy-turkey/production/posts/2022/Homemade-French-Fries_8.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1662474181&s=f6b09b96f732330eca2aae43140b3ffa"
#     user_id: 2,
#     restaurant_id: 1 ,
#   }),
# })
#   .then((r) => r.json())
#   .then(console.log);

# fetch("http://localhost:5555/reviews/3", {
#   method: "PATCH",
#   headers: {
#     "Content-Type": "application/json",
#   },
#   body: JSON.stringify({
#     rating_ : 5,
#     review: "ground breakin",
#     img: "great photo"
#     user_id: 2,
#     restaurant_id: 1 ,

#   }),
# })
#   .then((r) => r.json())
#   .then(console.log);