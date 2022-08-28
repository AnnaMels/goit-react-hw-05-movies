import styles from './Review.module.css';
const Review = ({ review }) => {

    return (
        <div>
            {review.length === 0 && <p>Review is not found</p> }
            <ul className={styles.reviewList}>{review.map(({ id, content, author }) => <li key={id}><p>Author: <span className={styles.author}>{author}</span></p><span className={styles.content}>{content}</span></li>)}</ul>
        </div>
    )
}

export default Review;