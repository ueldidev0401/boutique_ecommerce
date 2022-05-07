import Link from "next/link";
import Image from "next/image";
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {CURRENCY} from "@utils/constant";
import {getProductStock} from "@utils/product";
import {Quantity} from "@components/cart/cart.style";
import {CgMathPlus, CgMathMinus} from "react-icons/cg";
import {
    PriceAmount,
    RemoveButton,
    MiniCartProName,
    MiniCartProMeta,
    MiniCartProPrice,
    MiniCartProThumb,
    MiniCartProContent,
    MiniCartProductItem
} from "@components/cart/minicart-sidebar/style";
import {
    removeCartAction,
    incrementCartQuantityAction,
    decrementCartQuantityAction
} from "@global/actions/cartAction";

const MiniCartProduct = ({product}) => {
    const {title, handle, images, quantity, price, variations, variants} = product;
    const stock = getProductStock(product, variations);
    const dispatch = useDispatch();

    return (
        <MiniCartProductItem>
            <Link href={`/product/${handle}`} passHref>
                <MiniCartProThumb>
                    <Image
                        alt={name}
                        width={110}
                        height={120}
                        src={images?.edges[0]?.node?.originalSrc}
                    />
                </MiniCartProThumb>
            </Link>

            <MiniCartProContent>
                <div>
                    <Link href={`/product/${handle}`} passHref>
                        <MiniCartProName>{title}</MiniCartProName>
                    </Link>

                    {variants?.edges?.length > 1 && (
                        <MiniCartProMeta>
                            {variations?.title}
                        </MiniCartProMeta>
                    )}

                    <MiniCartProPrice>
                        {quantity} x <PriceAmount>{CURRENCY + price}</PriceAmount>
                    </MiniCartProPrice>

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
                </div>

                <RemoveButton onClick={() => dispatch(removeCartAction(product))}>
                    x
                </RemoveButton>
            </MiniCartProContent>
        </MiniCartProductItem>
    );
};

MiniCartProduct.propTypes = {
    product: PropTypes.object.isRequired,
};


export default MiniCartProduct;
