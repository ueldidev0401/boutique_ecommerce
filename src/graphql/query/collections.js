import {gql} from "graphql-request";

const collectionsQuery = (limit = 10) => {
    const queryArguments = `first: ${limit}`;

    return gql`
        {
            collections(${queryArguments}) {
                edges {
                    node {
                        id
                        title
                        handle
                        image {
                            id
                            originalSrc
                        }
                    }
                }
            }
        }
    `
}

export default collectionsQuery;