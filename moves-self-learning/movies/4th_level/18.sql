SELECT title
  FROM movies
 WHERE title LIKE '% Star %'
UNION
SELECT title
  FROM movies
 WHERE title LIKE '% War %';