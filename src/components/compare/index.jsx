import {useProduct} from "@hooks";
import cogoToast from "cogo-toast";
import PropTypes from 'prop-types';
import {excerpt} from "@utils/method";
import {BiTrash} from "react-icons/bi";
import {useDispatch} from "react-redux";
import {CURRENCY} from "@utils/constant";
import Image from "@components/ui/image";
import Button from "@components/ui/button";
import {getProductStock} from "@utils/product";
import {Container, Tbody, Tr, Td} from "@bootstrap";
import {addToCartAction} from "@global/actions/cartAction";
import {TableResponsive} from "@components/cart/listing/style";
import {removeCompareAction} from "@global/actions/compareAction";
import {
    CompareTable,
    CompareTitle,
    CompareProData,
    CompareProduct,
    CompareProDesc,
    CompareListWrap,
    CompareProTitle,
    CompareProDelete
} from "@components/compare/compare.style";

const CompareList = ({products}) => {
    const dispatch = useDispatch();

    const onAddToCart = (rest) => {
        dispatch(addToCartAction(rest));
        cogoToast.success(
            `${rest.title} is added to cart.`, {
                position: "top-right",
                heading: "Successfully Add!",
                hideAfter: 3
            }
        );
    }

    const onRemoveCompare = (product) => {
        dispatch(removeCompareAction(product));
        cogoToast.error(
            `${product?.title} remove from compare!.`, {
                position: "top-right",
                heading: "Successfully removed!",
                hideAfter: 3
            }
        );
    }

    return (
        <CompareListWrap>
            <Container>
                <TableResponsive responsive={true}>
                    <CompareTable>
                        <Tbody>
                            {/* Product Name & Thumb */}
                            <Tr>
                                <CompareTitle>Product</CompareTitle>
                                {products?.map(product => {
                                    return (
                                        <CompareProduct key={product?.id}>
                                            <CompareProDelete
                                                onClick={() => onRemoveCompare(product)}
                                            >
                                                <BiTrash/>
                                            </CompareProDelete>
                                            <Image
                                                width={250}
                                                height={250}
                                                alt={product?.title}
                                                src={product.images?.edges[0]?.node.originalSrc}
                                            />
                                            <CompareProTitle>
                                                {product?.title}
                                            </CompareProTitle>
                                        </CompareProduct>
                                    )
                                })}
                            </Tr>

                            {/* Product Description */}
                            <Tr>
                                <CompareTitle>Description</CompareTitle>
                                {products?.map(product => (
                                    <CompareProDesc>
                                        {excerpt(product.description, 20)}
                                    </CompareProDesc>
                                ))}
                            </Tr>

                            {/* Product Price */}
                            <Tr>
                                <CompareTitle>Price</CompareTitle>
                                {products?.map(product => (
                                    <CompareProData>
                                        {CURRENCY + product?.variants?.edges[0]?.node?.priceV2?.amount}
                                    </CompareProData>
                                ))}
                            </Tr>

                            {/*Product Variants */}
                            <Tr>
                                <CompareTitle>Variants</CompareTitle>
                                {products?.map(product => (
                                    <CompareProData>
                                        {product?.variants?.edges.length > 1 ? (
                                            product?.variants?.edges[0]?.node?.title
                                        ) : (
                                            "-"
                                        )}
                                    </CompareProData>
                                ))}
                            </Tr>

                            {/* Product Stock */}
                            <Tr>
                                <CompareTitle>Stock</CompareTitle>
                                {products?.map(product => {
                                    const variations = {
                                        id: product?.variants?.edges[0]?.node?.id,
                                        title: product?.variants?.edges[0]?.node?.title
                                    }
                                    const stock = getProductStock(product, variations);
                                    return (
                                        <CompareProData>
                                            <span style={{color: stock ? 'green' : 'red'}}>
                                                {stock ? "Available" : "Out of Stock"}
                                            </span>
                                        </CompareProData>
                                    )
                                })}
                            </Tr>

                            {/*Product Cart*/}
                            <Tr>
                                <CompareTitle>Add to Cart</CompareTitle>
                                {products?.map(product => {
                                    const variations = {
                                        id: product?.variants?.edges[0]?.node?.id,
                                        title: product?.variants?.edges[0]?.node?.title
                                    }
                                    const isStock = Boolean(getProductStock(product, variations));
                                    return (
                                        <CompareProData>
                                            <Button
                                                p={10}
                                                tag="button"
                                                bg="primary"
                                                color="white"
                                                fontSize={12}
                                                style={{
                                                    opacity: !isStock ? 0.5 : 1,
                                                    pointerEvents: !isStock ? "none" : "visible"
                                                }}
                                                onClick={() => onAddToCart({
                                                    ...product,
                                                    variations,
                                                    quantity: 1,
                                                    price: product?.variants?.edges[0]?.node?.priceV2?.amount
                                                })}
                                            >
                                                {isStock ? "Add to Cart" : "Out of Stock"}
                                            </Button>
                                        </CompareProData>
                                    )
                                })}
                            </Tr>
                        </Tbody>
                    </CompareTable>
                </TableResponsive>
            </Container>
        </CompareListWrap>
    );
};

CompareList.propTypes = {
    products: PropTypes.array.isRequired,
};


export default CompareList;
