import {useSelector} from "react-redux";
import {CURRENCY} from "@utils/constant";
import Radio from "@components/ui/radio";
import Button from "@components/ui/button";
import {getCartProductTotalPrice, getCartTotalPrice} from "@utils/product";
import {
    OrderShipping,
    DetailsOrdered,
    PaymentMethods,
    OrderDetailsTop,
    OrderShippingItem,
    PaymentMethodItem,
    OrderDetailsMiddle,
    OrderDetailsTopItem,
    OrderDetailsMiddleItem,
} from "@components/checkout/order-details.style";

const OrderDetails = () => {
    const cart = useSelector(state => state.shoppingCart);

    return (
        <DetailsOrdered>
            <OrderDetailsTop>
                <OrderDetailsTopItem>Product</OrderDetailsTopItem>
                <OrderDetailsTopItem>Subtotal</OrderDetailsTopItem>
            </OrderDetailsTop>

            <OrderDetailsMiddle>
                {cart.length > 0 ? (
                    cart.map(product => (
                        <OrderDetailsMiddleItem key={product.cartId}>
                            <span>{`${product?.name} x ${product?.quantity}`}</span>
                            <span>{CURRENCY + Math.round(getCartProductTotalPrice(cart, product))}</span>
                        </OrderDetailsMiddleItem>
                    ))
                ):(
                    <h4>No products on Cart!</h4>
                )}
            </OrderDetailsMiddle>

            <OrderShipping>
                <OrderShippingItem>Shipping Charge</OrderShippingItem>
                <OrderShippingItem>$50</OrderShippingItem>
            </OrderShipping>

            <OrderShipping total={true} >
                <OrderShippingItem>Total</OrderShippingItem>
                <OrderShippingItem>
                    {CURRENCY + Math.round(getCartTotalPrice(cart) + 50)}
                </OrderShippingItem>
            </OrderShipping>

            <PaymentMethods>
                <PaymentMethodItem>
                    <Radio
                        name="payment"
                        id="dbt"
                        label="Direct Bank Transfer"
                    />
                </PaymentMethodItem>

                <PaymentMethodItem>
                    <Radio
                        name="payment"
                        id="cp"
                        label="Check Payments"
                    />
                </PaymentMethodItem>

                <PaymentMethodItem>
                    <Radio
                        name="payment"
                        id="cod"
                        label="Cash on Delivery"
                    />
                </PaymentMethodItem>
            </PaymentMethods>

            <Button
                tag="button"
                bg="primary"
                color="white"
                hvrBg="secondary"
                className="w-100 mt-4"
            >
                PLACE ORDER
            </Button>
        </DetailsOrdered>
    );
};

export default OrderDetails;
