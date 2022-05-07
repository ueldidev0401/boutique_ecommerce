import PropTypes from "prop-types";
import Button from "@components/ui/button";
import {Col, Container, Row} from "@bootstrap";
import {SlideContent, SlideItem, SlideSubTitle, SlideTitle, SliderThumb} from "@components/slider/slider.style";

const SlideTwo = ({subTitle, title, content, thumb}) => {
    return (
        <SlideItem>
            {thumb && (
                <SliderThumb className="style-2">
                    <img src={thumb} alt={title}/>
                </SliderThumb>
            )}

            <Container className="align-self-center">
                <Row className="justify-content-center">
                    <Col md={8} className="m-auto">
                        <SlideContent mode="light" textAlign="center">
                            {subTitle && <SlideSubTitle>{subTitle}</SlideSubTitle>}
                            {title && <SlideTitle>{title}</SlideTitle>}
                            {content && <p>{content}</p>}
                            <Button
                                tag="a"
                                href="/shop"
                                color="white"
                                bg="primary"
                                hvrBg="black"
                                hvrColor="primary"
                                className="mt-4 mt-md-5"
                            >
                                Shop Now
                            </Button>
                        </SlideContent>
                    </Col>
                </Row>
            </Container>
        </SlideItem>
    );
};

SlideTwo.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    thumb: PropTypes.string
};


export {SlideTwo};