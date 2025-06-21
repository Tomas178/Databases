/*
    List all the directors who have directed more than 5 movies rated below 5.0.
    Return their names and the number of such movies.
*/

SELECT name, COUNT(movies.id)
  FROM people
  JOIN directors ON people.id = directors.person_id
  JOIN movies ON directors.movie_id = movies.id
  JOIN ratings ON movies.id = ratings.movie_id
 WHERE rating > 5.0
 GROUP BY directors.person_id
 HAVING COUNT(movies.id) > 5;