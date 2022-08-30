import styles from './Cast.module.css';

const Cast = ({ cast }) => {
    return (
        <div>
            {<ul className={styles.castList}>{cast.map(({ id, name, character, imageUrl }) => <li className={styles.cardListItem} key={id}><img className={styles.castImg} src={imageUrl} alt={name} /><p className={styles.castInfo}> Actor: <br /> <span className={styles.actor}> {name}</span></p><p className={styles.castInfo}>Character: <br /> <span className={styles.character}> {character}</span></p></li>)}</ul>}
        </div>
    )
}

export default Cast;