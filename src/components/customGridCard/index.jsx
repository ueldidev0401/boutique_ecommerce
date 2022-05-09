import cn from "classnames";
import Link from "next/link";
import { Fragment } from "react";
import { useProduct } from "@hooks";
import PropTypes from "prop-types";
import { CURRENCY } from "@utils/constant";
import QuickView from "@components/product/card/quick-view";
import { getDiscountPercentage } from "@utils/product";
import { Col, Container, Row } from "@bootstrap";
import { HiOutlinePlus } from 'react-icons/hi';
import Vector from '@assets/image/body/section2/Vector.png';
// import { CustomCard } from "./customCard.style";
const CustomGridCard = ({ stuff, style, onCardClickHandle }) => {
    let { photoUrl, brief, price, oldPrice, title, size } = stuff;

    return (
        <Fragment>
            <Container className="card" style={{ border: '1px solid #E8E8E8', padding: '0', borderRadius: '2%', fontFamily: 'Saira', height: '100%' }}>
                <div className="gridCard">
                    <div className="gridCardImage">
                        <img src={photoUrl} style={{width: '100%', height: '100%'}}/>
                    </div>
                    <div className="gridCardContent">
                        <div className="gridCardContentTitle">
                            {title}
                        </div>
                        <div className="gridCardContentBrief">
                            {brief}
                        </div>
                        <div className="gridCardContentPrice">
                            {price}
                        </div>
                        <div className="gridCardContentAddCart">
                            <HiOutlinePlus className="addCartBtn" style={{width: '100%', height: '100%'}}/>
                        </div>
                    </div>
                </div>
            </Container>
        </Fragment >
    );
};

export default CustomGridCard;
