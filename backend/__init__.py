from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_caching import Cache
from . import config

app = Flask(__name__)
db = SQLAlchemy()
cache = Cache(app, config={'CACHE_TYPE': 'simple'})


def create_app():
    app.config.from_object(config.Config)
    db.init_app(app)
    with app.app_context():
        # Imports
        from backend.controller import helloApi, git_routes, org_routes, repo_routes, user_routes, act_routes, gemini_routes
        app.register_blueprint(helloApi.hellobp)
        app.register_blueprint(blueprint=git_routes.gitbp, url_prefix='/github')
        app.register_blueprint(blueprint=org_routes.orgbp, url_prefix='/org')
        app.register_blueprint(blueprint=repo_routes.repobp, url_prefix='/repo')
        app.register_blueprint(blueprint=user_routes.userbp, url_prefix='/user')
        app.register_blueprint(blueprint=act_routes.actbp, url_prefix='/act')
        app.register_blueprint(blueprint=gemini_routes.genaibp, url_prefix='/genai')
        # Create tables for our models
        # db.create_all()
        return app
