from flask import Flask
from flask_restful import Resource, Api
from api.tralgs_api import *

app = Flask(__name__)
api = Api(app)

api.add_resource(tralgs_api_home, '/')
api.add_resource(tralgs_api_games, '/games')
api.add_resource(tralgs_api_one_game, '/games/<string:param>')
api.add_resource(tralgs_api_players, '/players')
api.add_resource(tralgs_api_player_stats, '/players/<string:param>')
api.add_resource(tralgs_api_record, '/record')

if __name__ == '__main__':
    app.run(debug=True)
