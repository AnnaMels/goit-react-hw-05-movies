import { fetchTrendingMovies } from '../services/movieDbApi';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TrendingMoviesList from '../components/TrendingMoviesList/TrendingMoviesList';

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendingMovies()
            .then(movies => {
                setMovies([...movies.results]);
        })
    }, [])


    return (
            <TrendingMoviesList movies={movies}/>
    )
}

HomePage.propTypes = {
    movies: PropTypes.array,
}

export default HomePage;