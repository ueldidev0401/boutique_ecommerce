import {gql} from "graphql-request";

const blogsQuery = (limit = 3) => {
    const queryArguments = `first: ${limit}`;

    return gql`
        {
            blogs(first: 10) {
                edges {
                    node {
                        articles(${queryArguments}) {
                            edges {
                                node {
                                    id
                                    handle
                                    title
                                    tags
                                    excerpt
                                    publishedAt
                                    authorV2 {
                                        name
                                    }
                                    image {
                                        originalSrc
                                    }
                                    contentHtml
                                }
                            }
                        }
                    }
                }
            }
        }
    `
}

export default blogsQuery;