import { gql } from "graphql-request";

const customerCreate = () => {
  return gql`
    mutation customerCreate($input: CustomerCreateInput!) {
      customerCreate(input: $input) {
        customer {
          id
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

export default customerCreate;
