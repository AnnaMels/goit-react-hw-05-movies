const API_KEY = '584850c42ae7d2e479212f5963ad1dce';

export async function fetchMovie(movieId) {
    const key = 'movie-' + movieId;
    const savedMovie = sessionStorage.getItem(key);

    if (savedMovie) {
        return JSON.parse(savedMovie);
    }

    return await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
        .then(r => r.json())
        .then(movie => {
            sessionStorage.setItem(key, JSON.stringify(movie));
            return movie;
        })
    // .then(movie => movie)
}

export async function fetchTrendingMovies() {
    const savedData = sessionStorage.getItem('data');

    if (savedData) {
        return JSON.parse(savedData);
    }

    return await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
        .then(r => r.json())
        .then(films => {
            sessionStorage.setItem('data', JSON.stringify(films));
            return films;
        })
}

export async function fetchCast(movieId) {
    const key = 'movieCast-' + movieId;
    const savedMovie = sessionStorage.getItem(key);

    if (savedMovie) {
        return JSON.parse(savedMovie);
    }

    return await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
        .then(r => r.json())
        .then(cast => {
            sessionStorage.setItem(key, JSON.stringify(cast));
            return cast;
        })
}

export async function fetchMovieByKeyWord(searchQuery) {
    return await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`)
        .then(r => r.json())
        .then(movie => movie);
}

export async function fetchReview(movieId) {
    const key = 'movieReview-' + movieId;
    const savedMovie = sessionStorage.getItem(key);

    if (savedMovie) {
        return JSON.parse(savedMovie);
    }

    return await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
        .then(r => r.json())
        .then(review => {
            sessionStorage.setItem(key, JSON.stringify(review));
            return review;
        });
}

