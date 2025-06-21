/*
What is the title and release year of the most recently released movie that Emma Watson starred in?
You can assume they released only a single movie that year.
*/

SELECT title, year
  FROM movies
  JOIN stars ON movies.id = stars.movie_id
  JOIN people ON stars.person_id = people.id
 WHERE name = 'Emma Watson'
 ORDER BY year DESC
 LIMIT 1;