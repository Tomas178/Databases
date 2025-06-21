/*
  Write a Node.js script with a transaction to delete all the movies that are rated below 3.0 or rating .
  Rollback if something goes wrong.
*/


import Database from 'better-sqlite3';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const databaseURL = join(fileURLToPath(import.meta.url), '../../../movies.db');
const db = new Database(databaseURL);

const deleteLowRatedSQL = `
  DELETE FROM movies
  WHERE id IN (
    SELECT movies.id
    FROM movies
    LEFT JOIN ratings ON movies.id = ratings.movie_id
    WHERE rating < 3.0 OR rating IS NULL
  )
`;

try {
  const deleteMovies = db.prepare(deleteLowRatedSQL);
  db.pragma('foreign_keys=off');
  const deleteAllMovies = db.transaction(() => {
    const result = deleteMovies.run();
    console.log(`Deleted ${result.changes} movies.`);
  });
  console.log("Deleting movies...");
  deleteAllMovies();
  db.pragma('foreign_keys=on');
} catch (err) {
  console.error('Error:', err);
} finally {
  db.close();
}