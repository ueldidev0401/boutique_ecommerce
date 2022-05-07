import cn from "classnames";
import PropTypes from "prop-types";
import {isFloat} from "@utils/method";
import styled, {space, color} from "@styled";
import {IoIosStar, IoIosStarHalf, IoIosStarOutline} from "react-icons/io";

const RatingStyle = styled.div`
  ${space};
  ${color};
`

const Ratings = ({ratings, className, ...props}) => {
    return (
        <RatingStyle className={cn('ratings', className)} {...props}>
            {/* Full Star */}
            {Array.from({length: ratings}, (_, i) => (
                <IoIosStar key={i}/>
            ))}

            {/* Half Star */}
            {isFloat(ratings) && <IoIosStarHalf/>}

            {/* Empty Star */}
            {Array.from({length: 5 - ratings}, (_, i) => (
                <IoIosStarOutline key={i}/>
            ))}
        </RatingStyle>
    );
};

Ratings.propTypes = {
    ratings: PropTypes.number.isRequired,
    className: PropTypes.string
};

export default Ratings;