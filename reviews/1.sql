/*
List all the people who have "Smith" in their full name and order the results by their name in alphabetical order (A-Z).
*/

SELECT name
  FROM people
 WHERE name LIKE '%Smith%'
 ORDER BY name;