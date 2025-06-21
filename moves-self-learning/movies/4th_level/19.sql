PRAGMA foreign_keys=off;

BEGIN TRANSACTION;

INSERT INTO people (id, name, birth)
      VALUES (123456789123, 'Tomas Petronis', 2004);

INSERT INTO directors (movie_id, person_id)
SELECT movies.id, people.id
FROM movies, people
WHERE movies.title = 'Oppenheimer'
  AND people.name = 'Tomas Petronis';

ROLLBACK;

PRAGMA foreign_keys=on;