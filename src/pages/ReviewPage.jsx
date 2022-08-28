import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { fetchReview } from "../services/movieDbApi";
import Review from '../components/Review';
    

const ReviewPage = () => {
    const [review, setReview] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const parseData = (review) => {
            if (review) {
                const parseReviewInfo = review.map(el => {
                    const newData = {
                        author: el.author,
                        content: el.content,
                        id: el.id,
                    };
                    return newData;
                })
                setReview(parseReviewInfo);
            }
        }
        
        fetchReview(id)
            .then(review => parseData(review.results));
    }, [id])

    return (
        <Review review={review} />
    );
}

ReviewPage.propTypes = {
    review: PropTypes.array,
    newData: PropTypes.shape({
        author: PropTypes.string,
        content: PropTypes.string,
        id: PropTypes.string,
    })
};

export default ReviewPage;