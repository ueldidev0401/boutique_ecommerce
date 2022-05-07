import Head from "next/head";
import settings from "@data/settings";
import Layout from "@components/layout";
import {useSelector} from "react-redux";
import CompareList from "@components/compare";
import EmptyProduct from "@components/ui/empty";
import Breadcrumb from "@components/ui/breadcrumb";

const ComparePage = () => {
    const compare = useSelector(state => state.compareList);

    return (
        <Layout>
            <Head>
                <title>{"Compare :: " + settings?.title}</title>
                <meta name="description" content={settings?.title}/>
            </Head>

            <Breadcrumb
                py={[40, 80]}
                mb={[60, null, 100]}
                pageTitle="Compare"
            />

            {compare.length > 0 ? (
                <CompareList products={compare}/>
            ) : (
                <EmptyProduct
                    message="There are no products in your compare list!"
                />
            )}
        </Layout>
    );
};

export default ComparePage;
