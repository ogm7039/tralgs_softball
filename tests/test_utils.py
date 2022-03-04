import requests
from src.db.tralgs_db_utils import connect, exec_sql_file

def assert_sql_count(test, sql, n,
                     msg = 'Expected row count did not match query'):
    conn = connect()
    cur = conn.cursor()
    cur.execute(sql)
    test.assertEqual(n, cur.rowcount, msg)
    conn.close()

def get_rest_call(test, url, params = {}, expected_code = 200):
    response = requests.get(url, params)
    test.assertEqual(expected_code, response.status_code,
                     f'Response code to {url} not {expected_code}')
    return response.json()

def post_rest_call(test, url, params = {}, expected_code = 200):
    response = requests.post(url, params)
    test.assertEqual(expected_code, response.status_code,
                     f'Response code to {url} not {expected_code}')
    return response.json()
