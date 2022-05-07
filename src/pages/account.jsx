import Head from "next/head";
import {useEffect} from "react";
import {decode} from "js-base64";
import settings from "@data/settings";
import Layout from "@components/layout";
import {useDispatch} from "react-redux";
// import {client, customerQuery} from "@graphql";
import Breadcrumb from "@components/ui/breadcrumb";
import {getCookieFromContext} from "@utils/method";
import AccountPageContent from "@components/account";
import {saveCustomerData} from "@global/actions/customerAction";

const AccountPage = ({data}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(saveCustomerData(data));
    }, [data]);

    return (
        <Layout>
            <Head>
                <title>{`${data?.displayName} :: ` + settings?.title}</title>
                <meta name="description" content={settings?.description}/>
            </Head>

            <Breadcrumb py={[40, 80]} mb={[60, null, 100]} pageTitle="Dashboard"/>

            <AccountPageContent/>
        </Layout>
    );
};

export const getServerSideProps = async (context) => {
    const cookie = getCookieFromContext(context?.req?.headers?.cookie);
    const token = cookie?.access_token;
    let data = {};

    if (!token) {
        return {
            redirect: {
                destination: "/signin",
                permanent: false,
            },
        };
    } else {
        // data = await client(customerQuery(decode(token)));
    }

    return {
        props: {
            data: data?.customer,
        },
    };
};

export default AccountPage;
