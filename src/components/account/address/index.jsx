import { useState } from "react";
import Button from "@components/ui/button";
import OffCanvas from "@components/ui/offCanvas";
import AddressForm from "@components/account/address/address-form";
import AddressList from "@components/account/address/address-list";
import {
  TabContentTitle,
  TabContentHeader,
} from "@components/account/account.style";

const CustomerAddress = () => {
  const [addressFormShow, setAddressFormShow] = useState(false);

  const onAddressFormHandler = () =>
    setAddressFormShow((prevState) => !prevState);

  return (
    <div>
      <TabContentHeader>
        <TabContentTitle>Address</TabContentTitle>
        <Button
          tag="button"
          hvrBg="primary"
          color="primary"
          hvrColor="white"
          borderRadius="sm"
          borderWidth="1px"
          fontSize="standard"
          borderStyle="solid"
          borderColor="primary"
          onClick={onAddressFormHandler}
        >
          Add
        </Button>
      </TabContentHeader>
      <AddressList />

      <OffCanvas
        maxWidth={600}
        position="center"
        open={addressFormShow}
        onHandler={onAddressFormHandler}
      >
        <AddressForm onCloseHandler={onAddressFormHandler} />
      </OffCanvas>
    </div>
  );
};

export default CustomerAddress;
