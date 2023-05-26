# Standard library imports
import os
# Remote library imports
from flask import Flask
# from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData

# Local imports

# Instantiate app, set attributes
app = Flask(
    __name__,
    static_url_path='',
    static_folder='../client/build',
    template_folder='../client/build',
)

app.secret_key = b'Y\xf1Xz\x00\xad|eQ\x80t \xca\x1a\x10K'
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://rob:kqjym1HLjKq44SNsXeuB40WRk70v85i5@dpg-chod2srhp8u2m2stporg-a.ohio-postgres.render.com/krt_kitchen"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
db = SQLAlchemy()
migrate = Migrate(app, db)
db.init_app(app)

api = Api(app)

# Instantiate REST API
# api = Api(app)

# Instantiate CORS
# CORS(app)
