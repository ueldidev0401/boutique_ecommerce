import Head from "next/head";
import settings from "@data/settings";
import Layout from "@components/layout";
import {useSelector} from "react-redux";
import Wishlist from "@components/wishlist";
import EmptyProduct from "@components/ui/empty";
import Breadcrumb from "@components/ui/breadcrumb";

const WishlistPage = () => {
    const wishlist = useSelector(state => state.wishlist);

    return (
        <Layout>
            <Head>
                <title>{"Wishlist :: " + settings?.title}</title>
                <meta name="description" content={settings?.title}/>
            </Head>

            <Breadcrumb
                py={[40, 80]}
                mb={[60, null, 100]}
                pageTitle="Wishlist"
            />

            {wishlist.length > 0 && (
                <Wishlist/>
            )}

            {!wishlist.length > 0 && (
                <EmptyProduct
                    message="There are no products in your wishlist!"
                />
            )}
        </Layout>
    );
};

export default WishlistPage;
