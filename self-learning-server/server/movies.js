import { db } from './Database/database.js';

export function getTenMovies(){
	const tenMovies = db.prepare('SELECT * FROM movies LIMIT 10').all();
	return (tenMovies) ? tenMovies : [];
}