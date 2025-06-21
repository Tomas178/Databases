SELECT name, COUNT(movie_id)
  FROM people
  JOIN stars ON people.id = stars.person_id
 GROUP BY people.id
 ORDER BY COUNT(movie_id);