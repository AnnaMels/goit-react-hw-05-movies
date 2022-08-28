import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { fetchCast } from '../services/movieDbApi';
import PropTypes from 'prop-types';
import defaultImage from '../images/defaultImg.png';
import Cast from '../components/Cast';

const CastPage = () => {
    const [cast, setCast] = useState([]);
    
    const { id } = useParams();

    useEffect(() => {
        const parseData = (film) => {
            if (film) {
                const parseCastInfo = film.map(mov => {
                    const imageUrl = mov.profile_path ? `https://image.tmdb.org/t/p/w200/${mov.profile_path}` : defaultImage;

                    const newData = {
                        id: mov.id,
                        character: mov.character,
                        name: mov.name,
                        imageUrl,
                    };
                    return newData;
                })

                setCast(parseCastInfo);
            }
        }

    
        fetchCast(id)
            .then(film => {
                const filmInfo = film.cast;
                parseData(filmInfo);
            });
    }, [id]);

    return (
        <>
            <Cast cast={cast} />
        </>
    )
}

CastPage.propTypes = {
    cast: PropTypes.array,
    newData: PropTypes.shape({
        id: PropTypes.string,
        character: PropTypes.string,
        name: PropTypes.string,
        imageUrl: PropTypes.string
    }),
    parseData: PropTypes.func,
    film: PropTypes.object,
}

export default CastPage;