import PropTypes from 'prop-types';
import {useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {CURRENCY} from "@utils/constant";
import {FiShoppingBag} from "react-icons/fi";
import {CartButtonWrap, Price} from "./style";
import {getCartTotalPrice} from "@utils/product";

const CartButton = ({onHandler}) => {
    const cart = useSelector(state => state.shoppingCart);
    const cartTotalPrice = getCartTotalPrice(cart);
    const firstUpdate = useRef(true);
    const buttonRef = useRef(null);

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return
        }
        buttonRef.current.classList.add('animated');
        setTimeout(() => {
            buttonRef.current.classList.remove('animated');
        }, 1000);
    }, [cart]);

    return (
        <CartButtonWrap
            ref={buttonRef}
            onClick={() => onHandler()}
        >
            <FiShoppingBag/>
            <span className="counter">{cart.length} Items</span>
            <Price>{CURRENCY + Math.ceil(cartTotalPrice)}</Price>
        </CartButtonWrap>
    );
};

CartButton.propTypes = {
    onHandler: PropTypes.func.isRequired,
};

export default CartButton;
