const SERVER_URL = 'http://localhost:3000';
const movies = document.getElementById('display-movies');

window.addEventListener('DOMContentLoaded', async () => {
	const movies = await fetchMovies();
	displayMovies(movies);
});

async function fetchMovies() {
	const response = await fetch(`${SERVER_URL}/movies`);
	return response.json();
};

function displayMovies(movies) {
	movies.forEach(addMoviesToList);
};

function addMoviesToList(movie) {
	const movieDiv = document.createElement('div');
	movieDiv.classList.add('movie');
	movieDiv.dataset.id = movie.id;
	movieDiv.innerHTML = `
		<h2>${movie.title}</h2>
	`;

	movies.append(movieDiv);
}