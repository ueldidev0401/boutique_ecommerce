import Link from "next/link";
import { useSelector } from "react-redux";
import { formatDate } from "@utils/method";
import { CURRENCY } from "@utils/constant";
import { AiOutlineEye } from "react-icons/ai";
import { Td, Tr, Th, Thead, Tbody, Table } from "@bootstrap";
import { TableResponsive } from "@components/cart/listing/style";
import { OrdersTable } from "@components/account/orders/order.style";
import { ButtonView, EmptyStatus } from "@components/account/account.style";

const OrdersList = () => {
  const customer = useSelector((state) => state.customer);
  const orders = customer?.orders?.edges;

  return orders.length > 0 ? (
    <OrdersTable>
      <TableResponsive responsive={true}>
        <Table bordered>
          <Thead>
            <Tr>
              <Th>Order No</Th>
              <Th>Order Date</Th>
              <Th>Order Status</Th>
              <Th>Payment Status</Th>
              <Th>Total</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>

          <Tbody>
            {orders?.map(({ node: order }) => (
              <Tr key={order?.id}>
                <Td>{order?.name}</Td>
                <Td>{formatDate(order?.processedAt)}</Td>
                <Td>{order?.fulfillmentStatus}</Td>
                <Td>{order?.financialStatus}</Td>
                <Td>{CURRENCY + order?.totalPriceV2?.amount}</Td>
                <Td>
                  <Link href={`/order/${order?.orderNumber}`} passHref>
                    <ButtonView>
                      <AiOutlineEye />
                    </ButtonView>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableResponsive>
    </OrdersTable>
  ) : (
    <EmptyStatus>You have no order!</EmptyStatus>
  );
};

export default OrdersList;
