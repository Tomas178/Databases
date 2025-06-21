/*
Write a Node.js script that searches for movies containing a specific term in the title and returns them in batches of 10 movies.
The script accepts 2 arguments: a title query string and the page number (starting from 1).
The movies should be returned in descending order by their rating.
*/

import Database from 'better-sqlite3';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const databaseURL = join(fileURLToPath(import.meta.url), '../movies.db');

const db = new Database(databaseURL);

const movieTitle = process.argv[2];
const pageNumber = (process.argv[3]-1)*10;

const sqlQuery = `
    SELECT title
      FROM movies
      JOIN ratings ON movies.id = ratings.movie_id
     WHERE title LIKE %${movieTitle}%
     ORDER BY rating DESC
     LIMIT 10 OFFSET ?
`;

const stmt = db.prepare(sqlQuery);
const movies = stmt.all(movieTitle, pageNumber);

movies.forEach(movie => {
    console.log(`Movie title: ${movie.title}`);
});