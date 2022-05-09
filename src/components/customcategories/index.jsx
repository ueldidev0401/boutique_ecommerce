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
import { MdOutlineSportsBasketball } from 'react-icons/md';
import { RiTShirt2Line } from 'react-icons/ri';
import { GiChelseaBoot } from 'react-icons/gi';
import { BsSmartwatch } from 'react-icons/bs';
import { FaHatCowboySide } from 'react-icons/fa';
import { BsHandbag } from 'react-icons/bs';
import { GiDiamondRing } from 'react-icons/gi';
import { CgHome } from 'react-icons/cg';
import { BsEyeglasses } from 'react-icons/bs';
import { useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { setCurrentCategory } from "@global/slices/cardSlice";
const handleDragStart = (e) => e.preventDefault();

export const Category = ({ CategoryIcon, categoryName, key, categoryClick, categoryId }) => {
    var [isActive, setIsActive] = useState(false);
    var dispatch = useDispatch();
    const cardReducer = useSelector((state) => state).cardReducer;

    const handleClick = (categoryId) => {
        dispatch(setCurrentCategory(categoryId));
    }

    console.log('key = ', key);
    var borderBottomStyle;
    cardReducer.currentCategory == categoryId ? borderBottomStyle = {
        borderBottomStyle: 'solid',
        borderBottomColor: '#E84242',
        borderWidth: '3px'
    } : {
        borderBottomStyle: 'none',
    };
    return (
        <div className="category" key={key} onClick={() => { handleClick(categoryId) }} style={borderBottomStyle}>
            <div className="categoryIcon">
                {CategoryIcon != undefined ? <CategoryIcon /> : null}
            </div>
            <div className="categoryName">{categoryName}</div>
        </div>
    )
}

const categoryItems = [
    <Category CategoryIcon={MdOutlineSportsBasketball} categoryName="Sports &amp; Outdoors" key={1} categoryId={1}  />,
    <Category CategoryIcon={GiChelseaBoot} categoryName="Shoes" key={2} categoryId={2} />,
    <Category CategoryIcon={RiTShirt2Line} categoryName="Apparel" key={3} categoryId={3}/>,
    <Category CategoryIcon={BsSmartwatch} categoryName="Wathces" key={4} categoryId={4} />,
    <Category CategoryIcon={FaHatCowboySide} categoryName="Accessories" key={5} categoryId={5}/>,
    <Category CategoryIcon={BsHandbag} categoryName="Bags" key={6} categoryId={6} />,
    <Category CategoryIcon={GiDiamondRing} categoryName="Jewelry" key={7} categoryId={7} />,
    <Category CategoryIcon={CgHome} categoryName="Home" key={8} categoryId={8}  />,
    <Category CategoryIcon={BsEyeglasses} categoryName="Glass" key={9} categoryId={9} />,
]



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 6,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};

// const CustomLeftArrow = () => {
//     return ()
// }

const CustomCategories = () => {
    var dispatch = useDispatch();
    return (
        <Fragment>
            <Row>
                <Col md={12}>
                    <div className="custom-categories">
                        <div className="custom-categories-button">
                            <div onClick={() => {dispatch(setCurrentCategory(0))}}>ALL CATEGORIES</div>
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
                                shouldResetAutoplay={false}
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                responsive={{
                                    desktop: {
                                        breakpoint: {
                                            max: 3000,
                                            min: 1024
                                        },
                                        items: 7,
                                        partialVisibilityGutter: 40
                                    },
                                    mobile: {
                                        breakpoint: {
                                            max: 464,
                                            min: 0
                                        },
                                        items: 2,
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
                                {categoryItems.map(item => {
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
