import dotenv from 'dotenv';
import Database from 'better-sqlite3';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

dotenv.config();

const databaseUrl = join(fileURLToPath(import.meta.url), '../../movies.db');

const db = new Database(databaseUrl);

const votesCount = process.env.VOTES_COUNT;
console.log(votesCount);

const sqlQuery = `
    SELECT title, rating
      FROM movies
      LEFT JOIN ratings
        ON movies.id = ratings.movie_id
     WHERE ratings.votes > ?
     LIMIT 1000;
`;

const stmt = db.prepare(sqlQuery);
const movies = stmt.all(votesCount);
movies.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
const JSONmovies = JSON.stringify(movies);
console.log(JSONmovies);

