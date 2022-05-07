import Head from "next/head";
import {Fragment} from "react";
import settings from "@data/settings";
import Layout from "@components/layout";
// import {client, blogQuery} from "@graphql";
import Loader from "@components/ui/loader";
import Breadcrumb from "@components/ui/breadcrumb";
import PostDetailsContent from "@components/blog/details";

const BlogDetailsPage = ({post}) => {
    return (
        <Layout>
            <Head>
                <title>{post?.title + ' :: ' + settings?.title}</title>
                <meta name="description" content={settings?.title}/>
            </Head>

            <Breadcrumb
                py={[60, 80]}
                mb={[60, null, 100]}
                pageTitle={post?.title}
            />

            {!post && <Loader/>}

            {post && (
                <Fragment>
                    <PostDetailsContent post={post}/>
                </Fragment>
            )}
        </Layout>
    );
};

export const getServerSideProps = async ({params}) => {
    const {slug} = params;
    // const postData = await client(blogQuery({slug}));
    const post = postData?.blogs?.edges[0]?.node?.articleByHandle;

    if (!post) {
        throw new Error(`Blog Post with slug '${slug}' not found!`);
    }

    return {
        props: {
            post
        }
    }
}

export default BlogDetailsPage;
