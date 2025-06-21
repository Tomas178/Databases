SELECT DISTINCT title, movies.id, year
  FROM movies
	 JOIN directors
				ON movies.id = directors.movie_id
		JOIN people
				ON directors.person_id = people.id
	WHERE birth < 1960
	ORDER BY year DESC;


SELECT DISTINCT title, id, year
  FROM movies
	WHERE id IN (
													SELECT movie_id
													  FROM directors
															JOIN people
																	ON directors.person_id = people.id
														WHERE birth < 1960
												)
 ORDER BY year DESC;