import Cookies from "js-cookie";
import cogoToast from "cogo-toast";
import { decode } from "js-base64";
import { Col, Row } from "@bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { addressDelete, client } from "@graphql";
import { useDispatch, useSelector } from "react-redux";
import { EmptyStatus } from "@components/account/account.style";
import { saveCustomerData } from "@global/actions/customerAction";
import {
  AddressName,
  AddressItem,
  AddressActions,
  AddressListingWrap,
  AddressActionButton,
} from "./address.style";

const AddressList = () => {
  const dispatch = useDispatch();
  const customerData = useSelector((state) => state.customer);
  const addresses = customerData?.addresses?.edges;

  const onAddressDeleteHandler = (id) => {
    const token = decode(Cookies.get("access_token"));
    const variables = {
      id: id,
      customerAccessToken: token,
    };
    client(addressDelete(), variables).then((res) => {
      if (res?.customerAddressDelete?.customerUserErrors?.length === 0) {
        const updatedAddress = addresses.filter(
          ({ node: address }) => address?.id !== id
        );
        dispatch(
          saveCustomerData({
            ...customerData,
            addresses: {
              edges: updatedAddress,
            },
          })
        );
        cogoToast.error("Address Delete Successfully!", {
          position: "top-right",
        });
      }
    });
  };

  return addresses?.length ? (
    <AddressListingWrap>
      <Row style={{ marginTop: "-15px" }}>
        {addresses?.map(({ node: address }) => (
          <Col lg={6} key={address?.id}>
            <AddressItem>
              <div className="address">
                <AddressName>{address?.name}</AddressName>
                <address>
                  {`${address?.address1}, ${address?.address2}, ${address?.city} - ${address?.zip}`}
                </address>
              </div>

              <AddressActions>
                <AddressActionButton
                  bg="danger"
                  onClick={() => onAddressDeleteHandler(address?.id)}
                >
                  <AiOutlineDelete />
                </AddressActionButton>
              </AddressActions>
            </AddressItem>
          </Col>
        ))}
      </Row>
    </AddressListingWrap>
  ) : (
    <EmptyStatus>You have no saved address!</EmptyStatus>
  );
};

export default AddressList;
