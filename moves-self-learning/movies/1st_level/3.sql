SELECT title, rating
		FROM movies
		JOIN ratings
				ON movies.id = ratings.movie_id
	WHERE rating > 8.5;
