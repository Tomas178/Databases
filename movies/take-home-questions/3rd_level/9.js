/*
  Write a Node.js script that reads the local .env file to get a FAVORITE_DIRECTOR variable and access the movie database.
  The script should return a list of movies the favorite director directed.
  The list should be ordered by movie rating in descending order.
  Add a local .env file to your project and add the FAVORITE_DIRECTOR variable to it.
*/

import dotenv from 'dotenv';
import Database from 'better-sqlite3';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

dotenv.config();

const favoriteDirector = process.env.FAVORITE_DIRECTOR;
const databaseUrl = join(fileURLToPath(import.meta.url), '../../../movies.db');

const db = new Database(databaseUrl);

const sqlQuery = `
  SELECT title
    FROM movies
    JOIN directors ON movies.id = directors.movie_id
    JOIN people
      ON directors.person_id = people.id
    LEFT JOIN ratings
      ON movies.id = ratings.movie_id
    WHERE name = ?
    ORDER BY rating DESC
`;

const stmt = db.prepare(sqlQuery);
const movies = stmt.all(favoriteDirector);
if (movies.length > 0) {
  movies.forEach(movie => {
    console.log(movie.title);
  });
} else {
  console.log(`No movies found for the director: ${favoriteDirector}`);
}



