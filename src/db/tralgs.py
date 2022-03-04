from .tralgs_db_utils import *


def rebuild_tables():
    exec_sql_file('src/db/tralgs.sql')


def list_games():
    select = """SELECT * FROM games"""
    values = exec_get_all(select, {})
    my_list = []
    for value in values:
        my_dict = {}
        my_dict.update({'Date': value[1]})
        my_dict.update({'Time': value[2]})
        my_dict.update({'Opponent': value[3]})
        my_dict.update({'Tralgs': value[4]})
        my_dict.update({'Opp': value[5]})
        my_dict.update({'Win': value[6]})
        my_list.append(my_dict)

    return my_list


def list_one_game(id):
    id = int(id)
    select = """SELECT * FROM games WHERE id=%(_id)s"""
    values = exec_get_one(select, {'_id': id})

    my_dict = {}
    my_dict.update({'Date': values[1]})
    my_dict.update({'Time': values[2]})
    my_dict.update({'Opponent': values[3]})
    my_dict.update({'Tralgs': values[4]})
    my_dict.update({'Opp': values[5]})
    my_dict.update({'Win': values[6]})
    my_dict.update({'Playoff Game': values[7]})

    return my_dict


def list_players():
    select = """SELECT * FROM players"""
    values = exec_get_all(select, {})
    my_list = []
    for value in values:
        my_dict = {}
        my_dict.update({'Name': value[1]})
        my_dict.update({'Nickname': value[2]})
        my_dict.update({'Position': value[3]})
        my_dict.update({'Number': value[4]})

        feet = str(value[5] // 12)
        inches = str(value[5] % 12)
        height_string = str(feet + "'" + inches + '"')

        my_dict.update({'Height': height_string})
        my_dict.update({'Weight': value[6]})
        my_dict.update({'Hometown': value[7]})
        my_dict.update({'College': value[8]})
        my_list.append(my_dict)

    return my_list


def list_player_stats(id):
    id = int(id)
    select = """SELECT name, average, hits, rbi, hr FROM stats INNER JOIN players ON stats.player_id = players.id 
    WHERE player_id=%(_id)s"""
    values = exec_get_one(select, {'_id': id})

    my_dict = {}
    my_dict.update({'Name': values[0]})
    my_dict.update({'Batting Average': values[1]})
    my_dict.update({'Hits': values[2]})
    my_dict.update({'RBIs': values[3]})
    my_dict.update({'HRs': values[4]})

    return my_dict


def get_record():
    select = """SELECT win FROM games WHERE has_score = TRUE"""
    values = exec_get_all(select, {})

    wins = 0
    losses = 0
    for value in values:
        if value[0]:
            wins = wins + 1
        else:
            losses = losses + 1

    record_string = str(wins) + ' - ' + str(losses)
    return record_string
