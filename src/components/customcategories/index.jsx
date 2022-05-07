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
const CustomCategories = () => {
    return (
        <Fragment>
            <Container style={{margin: 0}}>
                <Row>
                    <Col md={12}>
                        <div className="custom-categories">
                            <div className="custom-categories-button">
                                <div>ALL CATEGORIES</div>
                            </div>
                            <div className="custom-categories-detail"></div>
                        </div>
                    </Col>
                </Row>
            </Container>    
        </Fragment >
    );
};

export default CustomCategories;
