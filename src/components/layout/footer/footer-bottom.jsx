import Image from "next/image";
import {IoIosHeart} from "react-icons/io";
import {Container, Col, Row} from "@bootstrap";
import {CopyrightText, FooterBottomWrapper} from "./footer.style";

const FooterBottom = ({bg}) => {
    return (
        <FooterBottomWrapper
            bg={bg}
            pt={[15, null, null, 25]}
            pb={[10, null, null, 20]}
        >
            <Container>
                <Row className="flex-sm-row-reverse">
                    <Col md={6} className="text-center text-md-right">
                        <div className="payment-link">
                            <Image
                                src="/images/icons/payment.png"
                                alt="Payment Method"
                                width={243}
                                height={21}
                            />
                        </div>
                    </Col>

                    <Col md={6} className="text-center text-md-left">
                        <CopyrightText>
                            © 2021, Furns. Made With <IoIosHeart/> by <a className="company-name" href="https://hasthemes.com/"> HasThemes.</a>
                        </CopyrightText>
                    </Col>
                </Row>
            </Container>
        </FooterBottomWrapper>
    );
};

export default FooterBottom;
