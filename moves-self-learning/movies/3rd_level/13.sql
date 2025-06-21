SELECT p.name
FROM people p
JOIN directors d ON p.id = d.person_id
JOIN stars s ON d.movie_id = s.movie_id AND d.person_id = s.person_id;