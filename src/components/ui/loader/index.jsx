import cn from "classnames";
import {LoaderStyle} from "./style";
import {ImSpinner2} from "react-icons/im";

const Loader = ({loadingText, ...props}) => {
    return (
        <div className={cn('w-100 text-center', props.className)} {...props}>
            <LoaderStyle>
                <ImSpinner2/>
                {loadingText ? loadingText : "Loading..."}
            </LoaderStyle>
        </div>
    );
};

export default Loader;
