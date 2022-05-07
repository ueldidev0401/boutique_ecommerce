import Head from "next/head";
import settings from "@data/settings";
import Layout from "@components/layout";
import Breadcrumb from "@components/ui/breadcrumb";
import ShopProductsFeed from "@components/shop";
// import {client, productsQuery} from "@graphql";

const ShopPage = ({products}) => {
    return (
        <Layout>
            <Head>
                <title>{"Products :: " + settings?.title}</title>
                <meta name="description" content={settings?.title}/>
            </Head>

            <Breadcrumb py={[40, 80]} mb={[60, null, 100]} pageTitle="Products"/>

            <ShopProductsFeed products={products}/>
        </Layout>
    );
};

export const getServerSideProps = async ({query}) => {
    // const {sort} = query;
    // const sortKey = sort?.split("-")[0].toUpperCase();
    // const reverse = sort?.split("-")[1] !== "ascending";
    // const productsData = await client(productsQuery(20, sortKey, reverse)),
    //     products = productsData?.products?.edges;

    return {
        props: {
            products: [],
        },
    };
};

export default ShopPage;
