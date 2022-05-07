import Head from "next/head";
import Layout from "@components/layout";
import settings from "@data/settings.json";
import LatestBlog from "@components/blog/posts";
import Promotions from "@components/promotions";
import Categories from "@components/categories";
import sliderData from "@data/slider/home-2.json";
import {ProductsTab} from "@components/product/feed";
import {SliderTwo as Slider} from "@components/slider";
// import {client, blogsQuery, productsQuery, collectionsQuery} from "@graphql";

const HomeTwo = ({blogs, products, collections}) => {
    return (
        <Layout bg="gray250">
            <Head>
                <title>{"Home 2 :: " + settings?.title}</title>
                <meta name="description" content={settings?.description}/>
            </Head>

            <Slider
                animate={true}
                data={sliderData}
                settings={{effect: "fade", speed: 1000}}
            />

            <Categories categories={collections}/>

            <ProductsTab products={products} limit={8}/>

            <Promotions fluid={true}/>

            <LatestBlog posts={blogs} pt={[60, 60, 100]}/>
        </Layout>
    );
};

export const getStaticProps = async () => {
    // const blogsData = await client(blogsQuery(4)),
    //     blogs = blogsData?.blogs?.edges[0]?.node?.articles?.edges,
    //     productsData = await client(productsQuery(50)),
    //     products = productsData?.products?.edges,
    //     collectionsData = await client(collectionsQuery(5)),
    //     collections = collectionsData?.collections?.edges;

    return {
        props: {
            blogs: [],
            products: [],
            collections: [],
        },
        revalidate: 60,
    };
};

export default HomeTwo;
