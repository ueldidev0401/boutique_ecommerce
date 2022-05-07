import cogoToast from "cogo-toast";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToCompareAction, removeCompareAction,} from "@global/actions/compareAction";
import {addToWishlistAction, removeWishlistAction,} from "@global/actions/wishlistAction";
import {getCartProduct, getCartProductQuantity, getWishCompareProduct} from "@utils/product";

const useProduct = (product) => {
    const variants = product?.variants?.edges;

    const [sku, setSku] = useState();
    const [size, setSize] = useState();
    const [color, setColor] = useState();
    const [material, setMaterial] = useState();
    const [stock, setStock] = useState(0);
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [variations, setVariations] = useState({});
    const [compareAtPrice, setCompareAtPrice] = useState(0);
    const [isDiscounted, setIsDiscounted] = useState(false);
    const [isShowQuickView, setIsShowQuickView] = useState(false);

    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.wishlist);
    const compareList = useSelector((state) => state.compareList);
    const shoppingCart = useSelector((state) => state.shoppingCart);

    const isInWishlist = Boolean(getWishCompareProduct(wishlist, product));
    const isInCart = Boolean(getCartProduct(shoppingCart, product, variations));
    const isInCompareList = Boolean(getWishCompareProduct(compareList, product));
    const cartProductQuantity = getCartProductQuantity(shoppingCart, product, variations);
    const isStock = Boolean(stock === cartProductQuantity);

    const onVariantHandler = (selectedOptions) => {
        const selectedVariantTitle = Object.values(selectedOptions).map(item => item.value).sort().toString()
        const selectedVariant = variants?.find(({node}) => node?.title.split(" / ").sort().toString() === selectedVariantTitle)?.node;

        const {id, title, sku, priceV2, quantityAvailable, compareAtPriceV2} = selectedVariant;
        setSku(sku);
        setPrice(priceV2?.amount);
        setStock(quantityAvailable);
        setVariations({id, title});
        setIsDiscounted(!!compareAtPriceV2);
        setCompareAtPrice(compareAtPriceV2 ? compareAtPriceV2?.amount : 0);
    };

    const onWishlistHandler = () => {
        !isInWishlist ? dispatch(addToWishlistAction(product)) : dispatch(removeWishlistAction(product));
        !isInWishlist ? cogoToast.success(`"${product?.title}" is successfully added.`, {
            position: "top-right",
            heading: "Added to Wishlist!",
            hideAfter: 3,
        }) : cogoToast.error(`"${product?.title}" is removed.`, {
            position: "top-right",
            heading: "Remove from Wishlist!",
            hideAfter: 3,
        });
    };

    const onCompareHandler = () => {
        !isInCompareList ? dispatch(addToCompareAction(product)) : dispatch(removeCompareAction(product));
        !isInCompareList ? cogoToast.success(`"${product?.title}" is successfully added.`, {
            position: "top-right",
            heading: "Added to Compare!",
            hideAfter: 3,
        }) : cogoToast.error(`"${product?.title}" is removed.`, {
            position: "top-right",
            heading: "Remove from Compare!",
            hideAfter: 3,
        });
    };

    const onQuickViewHandler = () => setIsShowQuickView((prevState) => !prevState);
    const onDecrementQuantity = () => setQuantity((prevState) => (prevState > 1 ? (prevState -= 1) : 1));
    const onIncrementQuantity = () => setQuantity((prevState) => prevState < stock - cartProductQuantity ? (prevState += 1) : prevState);

    useEffect(() => {
        setSku(variants[0]?.node?.sku);
        setPrice(variants[0]?.node?.priceV2?.amount);
        setStock(variants[0].node?.quantityAvailable);
        setSize(variants[0]?.node?.selectedOptions[0]?.value);
        setIsDiscounted(!!variants[0].node?.compareAtPriceV2);
        setColor(variants[0]?.node?.selectedOptions[1]?.value);
        setMaterial(variants[0]?.node?.selectedOptions[2]?.value);
        setVariations({id: variants[0].node?.id, title: variants[0].node?.title});
        setCompareAtPrice(variants[0].node?.compareAtPriceV2 ? variants[0].node?.compareAtPriceV2?.amount : 0);
    }, []);

    return {
        sku,
        size,
        price,
        stock,
        color,
        isStock,
        material,
        isInCart,
        quantity,
        variations,
        setQuantity,
        isDiscounted,
        isInWishlist,
        compareAtPrice,
        isInCompareList,
        isShowQuickView,
        onCompareHandler,
        onVariantHandler,
        onWishlistHandler,
        onQuickViewHandler,
        cartProductQuantity,
        onDecrementQuantity,
        onIncrementQuantity,
    };
};

export default useProduct;
