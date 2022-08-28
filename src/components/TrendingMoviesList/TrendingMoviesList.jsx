import styles from './TrendingMoviesList.module.css';
import defaultImg from '../../images/defaultImg.png'
import TrendingMoviesItem from "../TrendingMoviesItem/TrendingMoviesItem";
const TrendingMovieList = ({ movies }) => {
    return (
        <>
            {<ul className={styles.moviesList}>{movies.map(({ title, id, name, poster_path }) => {
                const img = poster_path ? `https://image.tmdb.org/t/p/w300/${poster_path}` : defaultImg;
                return <TrendingMoviesItem title={title} key={id} name={name} id={id} img={img}/>

            } 
            )}</ul>}
        </>
    ) 
}

export default TrendingMovieList;