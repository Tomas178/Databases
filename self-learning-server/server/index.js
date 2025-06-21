import http from 'node:http';
import dotenv from 'dotenv';
import { getTenMovies } from './movies.js';
import { isTerminatedCrossOriginRequest } from './requests.js';

dotenv.config();

const port = process.env.PORT_NUMBER;

const server = http.createServer(async (req, res) => {
    if (isTerminatedCrossOriginRequest(req, res)) return;

    res.writeHead(200, { 'Content-Type': 'application/json' });

    const { method, url } = req;
    console.log({ method, url });

    if (method === 'GET' && url === '/movies'){
        const movies = getTenMovies();
        const JSONMovies = JSON.stringify(movies);

        res.end(JSONMovies);
        return;
    };

	// if no URL matched, return a 404 (Not found) status code
  // and an error message in JSON string format
  res.statusCode = 404;
	res.end(JSON.stringify({ error: 'Not Found' }));
})

server.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});