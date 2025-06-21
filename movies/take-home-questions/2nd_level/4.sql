-- Count all the times that Martin Scorsese directed.

SELECT COUNT(movie_id)
FROM directors
JOIN people ON directors.person_id = people.id
WHERE name = 'Martin Scorsese';