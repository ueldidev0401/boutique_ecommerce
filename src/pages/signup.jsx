import Head from "next/head";
import settings from "@data/settings";
import Layout from "@components/layout";
import SignupForm from "@components/auth/signup-form";
import Breadcrumb from "@components/ui/breadcrumb";

const RegisterPage = () => {
    return (
        <Layout>
            <Head>
                <title>{"Signup :: " + settings?.title}</title>
                <meta name="description" content={settings?.title}/>
            </Head>

            <Breadcrumb
                py={[40, 80]}
                mb={[60, null, 100]}
                pageTitle="Create account"
            />

            <SignupForm/>
        </Layout>
    );
};

export default RegisterPage;
