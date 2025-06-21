SELECT title, rating
  FROM movies
  JOIN ratings ON movies.id = ratings.movie_id
 WHERE year BETWEEN 1990 AND 1999;