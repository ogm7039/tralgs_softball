import unittest
from tests.test_utils import *
from src.db.tralgs import *

class TestTralgs(unittest.TestCase):

    def setUp(self):
        rebuild_tables()

    def test_navigation(self):
        expected = {"Home" : "/", "Games" : "/games", "Specific Game" : "games/_", "Players" : "/players",
                    "Specific Player" : "/players/_", "Record" : "/record"}
        actual = get_rest_call(self, 'http://127.0.0.1:5000/')
        self.assertEqual(expected, actual)

    def test_games(self):
        expected = [{"Date": "05/27/2022", "Time": "6:00", "Opponent": "Dodgers", "Tralgs": 0, "Opp": 0, "Win": False},
                    {"Date": "06/03/2022", "Time": "7:15", "Opponent": "Mets", "Tralgs": 0, "Opp": 0, "Win": False},
                    {"Date": "06/10/2022", "Time": "8:30", "Opponent": "Cubs", "Tralgs": 0, "Opp": 0, "Win": False},
                    {"Date": "06/17/2022", "Time": "9:45", "Opponent": "Rockies", "Tralgs": 0, "Opp": 0, "Win": False},
                    {"Date": "06/24/2022", "Time": "6:00", "Opponent": "Giants", "Tralgs": 0, "Opp": 0, "Win": False},
                    {"Date": "07/01/2022", "Time": "7:15", "Opponent": "Padres", "Tralgs": 0, "Opp": 0, "Win": False},
                    {"Date": "07/08/2022", "Time": "8:30", "Opponent": "Pirates", "Tralgs": 0, "Opp": 0, "Win": False},
                    {"Date": "07/15/2022", "Time": "9:45", "Opponent": "Yankees", "Tralgs": 0, "Opp": 0, "Win": False},
                    {"Date": "07/22/2022", "Time": "6:00", "Opponent": "Red Sox", "Tralgs": 0, "Opp": 0, "Win": False},
                    {"Date": "07/29/2022", "Time": "7:15", "Opponent": "Braves", "Tralgs": 0, "Opp": 0, "Win": False}]
        actual = get_rest_call(self, 'http://127.0.0.1:5000/games')
        self.assertEqual(expected, actual)

    def test_one_game(self):
        expected = {'Date': '05/27/2022', 'Opp': 0, 'Opponent': 'Dodgers', 'Playoff Game': False, 'Time': '6:00',
                    'Tralgs': 0, 'Win': False}
        actual = get_rest_call(self, 'http://127.0.0.1:5000/games/1')
        self.assertEqual(expected, actual)

    def test_players(self):
        expected = [{"Name": "Owen Manley", "Nickname": "Ralb", "Position": "Second Base", "Number": 8,
                     "Height": "6 feet 0 inches", "Weight": "180 lbs", "Hometown": "Rochester, NY", "College": "RIT"},
                    {"Name": "Kyle Wilson", "Nickname": "Krag", "Position": "Short Stop", "Number": 2,
                     "Height": "6 feet 0 inches", "Weight": "180 lbs", "Hometown": "Rochester, NY", "College": "UB"},
                    {"Name": "Brady Bodamer", "Nickname": "Brad", "Position": "First Base", "Number": 15,
                     "Height": "6 feet 0 inches", "Weight": "180 lbs", "Hometown": "Rochester, NY", "College": "HVAC"},
                    {"Name": "Zach Fichtner", "Nickname": "Frank", "Position": "Pitcher", "Number": 16,
                     "Height": "6 feet 0 inches", "Weight": "180 lbs", "Hometown": "Rochester, NY", "College": "CWRU"},
                    {"Name": "Jacob Logothetis", "Nickname": "Cobes", "Position": "Catcher", "Number": 13,
                     "Height": "6 feet 0 inches", "Weight": "180 lbs", "Hometown": "Rochester, NY", "College": "UB"},
                    {"Name": "John Zajac", "Nickname": "Jag", "Position": "Center Field", "Number": 19,
                     "Height": "6 feet 0 inches", "Weight": "180 lbs", "Hometown": "Rochester, NY", "College": "UB"},
                    {"Name": "Ethan Degrandis", "Nickname": "Slosh", "Position": "Third Base", "Number": 7,
                     "Height": "6 feet 0 inches", "Weight": "180 lbs", "Hometown": "Rochester, NY", "College": "CWRU"},
                    {"Name": "Alex Nasca", "Nickname": "Nascar", "Position": "Right Field", "Number": 6,
                     "Height": "6 feet 0 inches","Weight": "180 lbs", "Hometown": "Rochester, NY", "College": "RIT"},
                    {"Name": "Randy Schmitt", "Nickname": "Rusty", "Position": "Designated Hitter", "Number": 11,
                     "Height": "6 feet 0 inches", "Weight": "180 lbs", "Hometown": "Rochester, NY", "College": "MCC"},
                    {"Name": "Greg Manley", "Nickname": "Gerg", "Position": "Designated Hitter", "Number": 14,
                     "Height": "6 feet 0 inches","Weight": "180 lbs", "Hometown": "Rochester, NY", "College": "BCC"},
                    {"Name": "Conor Palmer", "Nickname": "Palms", "Position": "Left Field", "Number": 72,
                     "Height": "6 feet 0 inches", "Weight": "180 lbs", "Hometown": "Rochester, NY", "College": "JCU" }]
        actual = get_rest_call(self, 'http://127.0.0.1:5000/players')
        self.assertEqual(expected, actual)

    def test_player_stats(self):
        expected = {'Batting Average': '.000', 'HRs': 0, 'Hits': 0, 'Name': 'Owen Manley', 'RBIs': 0}
        actual = get_rest_call(self, 'http://127.0.0.1:5000/players/1')
        self.assertEqual(expected, actual)

    def test_record(self):
        expected = '0 - 0'
        actual = get_rest_call(self, 'http://127.0.0.1:5000/record')
        self.assertEqual(expected, actual)