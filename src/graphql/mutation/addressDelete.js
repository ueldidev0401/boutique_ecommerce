import { gql } from "graphql-request";

const addressDelete = () => {
  return gql`
    mutation customerAddressDelete($id: ID!, $customerAccessToken: String!) {
      customerAddressDelete(
        id: $id
        customerAccessToken: $customerAccessToken
      ) {
        deletedCustomerAddressId
        customerUserErrors {
          code
          field
          message
        }
      }
    }
  `;
};

export default addressDelete;
