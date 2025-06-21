/*
    List all the directors that have directed a movie that was released after 1990 and the movie rating is above 8.0.
    Do not list the first 15 directors.
    Result should have directors name, movie title and rating.
*/

SELECT title, name, rating
  FROM people
  JOIN directors ON people.id = directors.person_id
  JOIN movies ON directors.movie_id = movies.id
  JOIN ratings ON movies.id = ratings.movie_id
 WHERE rating > 8.0
   AND year > 1990
 LIMIT -1 OFFSET 15;