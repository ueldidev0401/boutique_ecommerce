import {useProduct} from "@hooks";
import PropTypes from 'prop-types';
import cogoToast from "cogo-toast";
import {useDispatch} from "react-redux";
import {CURRENCY} from "@utils/constant";
import {useState, useEffect} from "react";
import Select from "@components/ui/select";
import Button from "@components/ui/button";
import {excerpt, toCapitalize} from "@utils/method";
import {
    IoLogoTwitter,
    IoLogoLinkedin,
    IoLogoFacebook,
    IoIosHeartEmpty,
    IoIosGitCompare
} from "react-icons/io";
import {
    ProductSKU,
    ContentWrap,
    ProductName,
    ProductPrices,
    ProductRatings,
    ProductSwatches,
    ProductSwatchItem,
    ProductSocialShare,
    ProductActionButton,
    QuantityIncDecButton
} from "@components/product/details/details.style";
import {CgMathMinus, CgMathPlus} from "react-icons/cg";
import Ratings from "@components/product/details/rating";
import {addToCartAction} from "@global/actions/cartAction";

const ProductDetailsContent = ({product, ...props}) => {
    let {title, description, variants, options} = product;
    variants = variants?.edges;
    const dispatch = useDispatch();
    const shortDesc = excerpt(description, 40);
    const [selectedOptions, setSelectedOptions] = useState({});

    const {
        sku,
        stock,
        price,
        isStock,
        quantity,
        variations,
        isDiscounted,
        isInWishlist,
        compareAtPrice,
        isInCompareList,
        onVariantHandler,
        onCompareHandler,
        onWishlistHandler,
        onIncrementQuantity,
        cartProductQuantity,
        onDecrementQuantity
    } = useProduct(product);

    const onAddToCartHandler = (rest) => {
        dispatch(addToCartAction(rest));
        cogoToast.success(
            `${rest?.title} is added to cart.`, {
                position: "top-right",
                heading: "Successfully Add!",
                hideAfter: 3
            }
        );
    }

    useEffect(() => {
        if (variants && variants?.length) {
            options.forEach(option => {
                setSelectedOptions((prevValue) => {
                    return {
                        ...prevValue,
                        [option?.name]: {
                            value: option?.values[0],
                            label: toCapitalize(option?.values[0])
                        }
                    }
                })
            })
        }
    }, [variants, options]);


    useEffect(() => {
        if (Object.keys(selectedOptions).length > 1) {
            onVariantHandler(selectedOptions);
        }
    }, [selectedOptions]);

    return (
        <ContentWrap {...props}>
            <ProductSKU>
                <strong>SKU:</strong> {sku}
            </ProductSKU>
            <ProductSKU>
                <strong>Availability: </strong>
                {isStock ? 'Out of Stock' : `${stock - cartProductQuantity} in Stock`}
            </ProductSKU>
            <ProductName>{title}</ProductName>
            {/*<ProductRatings>*/}
            {/*    <Ratings ratings={ratings}/>*/}
            {/*</ProductRatings>*/}

            <ProductPrices>
                {isDiscounted ? (
                    <>
                        <del className="price old">{CURRENCY + compareAtPrice} </del>
                        <span className="price new">{CURRENCY + price}</span>
                    </>
                ) : (
                    <span className="price new">{CURRENCY + price}</span>
                )}
            </ProductPrices>

            <p>{shortDesc}</p>

            {variants.length > 1 && (
                <ProductSwatches>
                    {variants?.length > 1 && (
                        options?.map(option => (
                            <ProductSwatchItem key={option?.id}>
                                <Select
                                    value={selectedOptions[option?.name]}
                                    name={option?.id}
                                    label={option?.name}
                                    options={option?.values.map(value => {
                                        return {
                                            value,
                                            label: toCapitalize(value)
                                        }
                                    })}
                                    onChange={(event) => {
                                        setSelectedOptions((prevValue) => {
                                            return {
                                                ...prevValue,
                                                [option?.name]: event
                                            }
                                        })
                                    }}
                                />
                            </ProductSwatchItem>
                        ))
                    )}
                </ProductSwatches>
            )}

            <ProductActionButton>
                <div className="quantity-cart-button">
                    <QuantityIncDecButton>
                        <button
                            className="btn btn-decrement"
                            onClick={() => onDecrementQuantity()}
                            style={{pointerEvents: quantity === 1 ? "none" : "visible"}}
                        >
                            <CgMathMinus/>
                        </button>
                        <input type="text" value={quantity} size={stock} readOnly/>
                        <button
                            className="btn btn-increment"
                            onClick={() => onIncrementQuantity()}
                            style={{pointerEvents: quantity === stock ? "none" : "visible"}}
                        >
                            <CgMathPlus/>
                        </button>
                    </QuantityIncDecButton>

                    <Button
                        tag="button"
                        bg="primary"
                        color="white"
                        hvrBg="secondary"
                        className="btn-cart"
                        style={{
                            opacity: isStock ? 0.6 : 1,
                            pointerEvents: isStock ? 'none' : 'visible'
                        }}
                        onClick={() => onAddToCartHandler({
                            ...product,
                            price,
                            quantity,
                            variations
                        })}
                    >
                        {isStock ? "Out of Stock" : "Add to Cart"}
                    </Button>
                </div>

                <div className="wishlist-compare-button">
                    <button
                        className="btn btn--wishlist"
                        onClick={() => onWishlistHandler()}
                    >
                        <IoIosHeartEmpty/> {!isInWishlist ? 'Add to wishlist' : 'Remove from wishlist'}
                    </button>
                    <button
                        className="btn btn--compare"
                        onClick={() => onCompareHandler()}
                    >
                        <IoIosGitCompare/> {!isInCompareList ? 'Add to Compare' : 'Remove from compare'}
                    </button>
                </div>
            </ProductActionButton>

            <ProductSocialShare>
                <h4>Share:</h4>
                <div className="media">
                    <a href="https://facebook.com" target="_blank" rel="noopener">
                        <IoLogoFacebook/>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener">
                        <IoLogoTwitter/>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener">
                        <IoLogoLinkedin/>
                    </a>
                </div>
            </ProductSocialShare>
        </ContentWrap>
    );
};

ProductDetailsContent.propTypes = {
    product: PropTypes.object.isRequired,
};


export default ProductDetailsContent;
