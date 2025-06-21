-- Perform a database migration to move ratings into movies table.

PRAGMA foreign_keys=off;

BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS movies_new (
    id INTEGER,
    title TEXT NOT NULL,
    year NUMERIC,
    rating REAL NOT NULL,
    votes INTEGER NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO movies_new
SELECT id, title, year, rating, votes
  FROM movies
  LEFT JOIN ratings ON movies.id = ratings.movie_id;

DROP TABLE movies;
DROP TABLE ratings;

ALTER TABLE movies_new
RENAME TO movies;

COMMIT;

PRAGMA foreign_keys=on;