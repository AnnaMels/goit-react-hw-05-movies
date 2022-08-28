import styles from './TrendingMoviesListItem.module.css';
import { Link, useLocation } from "react-router-dom";

const TrendingMoviesItem = ({ title, name, id, img }) => {
    const from = useLocation();
    return (
        <>
            <li className={styles.listItem}><Link className={styles.listLink} to={`/movies/${id}`} state={{ from }} ><img className={styles.listImg} src={img} alt={title} />{title ? title : name}</Link>
            </li>
        </>
    );
}

export default TrendingMoviesItem;