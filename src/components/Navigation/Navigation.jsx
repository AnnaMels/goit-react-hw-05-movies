import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
    return (
        <nav>
            <NavLink className={({ isActive }) => isActive ? `${styles.active}` : `${styles.navLink}`} to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? `${styles.active}` : `${styles.navLink}`} to='/movies'>Movies</NavLink>
        </nav>
    )
}

export default Navigation;