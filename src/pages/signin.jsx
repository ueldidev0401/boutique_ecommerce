import Head from "next/head";
import settings from "@data/settings";
import Layout from "@components/layout";
import Breadcrumb from "@components/ui/breadcrumb";
import SigninForm from "@components/auth/signin-form";

const SigninPage = () => {
    return (
        <Layout>
            <Head>
                <title>{"Login :: " + settings?.title}</title>
                <meta name="description" content={settings?.title}/>
            </Head>

            <Breadcrumb
                py={[40, 80]}
                mb={[60, null, 100]}
                pageTitle="Login"
            />

            <SigninForm/>
        </Layout>
    );
};

export default SigninPage;
