import cn from "classnames";
import PropTypes from "prop-types";
import parse from "react-html-parser";
import {WidgetItem, WidgetTitle, WidgetBody} from "./widget.style";

const Widget = ({title, children, className, ...props}) => {
    return (
        <WidgetItem className={cn(className)} {...props}>
            {title && <WidgetTitle>{parse(title)}</WidgetTitle>}
            <WidgetBody>
                {children}
            </WidgetBody>
        </WidgetItem>
    );
};

Widget.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
};


export default Widget;