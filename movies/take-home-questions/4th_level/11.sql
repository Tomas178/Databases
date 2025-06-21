/*
    Do starting letters correlate with the average movie rating?
    List movie title starting letters and an average rating associated with them.
    Ignore non-Latin and non-uppercase letters.
*/

SELECT SUBSTR(title, 1, 1) AS starting_letter,
       ROUND(AVG(rating), 1) AS average_rating
  FROM movies
  LEFT JOIN ratings
    ON movies.id = ratings.movie_id
 WHERE SUBSTR(title, 1, 1) REGEXP '^[A-Z]$'
 GROUP BY starting_letter;