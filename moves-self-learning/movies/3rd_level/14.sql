SELECT title
  FROM movies
 WHERE year < 1990
UNION
SELECT title
  FROM movies
 WHERE year > 2020;