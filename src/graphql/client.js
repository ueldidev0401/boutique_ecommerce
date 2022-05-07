import {GraphQLClient} from 'graphql-request';

const client = async (query, variables) => {
    const endpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_NAME}.myshopify.com/api/2021-07/graphql.json`;
console.log('endpoint = ', endpoint);
    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN
        }
    });

    return await graphQLClient.request(query, variables);
}

export default client;