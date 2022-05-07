import Image from "next/image";
import { IoIosHeart } from "react-icons/io";
import { Container, Col, Row } from "@bootstrap";
import { CopyrightText, FooterBottomWrapper } from "./footer.style";
import mark from '@assets/image/footer/footer_fist.png';

const FooterBottom = ({ bg }) => {
    return (
        <FooterBottomWrapper
            bg={bg}
            pt={[15, null, null, 25]}
            pb={[10, null, null, 20]}
        >
            <Container>
                <Row className="flex-sm-row-reverse">
                    <Col md={3} className="text-center text-md-left">
                        
                    </Col>
                    <Col md={6} className="text-center text-md-left">
                        <CopyrightText>
                            © 2022 mysouq. All rights reserved
                        </CopyrightText>
                    </Col>
                    <Col md={3} className="text-center text-md-left">
                        <img src={mark.src} />
                    </Col>
                </Row>
            </Container>
        </FooterBottomWrapper>
    );
};

export default FooterBottom;
