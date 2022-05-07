import cn from "classnames";
import { useState } from "react";
import PropTypes from "prop-types";
import Loader from "@components/ui/loader";
import EmptyProduct from "@components/ui/empty";
import ProductCard from "@components/product/card";
import SectionTitle from "@components/ui/section-title";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Col, Container, Row } from "@bootstrap-styled/v4";
import {
  ProductNav,
  LargeFontWeight,
  CommonFontWeight,
  CustomInput,
  TextAreaCustom,
  CustomButton,
} from "@components/product/feed/style";
import {
  getFeaturedProducts,
  getSaleProducts,
  getTendingProducts,
} from "@utils/product";
import { useRouter } from "next/router";
import facebook from "../../../assets/image/body/section2/facebook.png";
import phone from "../../../assets/image/body/section2/phone.png";
import circle from "../../../assets/image/body/section2/circle.png";

const productNav = [
  {
    key: "shop",
    title: "SHOP",
  },
  {
    key: "about",
    title: "ABOUT US",
  },
  {
    key: "contact",
    title: "CONTACT",
  },
];

const ProductsTab = ({ products, limit = 8, className }) => {
  const router = useRouter();
  const [data, setData] = useState(products);
  const [flag, setFlag] = useState(0);
  const onHandler = (event) => {
    const target = event.target;
    const key = target.dataset.key;
    switch (key) {
      case "shop":
        setData(getSaleProducts(products));
        setFlag(0);
        break;
      case "about":
        setData(getFeaturedProducts(products));
        setFlag(1);
        break;
      case "contact":
        setData(getTendingProducts(products));
        setFlag(2);
        break;
      default:
        setData(products);
    }
  };

  return (
    <div className={cn(className)}>
      <Container fluid>
        {!data && <Loader />}
        {data && (
          <Tabs>
            <ProductNav
              mb={[30, null, 55]}
              align="center"
              style={{ marginBottom: 0 }}
            >
              <TabList>
                {productNav.map((item) => (
                  <Tab
                    key={item?.key}
                    data-key={item?.key}
                    onClick={(event) => onHandler(event)}
                  >
                    {item?.title}
                  </Tab>
                ))}
              </TabList>
            </ProductNav>
            <hr style={{ width: "80%" }}></hr>
          </Tabs>
        )}

        <Row>
          <Col md={1} lg={1}></Col>
          <Col md={10} lg={10}>
            {flag == 0 ? (
              <div>hi</div>
            ) : flag == 1 ? (
              <div style={{ marginTop: "48px" }}>
                <Row>
                  <Col md={12} sm={12}>
                    <div>
                      <LargeFontWeight style={{ fontSize: "40px" }}>
                        Who we are?
                      </LargeFontWeight>
                      <CommonFontWeight style={{ fontSize: "22px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas finibus mi nec orci luctus, eu congue neque
                        venenatis. Nunc tincidunt viverra mi elementum eleifend.
                        Nunc fringilla felis lectus. Nunc feugiat ipsum id
                        vestibulum rhoncus. Pellentesque at elementum lectus.
                        Donec pulvinar justo non mi vehicula hendrerit.
                        Phasellus blandit nunc vel felis cursus fermentum. Donec
                        mattis sollicitudin commodo. Sed tellus leo, dignissim a
                        diam et, fringilla tincidunt mauris. Vivamus quam
                        tellus, maximus sit amet enim sed, porttitor bibendum
                        lorem. Phasellus faucibus quam sit amet massa tincidunt
                        faucibus.
                      </CommonFontWeight>
                      <br></br>
                      <CommonFontWeight style={{ fontSize: "22px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas finibus mi nec orci luctus, eu congue neque
                        venenatis. Nunc tincidunt viverra mi elementum eleifend.
                        Nunc fringilla felis lectus. Nunc feugiat ipsum id
                        vestibulum rhoncus. Pellentesque at elementum lectus.
                        Donec pulvinar justo non mi vehicula hendrerit.
                        Phasellus blandit nunc vel felis cursus fermentum.
                      </CommonFontWeight>
                      <br></br>
                      <LargeFontWeight style={{ fontSize: "40px" }}>
                        What We do ?
                      </LargeFontWeight>
                      <CommonFontWeight style={{ fontSize: "22px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas finibus mi nec orci luctus, eu congue neque
                        venenatis. Nunc tincidunt viverra mi elementum eleifend.
                        Nunc fringilla felis lectus. Nunc feugiat ipsum id
                        vestibulum rhoncus. Pellentesque at elementum lectus.
                        Donec pulvinar justo non mi vehicula hendrerit.
                        Phasellus blandit nunc vel felis cursus fermentum. Donec
                        mattis sollicitudin commodo. Sed tellus leo, dignissim a
                        diam et, fringilla tincidunt mauris. Vivamus quam
                        tellus, maximus sit amet enim sed, porttitor bibendum
                        lorem. Phasellus faucibus quam sit amet massa tincidunt
                        faucibus.
                      </CommonFontWeight>
                      <br></br>
                    </div>
                  </Col>
                </Row>
              </div>
            ) : (
              <div style={{ marginTop: "48px" }}>
                <Row>
                  <Col md={5} sm={5}>
                    <div>
                      <LargeFontWeight>
                        Address :{" "}
                        <CommonFontWeight style={{ marginLeft: "10px" }}>
                          {" "}
                          Address Line One
                        </CommonFontWeight>
                      </LargeFontWeight>
                      <CommonFontWeight style={{ marginLeft: "87px" }}>
                        {" "}
                        Address Line Two
                      </CommonFontWeight>
                      <br></br>
                      <CommonFontWeight style={{ marginLeft: "87px" }}>
                        {" "}
                        Address Line Three
                      </CommonFontWeight>
                    </div>
                    <br></br>
                    <div>
                      <LargeFontWeight>
                        Email :{" "}
                        <CommonFontWeight style={{ marginLeft: "30px" }}>
                          {" "}
                          johndoe@xyz.com
                        </CommonFontWeight>
                      </LargeFontWeight>
                    </div>
                    <br></br>
                    <div>
                      <LargeFontWeight>
                        Phone :{" "}
                        <CommonFontWeight style={{ marginLeft: "25px" }}>
                          {" "}
                          +01 123 67 390 12
                        </CommonFontWeight>
                        <br></br>
                        <CommonFontWeight style={{ marginLeft: "87px" }}>
                          {" "}
                          +01 123 67 390 12
                        </CommonFontWeight>
                      </LargeFontWeight>

                      <br></br>
                      <br></br>
                      <LargeFontWeight>Office Hours:</LargeFontWeight>
                      <br></br>
                      <CommonFontWeight>
                        Monday - Friday : 9.00 to 20
                      </CommonFontWeight>
                      <br></br>
                      <br></br>
                      <CommonFontWeight>
                        Saturday : 8.00 to 14.00
                      </CommonFontWeight>
                      <br></br>

                      <br></br>
                      <br></br>
                      <CommonFontWeight>Sunday closed</CommonFontWeight>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <LargeFontWeight>Social Media:</LargeFontWeight>
                      {/* <br></br> */}
                      <div style={{ display: "flex" }}>
                        <img
                          src={facebook.src}
                          style={{ padding: "40px 40px 0px 0px" }}
                        ></img>
                        <img
                          src={circle.src}
                          style={{ padding: "40px 40px 0px 0px" }}
                        ></img>
                        <img
                          src={phone.src}
                          style={{ padding: "40px 40px 0px 0px" }}
                        ></img>
                      </div>
                    </div>
                  </Col>
                  <Col md={7} sm={4}>
                    <LargeFontWeight>WRITE TO US</LargeFontWeight>
                    <br></br>
                    <br></br>
                    <CustomInput
                      type="text"
                      placeholder="Fisrt Name"
                    ></CustomInput>
                    <CustomInput
                      type="text"
                      placeholder="Last Name"
                    ></CustomInput>
                    <CustomInput type="text" placeholder="Email"></CustomInput>
                    <CommonFontWeight>Message</CommonFontWeight>
                    <TextAreaCustom></TextAreaCustom>
                    <CustomButton>Send</CustomButton>
                  </Col>
                </Row>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

ProductsTab.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsTab;
