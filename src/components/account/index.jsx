import Link from "next/link";
import { useSelector } from "react-redux";
import OrdersList from "@components/account/orders";
import { Li, Row, Col, Container } from "@bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CustomerAddress from "@components/account/address";
import {
  AccountNav,
  TabContentTitle,
  TabContentHeader,
  AccountTabContent,
  AccountContentWrap,
} from "./account.style";
import {
  AiOutlineIdcard,
  AiOutlineLogout,
  AiOutlineSetting,
  AiOutlineShopping,
  AiOutlineDashboard,
} from "react-icons/ai";
import SettingsContent from "./settings";

const AccountPageContent = (props) => {
  const customer = useSelector((state) => state.customer);

  return (
    <AccountContentWrap {...props}>
      <Container>
        <Tabs>
          <Row>
            <Col md={4} lg={3}>
              <AccountNav>
                <TabList>
                  <Tab>
                    <AiOutlineDashboard /> Dashboard
                  </Tab>
                  <Tab>
                    <AiOutlineShopping /> Orders
                  </Tab>
                  <Tab>
                    <AiOutlineIdcard /> Address
                  </Tab>
                  <Tab>
                    <AiOutlineSetting /> Settings
                  </Tab>
                  <Li>
                    <AiOutlineLogout />
                    <Link href="/logout">Logout</Link>
                  </Li>
                </TabList>
              </AccountNav>
            </Col>

            <Col md={8} lg={9}>
              <TabPanel>
                <AccountTabContent>
                  <TabContentHeader>
                    <TabContentTitle>Dashboard</TabContentTitle>
                  </TabContentHeader>

                  <p>
                    Hello, <strong>{customer?.displayName}. </strong>
                    (If Not <strong>{customer?.firstName}!</strong>
                    <Link href="/logout"> Logout</Link>)
                  </p>
                  <p>
                    From your account dashboard. you can easily check & view
                    your recent orders, manage your shipping and billing
                    addresses and edit your password and account details.
                  </p>
                </AccountTabContent>
              </TabPanel>

              <TabPanel>
                <AccountTabContent>
                  <TabContentHeader>
                    <TabContentTitle>Orders</TabContentTitle>
                  </TabContentHeader>
                  <OrdersList />
                </AccountTabContent>
              </TabPanel>

              <TabPanel>
                <AccountTabContent>
                  <CustomerAddress />
                </AccountTabContent>
              </TabPanel>

              <TabPanel>
                <AccountTabContent>
                  <TabContentHeader>
                    <TabContentTitle>Settings</TabContentTitle>
                  </TabContentHeader>
                  <SettingsContent />
                </AccountTabContent>
              </TabPanel>
            </Col>
          </Row>
        </Tabs>
      </Container>
    </AccountContentWrap>
  );
};

export default AccountPageContent;
