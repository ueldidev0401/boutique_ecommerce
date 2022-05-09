import Layout from "@components/layout";
import Head from "next/head";
import settings from "@data/settings.json";
import SigninForm from "@components/auth/signin-form";

const CheckOutScreen = () => {
    return (
        <Layout>
            <div>
                <Head>
                    <title>{settings?.title}</title>
                    <meta name="description" content={settings?.description} />
                </Head>
                <SigninForm />
            </div>

        </Layout>
    )
}

export default CheckOutScreen;