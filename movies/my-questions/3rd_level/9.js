import Database from 'better-sqlite3';
import dotenv from 'dotenv';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

dotenv.config();

const databaseURL = join(fileURLToPath(import.meta.url), '../../../movies.db');
const db = new Database(databaseURL);

const tableName = process.env.TABLE_NAME;

const regExpForTableName = /^[a-zA-Z_][a-zA-Z0-9_]*$/;

if (!regExpForTableName.test(tableName)) {
    console.error(`Invalid table name: ${tableName}`);
    process.exit(1);
}

const SqlQuery = `
    CREATE TABLE IF NOT EXISTS ${tableName} (
        id INTEGER PRIMARY KEY,
        year NUMERIC NOT NULL
    )
`;

try {
    db.prepare(SqlQuery).run();
    console.log(`${tableName} is created successfully!`);
} catch (err) {
    console.error(`Failed to create table: ${tableName}`, err);
} finally {
    db.close();
}
