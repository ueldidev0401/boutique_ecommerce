import Image from "next/image";
import { IoIosHeart } from "react-icons/io";
import { Container, Col, Row } from "@bootstrap";
import { CopyrightText, FooterBottomWrapper } from "./footer.style";
import mark from '@assets/image/footer/footer_fist.png';
import translateImg from '@assets/image/footer/translate.png'
import replaceImg from '@assets/image/footer/replace.png'
const FooterBottom = ({ bg }) => {
    return (
        <FooterBottomWrapper
            bg={bg}
            pt={[15, null, null, 25]}
            pb={[10, null, null, 20]}
        >
            <Container style={{ marginLeft: '5.77%', marginRight: '5.77%'}}>
                <Row className="flex-sm-row-reverse">
                    <Col md={3} className="text-center text-md-right" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                        <img src={replaceImg.src} style={{ margin: '1rem' }} />
                        <img src={translateImg.src} style={{ margin: '1rem' }} />
                    </Col>
                    <Col md={6} className="text-center text-md-left" style={{ display: 'flex', justifyContent: 'center' }}>
                        <CopyrightText style={{
                            alignSelf: 'center', fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '25px',
                            lineHeight: '29px',
                            textAlign: 'center'
                        }}>
                            © 2022 mysouq. All rights reserved
                        </CopyrightText>
                    </Col>
                    <Col md={3} className="text-center text-md-left">
                        <img src={mark.src} />
                    </Col>
                </Row>
            </Container>
        </FooterBottomWrapper >
    );
};

export default FooterBottom;
