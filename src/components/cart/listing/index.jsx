import {useState} from "react";
import {useRouter} from "next/router";
import {useIsLoggedIn} from "@hooks";
import {CURRENCY} from "@utils/constant";
import Button from "@components/ui/button";
import Coupon from "@components/cart/coupon";
import {createCheckout, client} from "@graphql";    
import {getCartTotalPrice} from "@utils/product";
import CartItem from "@components/cart/cart-product";
import {useDispatch, useSelector} from "react-redux";
import {clearCartAction} from "@global/actions/cartAction";
import {CartUpdateAction} from "@components/cart/cart.style";
import {Container, Thead, Tbody, Tr, Td, Col, Row} from "@bootstrap";
import {
    GrandPrice,
    TableHeading,
    CartListTable,
    TableResponsive,
    CartProductsList,
    CartCouponActions,
} from "@components/cart/listing/style";

const CartList = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const customer = useSelector((state) => state.customer);
    const cart = useSelector((state) => state.shoppingCart);
    const totalProductsPrice = getCartTotalPrice(cart);

    const [isLoading, setIsLoading] = useState(false);
    const isLoggedIn = useIsLoggedIn();

    const onCheckoutHandler = () => {
        const variables = {
            input: {
                lineItems: cart?.map((item) => {
                    return {
                        quantity: item?.quantity,
                        variantId: item?.variations?.id,
                    };
                }),
                email: customer?.email,
            },
        };
        setIsLoading(true);
        if (isLoggedIn) {
            client(createCheckout(), variables).then((res) => {
                setIsLoading(false);
                if (res?.checkoutCreate?.checkout) {
                    window.open(res?.checkoutCreate?.checkout?.webUrl, "_blank");
                }
                dispatch(clearCartAction());
            });
        } else {
            router.push("/signin");
        }
    };

    return (
        <CartProductsList {...props}>
            <Container>
                <TableResponsive responsive={true}>
                    <CartListTable>
                        <Thead>
                            <Tr>
                                <TableHeading>Image</TableHeading>
                                <TableHeading>Product Name</TableHeading>
                                <TableHeading>Until Price</TableHeading>
                                <TableHeading>Qty</TableHeading>
                                <TableHeading>Subtotal</TableHeading>
                                <TableHeading>Action</TableHeading>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {cart.map((product) => (
                                <CartItem product={product} key={product?.cartId}/>
                            ))}
                            <Tr>
                                <Td colSpan={6}>
                                    <GrandPrice>
                                        Grand Total:{" "}
                                        <span>{CURRENCY + totalProductsPrice.toFixed(2)}</span>
                                    </GrandPrice>
                                </Td>
                            </Tr>
                        </Tbody>
                    </CartListTable>
                </TableResponsive>

                <CartCouponActions mt={20}>
                    <Row className="align-items-lg-center">
                        <Col lg={6}>
                            <Coupon/>
                        </Col>

                        <Col lg={6}>
                            <CartUpdateAction mt={[20, null, null, 0]}>
                                <Button
                                    tag="button"
                                    bg="primary"
                                    color="white"
                                    fontSize={13}
                                    hvrBg="secondary"
                                    borderRadius="sm"
                                    onClick={() => dispatch(clearCartAction())}
                                >
                                    CLEAR CART
                                </Button>

                                <Button
                                    tag="button"
                                    bg="secondary"
                                    fontSize={13}
                                    color="white"
                                    hvrBg="primary"
                                    hvrColor="white"
                                    borderRadius="sm"
                                    loading={isLoading}
                                    onClick={() => onCheckoutHandler()}
                                    className="btn-checkout mt-3 mt-sm-0"
                                >
                                    PROCEED TO CHECKOUT
                                </Button>
                            </CartUpdateAction>
                        </Col>
                    </Row>
                </CartCouponActions>
            </Container>
        </CartProductsList>
    );
};

export default CartList;
