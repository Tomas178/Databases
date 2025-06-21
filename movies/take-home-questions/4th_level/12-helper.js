/*
	Write a Node.js script that takes a movie title and year as a command-line argument.
	Print an error message if a movie with the same title and year already exists in the database.
	If it does not exist, add it to the database. Assert that a year is numeric. Use query parameters.
	If any query fails, roll back your changes.
	If all queries succeed, commit your changes and print the new movie ID to the console.
*/

import Database from 'better-sqlite3'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url';

const databaseUrl = join(fileURLToPath(import.meta.url), '../../../movies.db');

export const db = new Database(databaseUrl);

export const movieTitle = process.argv[2];
export const movieYear = process.argv[3];

export function checkIfMovieExists(title, year) {
    const movie = db.prepare('SELECT * FROM movies WHERE title = ? AND year = ?').get(title, year);
    console.log(movie);
    if (movie) return true;
    else return false;
}

export function insertMovie(title, year) {
    const insertMovieQuery = db.prepare('INSERT INTO movies (title, year) VALUES (?, ?)');
    const insertMovieTransaction = db.transaction((title, year) => {
        const info = insertMovieQuery.run(title, year);
        return info.lastInsertRowid;
    });

    return insertMovieTransaction(title, year);
}