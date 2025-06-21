-- Write a query that lists all movie titles where Scarlett Johansson and Chris Evans starred together.

SELECT title
FROM movies
JOIN stars ON movies.id = stars.movie_id
JOIN people ON stars.person_id = people.id
WHERE people.name = 'Scarlett Johansson'
AND movie_id IN (
    SELECT movie_id
    FROM stars
    JOIN people ON stars.person_id = people.id
    WHERE people.name = 'Chris Evans'
);