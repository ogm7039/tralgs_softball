DROP TABLE IF EXISTS players, games, stats;

CREATE TABLE players(
    id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(30) NOT NULL DEFAULT 'NONE',
	nick_name VARCHAR(10) NOT NULL DEFAULT 'NONE',
	f_position VARCHAR(20) NOT NULL DEFAULT 'NONE',
	number INTEGER NOT NULL DEFAULT 1,
	height_inches INTEGER NOT NULL DEFAULT 1,
	weight_pounds INTEGER NOT NULL DEFAULT 1,
	hometown VARCHAR(20) NOT NULL DEFAULT 'NONE',
	college VARCHAR(4) NOT NULL DEFAULT 'NONE'
);

CREATE TABLE games(
    id SERIAL PRIMARY KEY NOT NULL,
    game_date VARCHAR(10) NOT NULL DEFAULT '00/00/0000',
    game_time VARCHAR(4) NOT NULL DEFAULT '00:00',
    opponent VARCHAR(30) NOT NULL DEFAULT 'OPPONENT',
    has_score BOOLEAN NOT NULL DEFAULT FALSE,
    tralgs_score INTEGER NOT NULL DEFAULT 0,
    opp_score INTEGER NOT NULL DEFAULT 0,
    win BOOLEAN NOT NULL DEFAULT FALSE,
    playoff_game BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE stats(
    id SERIAL PRIMARY KEY NOT NULL,
    player_id INTEGER NOT NUll,
    average VARCHAR(4) NOT NULL DEFAULT '.000',
    hits INTEGER NOT NULL DEFAULT 0,
    rbi INTEGER NOT NULL DEFAULT 0,
    hr INTEGER NOT NULL DEFAULT 0
);

INSERT INTO players(name, nick_name, f_position, number, height_inches, weight_pounds, hometown, college) VALUES
('Owen Manley', 'Ralb', 'Second Base', 8, 72, 180, 'Rochester, NY', 'RIT'),
('Kyle Wilson', 'Krag', 'Short Stop', 2, 72, 180, 'Rochester, NY', 'UB'),
('Brady Bodamer', 'Brad', 'First Base', 15, 72, 180, 'Rochester, NY', 'HVAC'),
('Zach Fichtner', 'Frank', 'Pitcher', 16, 72, 180, 'Rochester, NY', 'CWRU'),
('Jacob Logothetis', 'Cobes', 'Catcher', 13, 72, 180, 'Rochester, NY', 'UB'),
('John Zajac', 'Jag', 'Center Field', 19, 72, 180, 'Rochester, NY', 'UB'),
('Ethan Degrandis', 'Slosh', 'Third Base', 7, 72, 180, 'Rochester, NY', 'CWRU'),
('Alex Nasca', 'Nascar', 'Right Field', 6, 72, 180, 'Rochester, NY', 'RIT'),
('Randy Schmitt', 'Rusty', 'Designated Hitter', 11, 72, 180, 'Rochester, NY', 'MCC'),
('Greg Manley', 'Gerg', 'Designated Hitter', 14, 72, 180, 'Rochester, NY', 'BCC'),
('Conor Palmer', 'Palms', 'Left Field', 72, 72, 180, 'Rochester, NY', 'JCU');

INSERT INTO games(game_date, game_time, opponent) VALUES
('05/27/2022', '6:00', 'Dodgers'),
('06/03/2022', '7:15', 'Mets'),
('06/10/2022', '8:30', 'Cubs'),
('06/17/2022', '9:45', 'Rockies'),
('06/24/2022', '6:00', 'Giants'),
('07/01/2022', '7:15', 'Padres'),
('07/08/2022', '8:30', 'Pirates'),
('07/15/2022', '9:45', 'Yankees'),
('07/22/2022', '6:00', 'Red Sox'),
('07/29/2022', '7:15', 'Braves');

INSERT INTO stats(player_id) VALUES
(1), (2), (3), (4), (5), (6), (7), (8), (9), (10), (11);


