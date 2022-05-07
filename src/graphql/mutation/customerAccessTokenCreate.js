import {gql} from "graphql-request";

const customerAccessTokenCreate = () => {
    return gql`
        mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
            customerAccessTokenCreate(input: $input) {
                customerAccessToken {
                    accessToken
                    expiresAt
                }
                customerUserErrors {
                    code
                    field
                    message
                }
            }
        }
    `
}

export default customerAccessTokenCreate;