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
// import { CustomCard } from "./customCard.style";
const CustomCard = ({ stuff, style }) => {
    let { photoUrl, brief, price, oldPrice, title, size } = stuff;

    return (
        <Fragment>
            <Container className="card" style={{ height: '409px', borderColor: 'lightgrey', borderStyle: 'solid', borderWidth: '1px', padding: '0', borderRadius: '2%' }}>
                <Row style={{ width: '100%', height: '70%', margin: 0 }}>
                    <Col md={12} style={{ padding: 0 }}>
                        <img src={photoUrl} style={{ width: '100%', height: '100%', padding: 0, borderTopRadius: '2%' }} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {title}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {brief}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {size}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {price}
                    </Col>
                    <Col style={{ textDecoration: 'line-through' }}>
                        {oldPrice ? oldPrice : null}
                    </Col>
                    <Col>
                        {<GoPlus />}
                    </Col>
                </Row>
            </Container>
        </Fragment >
    );
};

export default CustomCard;
