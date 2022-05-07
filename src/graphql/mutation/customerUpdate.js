import { gql } from "graphql-request";

const customerUpdate = () => {
  return gql`
    mutation customerUpdate(
      $customerAccessToken: String!
      $customer: CustomerUpdateInput!
    ) {
      customerUpdate(
        customerAccessToken: $customerAccessToken
        customer: $customer
      ) {
        customer {
          id
          firstName
          lastName
          displayName
          email
          phone
          addresses(first: 10) {
            edges {
              node {
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
            }
          }
          orders(first: 100) {
            edges {
              node {
                id
                name
                orderNumber
                processedAt
                cancelReason
                currentSubtotalPrice {
                  amount
                }
                currentTotalPrice {
                  amount
                }
                totalPriceV2 {
                  amount
                }
                totalShippingPriceV2 {
                  amount
                }
                totalTaxV2 {
                  amount
                }
                financialStatus
                fulfillmentStatus
                statusUrl
                shippingAddress {
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
                lineItems(first: 100) {
                  edges {
                    node {
                      title
                      quantity
                      originalTotalPrice {
                        amount
                      }
                    }
                  }
                }
              }
            }
          }
        }
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
  `;
};

export default customerUpdate;
