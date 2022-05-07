import { gql } from "graphql-request";

const createCheckout = () => {
  return gql`
    mutation checkoutCreate($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout {
          id
          webUrl
          email
        }
        checkoutUserErrors {
          code
          field
          message
        }
      }
    }
  `;
};

export default createCheckout;
