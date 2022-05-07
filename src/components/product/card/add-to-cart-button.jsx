import Link from "next/link";
import {useProduct} from "@hooks";
import cogoToast from "cogo-toast";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {IoIosCart} from "react-icons/io";
import {addToCartAction} from "@global/actions/cartAction";
import {AddToCartButton as CartButtonStyle, SelectOptionButton} from "./product.style";

const AddToCartButton = ({isShowInMobile, product}) => {
    const {title, variants, handle} = product;
    const dispatch = useDispatch();
    const {
        price,
        isStock,
        isInCart,
        quantity,
        variations,
    } = useProduct(product);

    const addToCartHandler = (rest) => {
        if (!isInCart) {
            dispatch(addToCartAction(rest));
            cogoToast.success(
                `${rest?.title} is added to cart.`, {
                    position: "top-right",
                    heading: "Successfully Add!",
                    hideAfter: 1
                }
            );
        } else {
            cogoToast.warn(
                `${rest?.title} is already added.`, {
                    position: "top-right",
                    heading: "Already Added!",
                    hideAfter: 1
                }
            );
        }
    }

    return (
        variants?.edges?.length > 1 ? (
            <Link href={`/product/${handle}`} passHref>
                <SelectOptionButton mobile={isShowInMobile}>
                    <IoIosCart/> Select Options
                </SelectOptionButton>
            </Link>
        ) : (
            <CartButtonStyle
                mobile={isShowInMobile}
                disabled={isInCart || isStock}
                onClick={() => addToCartHandler({
                    ...product,
                    price,
                    quantity,
                    variations
                })}
            >
                <IoIosCart/>
                {!isStock && !isInCart ? "Add to Cart" : !isStock && isInCart ? "Already Added" : "Out of Stock"}
            </CartButtonStyle>
        )
    );
};

AddToCartButton.defaultProps = {
    isShowInMobile: false
}

AddToCartButton.propTypes = {
    product: PropTypes.object.isRequired,
    isShowInMobile: PropTypes.bool
};


export default AddToCartButton;
