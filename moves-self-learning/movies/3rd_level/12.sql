SELECT title, rating
  FROM movies
  LEFT JOIN ratings
    ON movies.id = ratings.movie_id;