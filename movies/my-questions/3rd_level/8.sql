-- Create a new column called 'budget' for movies table.

ALTER TABLE movies
ADD budget REAL DEFAULT 0.0;