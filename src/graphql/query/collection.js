import { gql } from "graphql-request";

const collectionQuery = (handle, sortKey, reverse, limit = 100) => {
  const queryArguments = `handle: "${handle}"`;
  let queryProductArguments = `first: ${limit}`;

  if (sortKey) {
    queryProductArguments = `first: ${limit}, sortKey: ${sortKey}, reverse: ${reverse}`;
  }

  return gql`
        {
            collectionByHandle(${queryArguments}) {
                id
                title
                handle
                image {
                    originalSrc
                }
                products(${queryProductArguments}) {
                    edges {
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
                            collections(first: 100) {
                                edges {
                                    node {
                                        id
                                        handle
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `;
};

export default collectionQuery;
