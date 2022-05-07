import Link from "next/link";
import {Td} from "@bootstrap";
import Image from "next/image";
import {useProduct} from "@hooks";
import PropTypes from 'prop-types';
import cogoToast from "cogo-toast";
import {useDispatch} from "react-redux";
import Button from "@components/ui/button";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {addToCartAction} from "@global/actions/cartAction";
import {removeWishlistAction} from "@global/actions/wishlistAction";
import {
    CartProInfo,
    CartProName,
    CartProThumb,
    CartProPrice,
    CartActionBtn,
    CartProAction,
    SingleCartItem
} from "@components/cart/cart-product/style";

const WishlistItem = ({product}) => {
    const {title, images, slug} = product;
    const dispatch = useDispatch();
    const {
        price,
        isStock,
        isInCart,
        quantity,
        variations
    } = useProduct(product);

    const onAddToCart = (rest) => {
        dispatch(addToCartAction(rest));
        cogoToast.success(
            `${product.name} is added to cart.`, {
                position: "top-right",
                heading: "Successfully Add!",
                hideAfter: 3
            }
        );
    }

    return (
        <SingleCartItem>
            <CartProThumb>
                <Link href={`/product/${slug}`}>
                    <a className="d-block">
                        <Image
                            width={150}
                            height={150}
                            src={images?.edges[0].node?.originalSrc}
                        />
                    </a>
                </Link>
            </CartProThumb>
            <CartProInfo>
                <Link href={`/product/${slug}`} passHref>
                    <CartProName>{title}</CartProName>
                </Link>
            </CartProInfo>
            <CartProPrice>
                {price}
            </CartProPrice>
            <Td>
                <Button
                    p={10}
                    tag="button"
                    bg="primary"
                    color="white"
                    fontSize={12}
                    style={{opacity: isStock ? 0.5 : 1, pointerEvents: isStock ? "none" : "visible"}}
                    onClick={() => onAddToCart({
                        ...product,
                        price,
                        quantity,
                        variations
                    })}
                >
                    {!isStock && !isInCart ? "Add to Cart" : !isStock && isInCart ? "Already Added" : "Out of Stock"}
                </Button>
            </Td>
            <CartProAction>
                <CartActionBtn
                    tag="button"
                    onClick={() => dispatch(removeWishlistAction(product))}
                >
                    <AiOutlineCloseCircle/>
                </CartActionBtn>
            </CartProAction>
        </SingleCartItem>
    )
};

WishlistItem.propTypes = {
    product: PropTypes.object.isRequired,
};


export default WishlistItem;
