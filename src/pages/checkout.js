import CustomCheckOutFirst from "@components/checkout/custom_checkout_first";
import Layout from "@components/layout";
import Head from "next/head";
import settings from "@data/settings.json";

const CheckOutScreen = () => {
    return (
        <Layout>
            <Head>
                <title>{settings?.title}</title>
                <meta name="description" content={settings?.description} />
            </Head>
            <CustomCheckOutFirst />
        </Layout>
    )
}

export default CheckOutScreen;