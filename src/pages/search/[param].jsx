import Head from "next/head";
import settings from "@data/settings";
import Layout from "@components/layout";
// import {client, productsQuery} from "@graphql";
import ShopProductsFeed from "@components/shop";
import EmptyProduct from "@components/ui/empty";
import Breadcrumb from "@components/ui/breadcrumb";

const SearchPage = ({products}) => {
    return (
        <Layout>
            <Head>
                <title>{"Search: " + products?.length + " Products found " + settings?.title}</title>
                <meta name="description" content={settings?.title}/>
            </Head>

            <Breadcrumb
                py={[40, 80]}
                mb={[60, null, 100]}
                pageTitle="Search"
            />

            {products?.length ? (
                <ShopProductsFeed products={products}/>
            ) : (
                <EmptyProduct/>
            )}
        </Layout>
    );
};

export const getServerSideProps = async ({params, query}) => {
    const {param} = params;
    const {sort} = query;
    const sortKey = sort?.split("-")[0].toUpperCase();
    const reverse = sort?.split("-")[1] !== "ascending";
    const products = [];
    // const products = await client(productsQuery(20, sortKey, reverse, param));

    return {
        props: {
            products: products?.products?.edges
        }
    };
};

export default SearchPage;
