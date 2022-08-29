import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../images/filmCardDefaultImg.png'
import { fetchMovie } from "../services/movieDbApi";
import MovieInfo from "../components/MovieInfo/MovieInfo";


const Card = () => {
    const [movie, setMovie] = useState({});
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {

        const saveData = (film) => {

            let filmGenres = [];

            if (film.genres) {
                film.genres.map(el => filmGenres.push(el.name));
            };

            const genres = filmGenres.join(', ');
            const img = film.poster_path ? `https://image.tmdb.org/t/p/w300/${film.poster_path}` : defaultImg;
            const newData = {
                title: film.title,
                img,
                score: Math.ceil(film.vote_average * 10),
                overview: film.overview,
                genres,
            };
            setMovie(newData);
        }

        fetchMovie(id)
            .then(film => {
                if (film.success === false) {
                    setError(true)
                };

                saveData(film);
            });
    }, [id]);


    return (
            <MovieInfo film={movie} error={error} />
    )
}

Card.propTypes = {
    movie: PropTypes.object,
    error: PropTypes.bool,
    newData: PropTypes.shape({
        title: PropTypes.string,
        img: PropTypes.string,
        score: PropTypes.number,
        genres: PropTypes.string,
    })
};

export default Card;