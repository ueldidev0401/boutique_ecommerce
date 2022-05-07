import Link from "next/link";
import {Td} from "@bootstrap";
import Image from "next/image";
import PropTypes from 'prop-types';
import {FiEdit} from "react-icons/fi";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {Quantity} from "@components/cart/cart.style";
import {CgMathMinus, CgMathPlus} from "react-icons/cg";
import {getCartProductTotalPrice, getProductStock} from "@utils/product";
import {
    removeCartAction,
    incrementCartQuantityAction,
    decrementCartQuantityAction
} from "@global/actions/cartAction";
import {
    CartProInfo,
    CartProMeta,
    CartProName,
    CartProThumb,
    CartProPrice,
    CartActionBtn,
    CartProAction,
    SingleCartItem
} from "@components/cart/cart-product/style";

const CartItem = ({product}) => {
    const {title, images, price, variations, quantity, handle, variants} = product;
    const stock = getProductStock(product, variations);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.shoppingCart);
    const cartProductSubTotal = getCartProductTotalPrice(cart, product);

    return (
        <SingleCartItem>
            <CartProThumb>
                <Link href={`/product/${handle}`}>
                    <a className="d-block">
                        <Image
                            width={150}
                            height={150}
                            src={images?.edges[0]?.node?.originalSrc}
                        />
                    </a>
                </Link>
            </CartProThumb>
            <CartProInfo>
                <Link href={`/product/${handle}`} passHref>
                    <CartProName>{title}</CartProName>
                </Link>

                {variants?.edges?.length > 1 && (
                    <CartProMeta>{variations?.title}</CartProMeta>
                )}
            </CartProInfo>

            <CartProPrice>
                {price}
            </CartProPrice>

            <Td>
                <Quantity>
                    <button
                        style={{pointerEvents: quantity === 1 ? "none" : "visible"}}
                        onClick={() => dispatch(decrementCartQuantityAction(product))}
                    >
                        <CgMathMinus/>
                    </button>
                    <input type="text" value={quantity} size={stock} readOnly/>
                    <button
                        style={{pointerEvents: quantity === stock ? "none" : "visible"}}
                        onClick={() => dispatch(incrementCartQuantityAction(product))}
                    >
                        <CgMathPlus/>
                    </button>
                </Quantity>
            </Td>
            <Td>
                {cartProductSubTotal.toFixed(2)}
            </Td>
            <CartProAction>
                <CartActionBtn
                    tag="a"
                    href={`/product/${handle}`}
                >
                    <FiEdit/>
                </CartActionBtn>

                <CartActionBtn
                    tag="button"
                    onClick={() => dispatch(removeCartAction(product))}
                >
                    <AiOutlineCloseCircle/>
                </CartActionBtn>
            </CartProAction>
        </SingleCartItem>
    )
};

CartItem.propTypes = {
    product: PropTypes.object.isRequired,
};


export default CartItem;
