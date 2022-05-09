import cn from "classnames";
import Link from "next/link";
import { Fragment } from "react";
import { useProduct } from "@hooks";
import PropTypes from "prop-types";
import { CURRENCY } from "@utils/constant";
import QuickView from "@components/product/card/quick-view";
import { getDiscountPercentage } from "@utils/product";
import { Col, Container, Row, Modal } from "@bootstrap";
import { HiOutlinePlus } from 'react-icons/hi';
import Vector from '@assets/image/body/section2/Vector.png';
// import { CustomCard } from "./customCard.style";
const CustomProductModal = ({ stuff, style, isShow }) => {
    // let { photos, brief, price, oldPrice, title, sizes, colours, Extras, description } = stuff;
    return (
        <Fragment>
            {isShow ? 
            <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>: null}
        </Fragment >
    );
};

export default CustomProductModal;
