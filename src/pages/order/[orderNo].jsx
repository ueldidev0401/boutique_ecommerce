import Head from "next/head";
import {decode} from "js-base64";
import settings from "@data/settings";
import Layout from "@components/layout";
// import {client, customerQuery} from "@graphql";
import {getCookieFromContext} from "@utils/method";
import OrderDetails from "@components/account/orders/order-details";

const OrderDetailsPage = ({order, customer}) => {
    return (
        <Layout>
            <Head>
                <title>{`Order Details ${order?.name} :: ` + settings?.title}</title>
                <meta name="description" content={settings?.description}/>
            </Head>

            <OrderDetails order={order} customer={customer}/>
        </Layout>
    );
};

export const getServerSideProps = async ({req, params}) => {
    const {orderNo} = params;
    const cookie = getCookieFromContext(req?.headers?.cookie);
    const token = cookie?.access_token;

    let data = {};

    if (!token) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    } else {
        data = await client(customerQuery(decode(token)));
    }

    const orders = data?.customer?.orders?.edges;
    const order = orders?.find(
        ({node}) => node?.orderNumber === parseInt(orderNo, 10)
    );
    const customer = {
        name: data?.customer?.displayName,
        phone: data?.customer?.phone,
    };

    return {
        props: {
            order: order?.node,
            customer,
        },
    };
};

export default OrderDetailsPage;
