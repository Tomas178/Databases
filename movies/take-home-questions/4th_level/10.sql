/*
	Barbenheimer. In 2023, Christopher Nolan and Greta Gerwig each released a new movie.
	These movies already exist in the database, but they have no ratings.
	Write a single query to add a rating to one of these movies.
	For these movies, you can assume there is only one movie with the same title and year in the database.
*/

INSERT INTO ratings (movie_id, rating, votes)
	 VALUES (
		    (SELECT id
			   FROM movies
			   WHERE title = 'Oppenheimer'
				 AND year = 2023), 10.0, 4);

-- Just for interest that would be the query to update ratings as they are updated in IMDb

WITH movie AS (
    SELECT id
      FROM movies
     WHERE title = 'Oppenheimer'
       AND year = 2023
)
UPDATE ratings
   SET rating = ROUND(((rating * votes) + 1.5) / (votes + 1), 1),
       votes  = votes + 1
 WHERE movie_id = (SELECT id FROM movie);

