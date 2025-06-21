SELECT title, rating
  FROM movies
		JOIN ratings
				ON movies.id = ratings.movie_id
	WHERE votes > 1000
	  AND year > 2000
	ORDER BY rating DESC;