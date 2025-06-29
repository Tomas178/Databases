SELECT name
FROM people
WHERE id IN (
  SELECT person_id
  FROM directors
  WHERE movie_id IN (
    SELECT movie_id
    FROM ratings
    WHERE rating > 7.5
      AND votes > 500
  )
);
