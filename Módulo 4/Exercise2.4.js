let movies = [];
while (true) {
	let title = prompt('Enter a movie title');
	let rating = prompt('Enter movie rating (IMDB');
	if (title === null || rating === null) {
		break;
	} else {
		movies.push({
			title: title,
			rating: Number(rating)
		});
	}
}

console.log('All movies with ratings under 7:');
for (let movie of movies) {
	if (movie.rating < 7) {
		console.log(`${movie.title} (${movie.rating})`);
	}
}

console.log('All movies with ratings equal or over 7:');
for (let movie of movies) {
	if (movie.rating >= 7) {
		console.log(`${movie.title} (${movie.rating})`);
	}
}