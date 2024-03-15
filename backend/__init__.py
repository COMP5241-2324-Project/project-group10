from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from . import config


app = Flask(__name__)
db = SQLAlchemy()


def create_app():
    app.config.from_object(config.Config)
    db.init_app(app)
    with app.app_context():
        # Imports
        from backend.controller import helloApi,routes
        app.register_blueprint(helloApi.hellobp)
        app.register_blueprint(blueprint = routes.repobp, url_prefix='/repo')
        # Create tables for our models
        # db.create_all()
        return app
