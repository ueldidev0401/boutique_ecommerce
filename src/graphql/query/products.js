import {gql} from "graphql-request";

const productsQuery = (limit = 200, sortKey, reverse, search) => {
    let queryArguments = `first: ${limit}`;

    if (sortKey) {
        queryArguments = `${queryArguments}, sortKey: ${sortKey}, reverse: ${reverse}`;
    }

    if (search) {
        queryArguments = `${queryArguments}, query: "title:${search.trim()}*"`;
    }

    return gql`
        {
            products(${queryArguments}) {
            pageInfo {
                hasNextPage
                hasPreviousPage
            }
            edges {
                cursor
                node {
                    id
                    title
                    handle
                    description
                    options(first: 100) {
                        id
                        name
                        values
                    }
                    images(first: 100) {
                        edges {
                            node {
                                id
                                originalSrc
                            }
                        }
                    }
                    variants(first: 100) {
                        edges {
                            node {
                                id
                                sku
                                title
                                quantityAvailable
                                compareAtPriceV2 {
                                    amount
                                }
                                priceV2 {
                                    amount
                                }
                                selectedOptions {
                                    name
                                    value
                                }
                            }
                        }
                    }
                    tags
                    collections(first:100){
                        edges{
                            node{
                                id,
                                handle
                            }
                        }
                    }
                }
            }
        }
        }
    `;
};

export default productsQuery;
