/*
    Write a Node.js script that returns 10 movies per page.
    Order by the movies descendingly based on their rating.
    Page number values should be `Integer`.
*/


import Database from 'better-sqlite3';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const databaseURL = join(fileURLToPath(import.meta.url), '../../../movies.db');

const db = new Database(databaseURL);

const pageNumber = 3;
const moviesPerPage = 10;
const offset = (pageNumber-1) * moviesPerPage;

const SqlQuery = `
    SELECT title, rating
      FROM movies
      JOIN ratings
        ON movies.id = ratings.movie_id
     ORDER BY rating DESC
     LIMIT ? OFFSET ?
`;

try {
    const getMovies = db.prepare(SqlQuery);
    const movies = getMovies.all(moviesPerPage, offset);
    movies.forEach(movie => {
        console.log(`Movie: ${movie.title} | Rating: ${movie.rating}`);
    })
} catch (err) {
    console.error('Error:', err)
} finally {
    db.close();
}