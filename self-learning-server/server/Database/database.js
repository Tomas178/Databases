import Database from 'better-sqlite3';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const databaseURL = join(fileURLToPath(import.meta.url), '../../Data/movies.db');

export const db = Database(databaseURL);