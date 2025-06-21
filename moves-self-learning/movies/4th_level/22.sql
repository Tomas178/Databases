PRAGMA foreign_keys=off;

BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS genres (
    id INTEGER PRIMARY KEY,
    genre TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS new_movies (
    id INTEGER,
    title TEXT NOT NULL,
    year NUMERIC,
    genre_id INTEGER,
    PRIMARY KEY(id),
    FOREIGN KEY(genre_id) REFERENCES genres(id)
);

INSERT INTO new_movies(id, title, year)
SELECT id, title, year
  FROM movies;

DROP TABLE movies;

ALTER TABLE new_movies RENAME TO movies;

ROLLBACK;

PRAGMA foreign_keys=on;