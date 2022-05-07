import {FooterWrap} from "./footer.style";
import FooterWidget from "./footer-widget";
import FooterBottom from "@components/layout/footer/footer-bottom";

const Footer = (props) => {
    return (
        <FooterWrap {...props}>
            <FooterWidget bg="secondary" color="white"/>
            <FooterBottom bg="heading"/>
        </FooterWrap>
    );
};

export default Footer;