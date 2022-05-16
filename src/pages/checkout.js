import CustomCheckOutFirst from "@components/checkout/custom_checkout_first";
import Layout from "@components/layout";
import Head from "next/head";
import settings from "@data/settings.json";

const CheckOutScreen = () => {
    return (
        <Layout>
            <div style={{ position: 'relative', width: '100%', height: '1044px' }}>
                <Head>
                    <title>{settings?.title}</title>
                    <meta name="description" content={settings?.description} />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Saira:wght@100&display=swap" rel="stylesheet" />
                </Head>
                <CustomCheckOutFirst />
            </div>
        </Layout>
    )
}

export default CheckOutScreen;