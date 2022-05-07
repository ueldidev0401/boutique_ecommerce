import Cookies from "js-cookie";
import { useState } from "react";
import { decode } from "js-base64";
import cogoToast from "cogo-toast";
import Input from "@components/ui/input";
import Button from "@components/ui/button";
import { Col, Row, Form } from "@bootstrap";
import { addressCreate, client } from "@graphql";
import { useSelector, useDispatch } from "react-redux";
import { saveCustomerData } from "@global/actions/customerAction";
import { InputField } from "@components/checkout/checkout-form.style";
import { AddressFormWrap, FormTitle, AddressFormAction } from "./address.style";

const defaultValue = {
  zip: "",
  city: "",
  country: "",
  address2: "",
  address1: "",
  lastName: "",
  firstName: "",
};

const AddressForm = ({ onCloseHandler }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [formValue, setFormValue] = useState(defaultValue);
  const customer = useSelector((state) => state.customer);

  const onChangeHandler = (event) => {
    const target = event.target;
    setFormValue((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    const input = {
      customerAccessToken: decode(Cookies.get("access_token")),
      address: formValue,
    };
    setIsLoading(true);
    client(addressCreate(), input).then((res) => {
      if (res?.customerAddressCreate?.customerUserErrors?.length === 0) {
        const createdAddress = res?.customerAddressCreate?.customerAddress;
        const updatedCustomer = {
          ...customer,
          addresses: {
            edges: [
              ...customer.addresses.edges,
              {
                node: createdAddress,
              },
            ],
          },
        };
        dispatch(saveCustomerData(updatedCustomer));
        cogoToast.success("Address added Successfully!", {
          position: "top-right",
        });
      }
      setIsLoading(false);
      onCloseHandler();
      event.target.reset();
    });
  };

  return (
    <AddressFormWrap>
      <FormTitle>Add new Address</FormTitle>

      <Form onSubmit={onFormSubmitHandler}>
        <Row>
          <Col md={6}>
            <InputField>
              <Input
                required
                id="name"
                type="text"
                name="firstName"
                label="First Name"
                onChange={onChangeHandler}
              />
            </InputField>
          </Col>

          <Col md={6}>
            <InputField>
              <Input
                required
                id="name"
                type="text"
                name="lastName"
                label="Last Name"
                onChange={onChangeHandler}
              />
            </InputField>
          </Col>
        </Row>

        <InputField>
          <Input
            required
            type="text"
            id="address"
            name="address1"
            label="Address"
            onChange={onChangeHandler}
          />
        </InputField>

        <InputField>
          <Input
            required
            type="text"
            id="address2"
            name="address2"
            onChange={onChangeHandler}
            label="Apartment, suite, etc."
          />
        </InputField>

        <InputField>
          <Input
            required
            id="city"
            type="text"
            name="city"
            label="City"
            onChange={onChangeHandler}
          />
        </InputField>

        <Row>
          <Col md={6}>
            <InputField>
              <Input
                required
                type="text"
                id="country"
                name="country"
                label="Country"
                onChange={onChangeHandler}
              />
            </InputField>
          </Col>

          <Col md={6}>
            <InputField>
              <Input
                required
                id="zip"
                name="zip"
                type="text"
                label="Postal code"
                onChange={onChangeHandler}
              />
            </InputField>
          </Col>
        </Row>

        <AddressFormAction className="mt-2 mt-sm-0">
          <Button
            tag="button"
            hvrBg="danger"
            color="danger"
            hvrColor="white"
            borderRadius="sm"
            borderWidth="1px"
            fontSize="standard"
            borderStyle="solid"
            borderColor="danger"
            px={[null, null, 45]}
            onClick={(e) => {
              e.preventDefault();
              onCloseHandler();
            }}
          >
            Cancel
          </Button>

          <Button
            px={[null, null, 45]}
            tag="button"
            type="submit"
            bg="primary"
            color="white"
            hvrBg="secondary"
            hvrColor="white"
            borderRadius="sm"
            fontSize="standard"
            loading={isLoading}
          >
            Save
          </Button>
        </AddressFormAction>
      </Form>
    </AddressFormWrap>
  );
};

export default AddressForm;
