/***
 *  Get Quantity of Product from Cart
 * @param shoppingCart
 * @param product
 * @param variations
 * @returns {number|*}
 */
export const getCartProductQuantity = (shoppingCart, product, variations) => {
    const productOnCart = shoppingCart.find(item => item?.id === product?.id && (item?.variations === variations));

    if (productOnCart) {
        return productOnCart?.quantity;
    } else {
        return 0
    }
}

/***
 * Get Total Quantity of Products from Cart
 * @param shoppingCart
 * @returns {number}
 */
export const getCartTotalQuantity = (shoppingCart) => {
    return shoppingCart.reduce((total, product) => total + product.quantity, 0);
}

/***
 * Get Total Added Products from Cart
 * @param shoppingCart
 * @returns {*}
 */
export const getCartProductsQuantity = (shoppingCart) => {
    return shoppingCart.length > 0 ? shoppingCart.length : 0;
}

/***
 * Get Total Price of Product from Cart
 * @param shoppingCart
 * @param product
 * @returns {number}
 */
export const getCartProductTotalPrice = (shoppingCart, product) => {
    const cartProduct = shoppingCart.filter(item => item.id === product.id && (item.variations?.id === product.variations?.id));
    if (cartProduct.length > 0 && shoppingCart.length > 0) {
        return cartProduct[0].quantity * cartProduct[0].price;
    } else {
        return 0
    }
}

/***
 * Get Total Price of Products From Cart
 * @param shoppingCart
 * @returns {number}
 */
export const getCartTotalPrice = (shoppingCart) => {
    return shoppingCart.reduce((total, product) => total + product.price * product.quantity, 0);
}

/***
 * Get Product From Cart
 * @param shoppingCart
 * @param product
 * @param variations
 * @returns {*}
 */
export const getCartProduct = (shoppingCart, product, variations) => {
    return shoppingCart.find(item => (item.id === product.id) && (item.variations === variations));
}

/***
 * Get Product from Compare & Wishlist
 * @param products
 * @param product
 * @returns {*}
 */
export const getWishCompareProduct = (products, product) => {
    return products.find(item => item.id === product.id);
}

/****
 * Get Discounted Products
 * @param products
 * @param limit
 * @returns {*}
 */
export const getSaleProducts = (products, limit) => {
    const nonFilteredProducts = [...products];
    const filteredProducts = nonFilteredProducts?.map(({node: product}) => {
        return {
            node: {
                ...product,
                onSale: product?.variants?.edges?.some(({node: variant}) => {
                    return !!variant?.compareAtPriceV2;
                })
            }
        }
    }).filter(({node: product}) => product.onSale);
    return filteredProducts.slice(0, limit < 0 ? filteredProducts.length : limit ? limit : filteredProducts.length);
}

/***
 * Get Featured Products
 * @param products
 * @param limit
 * @returns {unknown[]}
 */

export const getFeaturedProducts = (products, limit = -1) => {
    const nonFilteredProducts = [...products];
    const filteredProducts = nonFilteredProducts?.map(({node: product}) => {
        return {
            node: {
                ...product,
                featured: product?.tags.some(tag => tag === "featured")
            }
        }
    })?.filter(({node: product}) => product.featured);

    return filteredProducts.slice(0, limit < 0 ? filteredProducts.length : limit ? limit : filteredProducts.length);
}

/***
 * Get Tending Products
 * @param products
 * @param limit
 * @returns {unknown[]}
 */

export const getTendingProducts = (products, limit = -1) => {
    const nonFilteredProducts = [...products];
    const filteredProducts = nonFilteredProducts?.map(({node: product}) => {
        return {
            node: {
                ...product,
                tending: product?.tags.some(tag => tag === "tending")
            }
        }
    })?.filter(({node: product}) => product.tending);

    return filteredProducts.slice(0, limit < 0 ? filteredProducts.length : limit ? limit : filteredProducts.length);
}

/***
 * Get Related Products
 * @param categories
 * @param tags
 * @param products
 * @param limit
 * @returns {*[]}
 */
export const getRelatedProducts = (categories, tags, products, limit) => {
    const identityMap = {};

    if (tags.length === 0 && categories.length === 0) {
        return [];
    }

    const getID = (product) => {
        return product.id;
    }

    const addToMap = (product) => {
        const id = getID(product);
        if (!(id in identityMap)) {
            identityMap[id] = {
                product: product,
                points: 0,
            };
        }
    }

    const addCategoriesPoints = (product, categories) => {
        const point = 2;
        const id = getID(product);
        const prodCat = product.collections?.edges?.map(({node}) => node?.handle);

        const compareToCat = categories.map(({node}) => node?.handle);
        prodCat.forEach((cat) => {
            if (compareToCat.includes(cat)) {
                identityMap[id].points += point;
            }
        });
    }

    const addTagsPoints = (product, tags) => {
        const point = 1;
        const id = getID(product);
        const prodTag = product.tags.map((tag) => tag);
        const compareToTag = tags.map((tag) => tag);
        prodTag.forEach((tag) => {
            if (compareToTag.includes(tag)) {
                identityMap[id].points += point;
            }
        });
    }

    const getIdentityMapAsArray = () => {
        return Object.keys(identityMap).map((id) => identityMap[id]);
    }

    for (const product of products) {
        addToMap(product?.node);
        if (categories.length) addCategoriesPoints(product?.node, categories);
        if (tags.length) addTagsPoints(product?.node, tags);
    }

    const arrayIdentityMap = getIdentityMapAsArray();
    const similarProducts = arrayIdentityMap.filter((arr) => arr.points);
    similarProducts.sort((a, b) => b.points - a.points).shift();

    return similarProducts.slice(0, limit).map(item => item.product);
}


/**
 * Get Product Stock Quantity
 * @param product
 * @param variations
 * @returns {number}
 */

export const getProductStock = (product, variations) => {
    let {variants} = product;
    variants = variants?.edges;

    return variants?.length > 1 ? variants?.find(({node}) => node?.id === variations?.id)?.node?.quantityAvailable : variants[0]?.node?.quantityAvailable;
}

/***
 * Get Discounted Price Percentage
 * @param price
 * @param compareArPrice
 * @returns {number}
 */

export const getDiscountPercentage = (price, compareArPrice) => {
    const difference = compareArPrice - price;

    return (100 * difference) / compareArPrice;
}