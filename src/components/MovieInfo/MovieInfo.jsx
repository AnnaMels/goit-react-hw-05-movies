import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import styles from './MovieInfo.module.css';


const MovieInfo = ({ film, error }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || '/movies';

    return (
        <>
            {error ? <p>Page not found</p> : <div className={styles.container}>
                <button className={styles.button} onClick={() => navigate(from)} >Go back</button>
                <div className={styles.movieInfo}>
                    <img className={styles.cardImage} src={film.img} alt={film.title} />
                    <div className={styles.movieDetails}>
                        <h1 className={styles.title && styles.mainTitle}>{film.title}</h1>
                        <p><span className={styles.score}>User Score: </span>{film.score}%</p>
                        <h2 className={styles.title}>Overview</h2>
                        <p>{film.overview}</p>
                        <h3 className={styles.title}>Genres</h3>
                        <p>{film.genres}</p>
                    </div>
                </div>
                <div className={styles.addInfoWrapper}>
                    <p className={styles.additionalInfo}>Additional information</p>
                    <ul className={styles.cardList}>
                        <li className={styles.cardListItem}><NavLink className={({ isActive }) => isActive ? `${styles.active}` : `${styles.cardLink}`} state={{ from }} to='cast'>Cast</NavLink></li>
                        <li className={styles.cardListItem}><NavLink className={({ isActive }) => isActive ? `${styles.active}` : `${styles.cardLink}`} state={{ from }} to='review'>Review</NavLink></li>
                    </ul>
                    <Outlet />
                </div>
            </div>}
        </>
    );
}

export default MovieInfo;