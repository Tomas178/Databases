/*
	Barbenheimer. In 2023, Christopher Nolan and Greta Gerwig each released a new movie.
	These movies already exist in the database, but they have no ratings.
	Write a single query to add a rating to one of these movies.
	For these movies, you can assume there is only one movie with the same title and year in the database.
*/

import Database from 'better-sqlite3'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url';

const databaseUrl = join(fileURLToPath(import.meta.url), '../../../movies.db');

const db = new Database(databaseUrl);

const movie = 'Oppenheimer';
const rating = 9.5;
const votes_count = 15;

const sqlQuery = `
	INSERT INTO ratings (movie_id, rating, votes)
			 VALUES (
			(SELECT id
				 FROM movies
				WHERE title = ?
				  AND year = 2023), ?, ?)
	`;

const stmt = db.prepare(sqlQuery);
const movie_info = stmt.run(movie, rating, votes_count);
if (movie_info.changes > 0) {
	console.log(`Movie: ${movie} rated with ${rating}`);
} else {
	console.log(`Failed to rate movie: ${movie}`);
}