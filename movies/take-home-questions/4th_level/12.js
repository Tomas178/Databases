/*
	Write a Node.js script that takes a movie title and year as a command-line argument.
	Print an error message if a movie with the same title and year already exists in the database.
	If it does not exist, add it to the database. Assert that a year is numeric. Use query parameters.
	If any query fails, roll back your changes.
	If all queries succeed, commit your changes and print the new movie ID to the console.
*/

import { db, movieTitle, movieYear, checkIfMovieExists, insertMovie } from './12-helper.js';

try {
	if (checkIfMovieExists(movieTitle, movieYear)) {
	console.error(`Movie: ${movieTitle} already exists!`);
	} else {
		const newMovieId = insertMovie(movieTitle, movieYear);
		console.log(`New movie id: ${newMovieId}`);
	}
} catch (err) {
		if (db.inTransaction) {
			console.error('Rolling back because of an error!');
			throw err;
		} else {
			console.error('Error:', err.message);
		}
} finally {
	db.close();
}