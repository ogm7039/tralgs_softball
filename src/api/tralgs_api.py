from flask_restful import Resource
from db import tralgs

class tralgs_api_home(Resource):
    def get(self):
        return tralgs.home()


class tralgs_api_games(Resource):
    def get(self):
        return tralgs.list_games()


class tralgs_api_one_game(Resource):
    def get(self, param):
        return tralgs.list_one_game(param)


class tralgs_api_players(Resource):
    def get(self):
        return tralgs.list_players()


class tralgs_api_player_stats(Resource):
    def get(self, param):
        return tralgs.list_player_stats(param)


class tralgs_api_record(Resource):
    def get(self):
        return tralgs.get_record()
