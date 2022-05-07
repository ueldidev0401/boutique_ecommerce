import cn from "classnames";
import Link from "next/link";
import {Fragment} from "react";
import {useProduct} from "@hooks";
import PropTypes from "prop-types";
import ProductActions from "./actions";
import {CURRENCY} from "@utils/constant";
import ProductThumbnail from "./thumbnail";
import AddToCartButton from "./add-to-cart-button";
import QuickView from "@components/product/card/quick-view";
import {
    Badge,
    Product,
    ProductMeta,
    ProductThumb,
    ProductPrice,
    ProductTitle,
    ProductBadges,
    ProductActionsMobile,
    ProductActions as ActionsWrap
} from "./product.style";
import {getDiscountPercentage} from "@utils/product";

const ProductCard = ({product, className}) => {
    let {title, handle} = product;

    const {
        price,
        isStock,
        isDiscounted,
        compareAtPrice,
        isShowQuickView,
        onQuickViewHandler
    } = useProduct(product);

    const percentage = getDiscountPercentage(price, compareAtPrice);

    console.log(percentage)

    return (
        <Fragment>
            <Product className={cn(className)}>
                <ProductThumb>
                    <ProductThumbnail product={product}/>
                    <ProductBadges>
                        {isDiscounted && percentage > 0 && <Badge type="sale">{'-' + Math.round(percentage) + '%'}</Badge>}
                        {isStock && <Badge type="featured">Stock out</Badge>}
                    </ProductBadges>

                    <ActionsWrap>
                        <ProductActions
                            product={product}
                            onQuickViewHandler={onQuickViewHandler}
                        />
                    </ActionsWrap>

                    <AddToCartButton product={product}/>
                </ProductThumb>

                <ProductMeta>
                    <ProductTitle>
                        <Link href={`/product/${handle}`}>{title}</Link>
                    </ProductTitle>
                    <ProductPrice>
                        {isDiscounted ? (
                            <>
                                <del className="price old">{CURRENCY + compareAtPrice} </del>
                                <span className="price new">{CURRENCY + price}</span>
                            </>
                        ) : (
                            <span className="price new">{CURRENCY + price}</span>
                        )}
                    </ProductPrice>
                </ProductMeta>

                <ProductActionsMobile>
                    <ProductActions
                        product={product}
                        onQuickViewHandler={onQuickViewHandler}
                    />
                </ProductActionsMobile>

                <AddToCartButton
                    product={product}
                    isShowInMobile={true}
                />
            </Product>

            {isShowQuickView && (
                <QuickView
                    product={product}
                    isOpen={isShowQuickView}
                    onHandler={onQuickViewHandler}
                />
            )}
        </Fragment>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    className: PropTypes.string,
}

export default ProductCard;
