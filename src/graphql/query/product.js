import {gql} from "graphql-request";

const productQuery = (slug) => {
    const queryArguments = `handle: "${slug}"`;

    return gql`
        {
            productByHandle(${queryArguments}) {
                id
                title
                handle
                description
                descriptionHtml
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
    `
}

export default productQuery;