import PropTypes from "prop-types";
import Button from "@components/ui/button";
import {Col, Container, Row} from "@bootstrap";
import {SlideContent, SlideItem, SlideSubTitle, SlideTitle, SliderThumb} from "@components/slider/slider.style";

const SlideOne = ({subTitle, title, content, thumb}) => {
    return (
        <SlideItem>
            <Container>
                <Row className="align-items-center">
                    <Col xs={{order: 1}} sm={{size: 7, order: 0}} xl={{size: 6, order: 0}}>
                        <SlideContent className="slide-content">
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

                    {thumb && (
                        <Col xs={{order: 0}} sm={{size: 5, order: 1}} xl={{size: 6, order: 1}}>
                            <SliderThumb>
                                <img src={thumb} alt={title} width={540} height={458}/>
                            </SliderThumb>
                        </Col>
                    )}
                </Row>
            </Container>
        </SlideItem>
    );
};

SlideOne.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    thumb: PropTypes.string
};


export {SlideOne};