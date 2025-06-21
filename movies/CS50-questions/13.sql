WITH kevin_bacon_movies AS (
    SELECT stars.movie_id
    FROM stars
    JOIN people ON stars.person_id = people.id
    WHERE people.name = 'Kevin Bacon'
      AND people.birth = 1958
)
SELECT DISTINCT people.name
FROM people
JOIN stars ON people.id = stars.person_id
JOIN kevin_bacon_movies ON stars.movie_id = kevin_bacon_movies.movie_id
WHERE people.name <> 'Kevin Bacon';
