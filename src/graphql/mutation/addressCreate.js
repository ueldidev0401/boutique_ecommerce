import { gql } from "graphql-request";

const addressCreate = () => {
  return gql`
    mutation customerAddressCreate(
      $customerAccessToken: String!
      $address: MailingAddressInput!
    ) {
      customerAddressCreate(
        customerAccessToken: $customerAccessToken
        address: $address
      ) {
        customerAddress {
          id
          name
          address1
          address2
          phone
          city
          company
          country
          zip
        }
        customerUserErrors {
          code
          field
          message
        }
      }
    }
  `;
};

export default addressCreate;
