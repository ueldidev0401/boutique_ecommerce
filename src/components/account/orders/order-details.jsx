import { Container } from "@bootstrap";
import { formatDate } from "@utils/method";
import { CURRENCY } from "@utils/constant";
import { Td, Tr, Th, Thead, Tbody, Table } from "@bootstrap";
import { TableResponsive } from "@components/cart/listing/style";
import { OrdersTable } from "@components/account/orders/order.style";
import {
  OrderDetailsHeader,
  OrderDetailsContent,
  OrderSummaryDelivered,
  OrderDetailsContentItem,
  OrderSummaryDeliveredItem,
} from "./order.style";

const OrderDetails = ({ order, customer }) => {
  const {
    name,
    lineItems,
    totalTaxV2,
    processedAt,
    totalPriceV2,
    shippingAddress,
    financialStatus,
    totalShippingPriceV2,
  } = order;

  return (
    <Container>
      <OrderDetailsContent>
        <OrderDetailsHeader>
          <h2>Order ID: {name}</h2>
          <h6>{formatDate(processedAt)}</h6>
        </OrderDetailsHeader>
        <OrderDetailsContentItem className="p-0">
          <OrderSummaryDelivered>
            <OrderSummaryDeliveredItem>
              <h3>Ordered Summary</h3>
              <div className="summary">
                <p className="status">
                  <strong>Order Status</strong>:
                  <span
                    style={{
                      background:
                        financialStatus === "PAID" ? "#059669" : "#B91C1C",
                    }}
                  >
                    {financialStatus}
                  </span>
                </p>
                <p>
                  <strong>Total Product(s)</strong>:
                  <span>{lineItems?.edges?.length}</span>
                </p>
                <p>
                  <strong>Shipping Charge</strong>:
                  <span>{CURRENCY + totalShippingPriceV2?.amount}</span>
                </p>
                <p>
                  <strong>Tax</strong>:
                  <span>{CURRENCY + totalTaxV2?.amount}</span>
                </p>
                <p>
                  <strong>Total Amount</strong>:
                  <span>{CURRENCY + totalPriceV2?.amount}</span>
                </p>
              </div>
            </OrderSummaryDeliveredItem>

            <OrderSummaryDeliveredItem>
              <h3>Delivered To</h3>
              <address>
                <h4>{customer?.name}</h4>
                <p>
                  {`${shippingAddress?.address1}, ${shippingAddress?.address2}, ${shippingAddress?.city} - ${shippingAddress?.zip}`}
                </p>
                {customer?.phone && <p>Contact: {customer?.phone}</p>}
              </address>
            </OrderSummaryDeliveredItem>
          </OrderSummaryDelivered>
        </OrderDetailsContentItem>

        <OrderDetailsContentItem>
          <OrdersTable>
            <TableResponsive responsive={true}>
              <Table bordered>
                <Thead>
                  <Tr style={{ background: "#f5f5f5" }}>
                    <Th>#</Th>
                    <Th>Product</Th>
                    <Th>Quantity</Th>
                    <Th>Amount</Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {lineItems?.edges?.map(({ node: lineItem }, indx) => (
                    <Tr key={order?.title}>
                      <Td>{indx + 1}</Td>
                      <Td>{lineItem?.title}</Td>
                      <Td>{lineItem?.quantity}</Td>
                      <Td>{CURRENCY + lineItem?.originalTotalPrice?.amount}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableResponsive>
          </OrdersTable>
        </OrderDetailsContentItem>
      </OrderDetailsContent>
    </Container>
  );
};

export default OrderDetails;
