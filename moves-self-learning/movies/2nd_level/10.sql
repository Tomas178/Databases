INSERT INTO movies
            (
             title, year
            )
     VALUES (
             'TomasSimona', 2025
            );

UPDATE movies
   SET year = 2030
 WHERE title = 'TomasSimona';

DELETE FROM movies
 WHERE title = 'TomasSimona'
   AND year = 2030;