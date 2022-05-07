import PropTypes from 'prop-types';
import {BiError} from "react-icons/bi";
import {ErrorMessageWrap} from "@components/ui/error/error.style";

const ErrorMessage = ({message}) => {
    return (
        <ErrorMessageWrap>
            <BiError className="text-danger"/>
            <h2>{message}</h2>
        </ErrorMessageWrap>
    );
};

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
};


export default ErrorMessage;
