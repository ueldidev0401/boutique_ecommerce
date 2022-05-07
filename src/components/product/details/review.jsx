import PropTypes from 'prop-types';
import {FaUserTie} from "react-icons/fa";
import Ratings from "@components/product/details/rating";
import {ReviewItem} from "@components/product/details/details.style";

const Review = ({data}) => {
    const {name, rating, message} = data;

    return (
        <ReviewItem>
            <div className="review-img">
                <FaUserTie/>
            </div>

            <div className="review-content">
                <h4 className="review-name">{name}</h4>
                <Ratings ratings={rating}/>
                <p>{message}</p>
            </div>
        </ReviewItem>
    );
};

Review.propTypes = {
    data: PropTypes.object.isRequired,
};


export default Review;
