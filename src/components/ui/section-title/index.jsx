import PropTypes from "prop-types";
import {SectionText, SectionTitleWrap, Title} from "./title.style"

const SectionTitle = ({title, content, align, ...props}) => {
    return (
        <SectionTitleWrap align={align} {...props}>
            <Title>{title}</Title>
            <SectionText>{content}</SectionText>
        </SectionTitleWrap>
    );
};

SectionTitle.defaultProps = {
    align: "center"
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    align: PropTypes.string,
};


export default SectionTitle;