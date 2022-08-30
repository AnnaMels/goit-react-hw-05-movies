import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovieByKeyWord } from "../../services/movieDbApi";
import PropTypes from 'prop-types';
import styles from './MoviesSearchPage.module.css';
import TrendingMovieList from "../../components/TrendingMoviesList/TrendingMoviesList";

const SearchMovie = () => {
    const [state, setState] = useState('');
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('query');

    
    useEffect(() => {
        if (query) {
            fetchMovieByKeyWord(query)
                .then(movie => setMovies(movie.results));
        };
    }, [query])

    const onSearchButtonClick = (e) => {
        e.preventDefault();
            setSearchParams({ query: state });
    }

    return (
        <div className={styles.formWrapper}>
            <form className={styles.form} onSubmit={onSearchButtonClick}>
                <input className={styles.input} onChange={e => setState(e.target.value)} type="text" />

                <button className={styles.button}>Search</button>
            </form>
            <TrendingMovieList movies={movies}/>
        </div>
    );
}

SearchMovie.propTypes = {
    state: PropTypes.string,
    movies: PropTypes.array,
    query: PropTypes.string,
}

    export default SearchMovie;
