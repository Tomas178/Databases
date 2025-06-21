/*
    Letters from a stoic.
    List the names of the 10 oldest people and how many years have passed since they were born in the current year.
    Do not include people who do not have a birth year.
*/

SELECT
    name,
    strftime('%Y', 'now') - birth AS time_passed
FROM people
WHERE birth IS NOT NULL
ORDER BY time_passed DESC
LIMIT 10;
