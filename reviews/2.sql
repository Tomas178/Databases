/*
Who was the director of "The Godfather"? You can assume there is only a single movie with this title
*/

SELECT name
  FROM people
  JOIN directors ON people.id = directors.person_id
  JOIN movies ON directors.movie_id = movies.id
 WHERE title = 'The Godfather';