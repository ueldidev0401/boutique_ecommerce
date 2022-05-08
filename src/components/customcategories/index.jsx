import cn from "classnames";
import Link from "next/link";
import { Fragment } from "react";
import { useProduct } from "@hooks";
import PropTypes from "prop-types";
import { CURRENCY } from "@utils/constant";
import QuickView from "@components/product/card/quick-view";
import { getDiscountPercentage } from "@utils/product";
import { Col, Container, Row } from "@bootstrap";
import { GoPlus } from 'react-icons/go';
import AliceCarousel from 'react-alice-carousel';
import Carousel from 'react-multi-carousel';

import slideImage from '@assets/image/body/section1/landing_image.png';
import saleImage1 from '@assets/image/body/section1/sale_image1.png';
import saleImage2 from '@assets/image/body/section1/sale_image2.png';
import thirdImage from '@assets/image/body/section1/third_image.png';

const handleDragStart = (e) => e.preventDefault();
const items = [
    <img src={slideImage.src} onDragStart={handleDragStart} role="presentation" style={{ height: '53px', marginRight: '10px' }} />,
    <img src={saleImage2.src} onDragStart={handleDragStart} role="presentation" style={{ height: '53px', marginRight: '10px' }} />,
    <img src={saleImage1.src} onDragStart={handleDragStart} role="presentation" style={{ height: '53px', marginRight: '10px' }} />,
    <img src={thirdImage.src} onDragStart={handleDragStart} role="presentation" style={{ height: '53px', marginRight: '10px' }} />,
    <img src={slideImage.src} onDragStart={handleDragStart} role="presentation" style={{ height: '53px', marginRight: '10px' }} />,
    <img src={saleImage2.src} onDragStart={handleDragStart} role="presentation" style={{ height: '53px', marginRight: '10px' }} />,
    <img src={saleImage1.src} onDragStart={handleDragStart} role="presentation" style={{ height: '53px', marginRight: '10px' }} />,
    <img src={thirdImage.src} onDragStart={handleDragStart} role="presentation" style={{ height: '53px', marginRight: '10px' }} />,
    <img src={slideImage.src} onDragStart={handleDragStart} role="presentation" style={{ height: '53px', marginRight: '10px' }} />,
    <img src={saleImage2.src} onDragStart={handleDragStart} role="presentation" style={{ height: '53px', marginRight: '10px' }} />,
    <img src={saleImage1.src} onDragStart={handleDragStart} role="presentation" style={{ height: '53px', marginRight: '10px' }} />,
    <img src={thirdImage.src} onDragStart={handleDragStart} role="presentation" style={{ height: '53px', marginRight: '10px' }} />,
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

// const CustomLeftArrow = () => {
//     return ()
// }

const CustomCategories = () => {
    return (
        <Fragment>
            <Row>
                <Col md={12}>
                    <div className="custom-categories">
                        <div className="custom-categories-button">
                            <div>ALL CATEGORIES</div>
                        </div>
                        <div className="custom-categories-detail">
                            <Carousel
                                additionalTransfrom={0}
                                autoPlay={false}
                                arrows
                                centerMode={false}
                                className=""
                                containerClass="container"
                                dotListClass=""
                                draggable
                                focusOnSelect={false}
                                infinite
                                itemClass=""
                                keyBoardControl
                                minimumTouchDrag={80}
                                renderButtonGroupOutside={false}
                                renderDotsOutside={false}
                                shouldResetAutoplay= {false}
                                responsive={{
                                    desktop: {
                                        breakpoint: {
                                            max: 3000,
                                            min: 1024
                                        },
                                        items: 3,
                                        partialVisibilityGutter: 40
                                    },
                                    mobile: {
                                        breakpoint: {
                                            max: 464,
                                            min: 0
                                        },
                                        items: 1,
                                        partialVisibilityGutter: 30
                                    },
                                    tablet: {
                                        breakpoint: {
                                            max: 1024,
                                            min: 464
                                        },
                                        items: 2,
                                        partialVisibilityGutter: 30
                                    }
                                }}
                                showDots={false}
                                sliderClass=""
                                slidesToSlide={1}
                                swipeable
                            >
                                {items.map(item => {
                                    return item
                                })}
                            </Carousel>
                        </div>
                    </div>
                </Col>
            </Row>
        </Fragment >
    );
};

export default CustomCategories;
