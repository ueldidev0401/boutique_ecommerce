import Head from "next/head";
import settings from "@data/settings";
import Layout from "@components/layout";
import {useSelector} from "react-redux";
import CartList from "@components/cart/listing";
import EmptyProduct from "@components/ui/empty";
import Breadcrumb from "@components/ui/breadcrumb";

const CartPage = () => {
    const cart = useSelector(state => state.shoppingCart);

    return (
        <Layout>
            <Head>
                <title>{"Shopping Cart :: " + settings?.title}</title>
                <meta name="description" content={settings?.title}/>
            </Head>

            <Breadcrumb
                py={[40, 80]}
                mb={[60, null, 100]}
                pageTitle="Cart"
            />

            {cart.length > 0 && (
                <CartList/>
            )}

            {!cart.length > 0 && (
                <EmptyProduct
                    message="There are no products in your cart!"
                />
            )}
        </Layout>
    );
};

export default CartPage;
