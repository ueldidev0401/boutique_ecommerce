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
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeIsModalShowAction } from "@global/actions/cardActions";

// import { CustomCard } from "./customCard.style";

const CustomCard = ({ stuff, style, onCardClickHandle }) => {
    let { photoUrl, brief, price, oldPrice, title, size } = stuff;
    const cardReducer = useSelector((state) => state).cardReducer;
    const dispatch = useDispatch();

    return (
        <Fragment>
            <Container className="card" style={{ border: '1px solid #E8E8E8', padding: '0', borderRadius: '5px', fontFamily: 'Saira', height: '100%' }} onClick={() => {
                dispatch(changeIsModalShowAction(true));
            }} onMouseOver={(e) => {
                e.currentTarget.getElementsByTagName('svg')[0].style.color = "#E84242";
            }} onMouseLeave={(e) => {
                e.currentTarget.getElementsByTagName('svg')[0].style.color = "black";
            }}>
                <Row style={{ width: '100%', height: '70%', margin: 0 }}>
                    <Col md={12} style={{ padding: 0, height: '100%' }}>
                        <img src={photoUrl} style={{ width: '100%', height: '100%', padding: 0, borderTopRadius: '2%' }} />
                    </Col>
                </Row>
                <Row style={{ height: '5%', marginLeft: '1%' }}>
                    <Col style={{ fontWeight: '20px', fontFamily: 'Saira' }}>
                        {title}
                    </Col>
                </Row>
                <Row style={{ height: '10%', marginLeft: '1%' }}>
                    <Col style={{ fontSize: '12px' }}>
                        {brief}
                    </Col>
                </Row>
                <Row style={{ height: '6%', marginLeft: '1%' }}>
                    <Col style={{ fontSize: '10px' }}>
                        {size}
                    </Col>
                </Row>
                <Row style={{
                    height: '8%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',
                    marginLeft: '1%',
                    justifyContent: 'space-between',
                    marginRight: '1%'
                }}>
                    <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                        <div style={{ width: '50%', display: "flex", flexDirection: 'row', paddingLeft: '6%' }}>
                            <div style={{ marginRight: '10px', fontSize: '21px' }}>
                                {price}
                            </div>
                            <div style={{ textDecoration: 'line-through', alignSelf: 'center' }}>
                                {oldPrice ? oldPrice : null}
                            </div>
                        </div>
                        <div style={{ width: '49%', display: 'flex', flexDirection: 'row-reverse' }}>
                            {<HiOutlinePlus className="addCartBtn" style={{ marginRight: '8%' }} size='30px' />}
                        </div>
                    </div>

                    {/* <Col>
                        {price}
                    </Col>
                    <Col >
                        {oldPrice ? oldPrice : null}
                    </Col>
                    <Col>
                        {<GoPlus />}
                    </Col> */}
                </Row>
            </Container>
        </Fragment >
    );
};

export default CustomCard;
