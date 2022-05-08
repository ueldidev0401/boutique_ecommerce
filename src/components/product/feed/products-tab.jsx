import cn from "classnames";
import { useState } from "react";
import PropTypes from "prop-types";
import Loader from "@components/ui/loader";
import EmptyProduct from "@components/ui/empty";
import ProductCard from "@components/product/card";
import SectionTitle from "@components/ui/section-title";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Col, Container, Row } from "@bootstrap-styled/v4";
import SigninForm from "@components/auth/signin-form";

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

import Head from "next/head";
import Layout from "@components/layout";
import settings from "@data/settings.json";
import LatestBlog from "@components/blog/posts";
import Promotions from "@components/promotions";
import Categories from "@components/categories";
import sliderData from "@data/slider/home-1.json";
import { SliderOne as Slider } from "@components/slider";
import slideImage from '@assets/image/body/section1/landing_image.png';
import saleImage1 from '@assets/image/body/section1/sale_image1.png';
import saleImage2 from '@assets/image/body/section1/sale_image2.png';
import thirdImage from '@assets/image/body/section1/third_image.png';
import nikeImage from '@assets/image/body/section2/nike_img.png';
// import {client, blogsQuery, productsQuery, collectionsQuery} from "@graphql";
import CustomCard from '../../customCard/index';
import CustomCategories from "@components/customcategories";
import FilterBy from "@components/filterBy";
import { BsChevronUp } from 'react-icons/bs';
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
  const [nab_shop, setStyle_nabshop] = useState("lie_first");
  const [nab_about, setStyle] = useState("lie");
  const [nab_contact, setStyle_nabcontact] = useState("lie");
  //   const [nab_about, setStyle_about] = useState("li");
  //   const [nab_contact, setStyle_contact] = useState("li");

  const onHandler = (key) => {
    switch (key) {
      case "shop":
        setData(getSaleProducts(products));
        setStyle_nabshop("common")
        setStyle("lie")
        setStyle_nabcontact("lie")
        setFlag(0);
        break;
      case "about":
        setData(getFeaturedProducts(products));
        setStyle("common");
        setStyle_nabshop("lie")
        setStyle_nabcontact("lie")
        setFlag(1);
        break;
      default:
        setData(getTendingProducts(products));
        setStyle_nabcontact("common")
        setStyle("lie");
        setStyle_nabshop("lie")
        setFlag(2);
        break;
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
              <ul>
                <li className={nab_shop}>
                  <div onClick={() => onHandler('shop')}>SHOP</div>
                </li>
                <li className={nab_about}>
                  <div onClick={() => onHandler('about')}>ABOUT US</div>
                </li>
                <li className={nab_contact}>
                  <div onClick={() => onHandler('contact')}>CONTACT</div>
                </li>
              </ul>
            </ProductNav>
            <hr style={{ width: "80%" }}></hr>
          </Tabs>
        )}

        <Row>
          {flag == 0 ? (
            <Col>
              <div style={{ marginTop: '48px' }}>
                <>
                  <CustomCategories />
                  <Row style={{ paddingLeft: '9%', paddingRight: '9%', marginBottom: '53px', width: '100%', marginRight: 0 }}>
                    <FilterBy />
                  </Row>

                  <Row style={{ paddingLeft: '9%', paddingRight: '9%', marginBottom: '53px', width: '100%', marginRight: 0 }}>
                    <Col sm={3} style={{ display: 'flex', justifyContent: 'center' }} >
                      <div style={{ width: '267px', height: '409px' }}>
                        <CustomCard stuff={{ photoUrl: nikeImage.src, title: 'NIKE', brief: 'Sportsware smooth men\'s Semi-Brushed Back Fleece Sweater', size: 'S, M, L, XL, 2XL', price: '$33', oldPrice: '$44' }} />
                      </div>
                    </Col>
                    <Col sm={3} style={{ display: 'flex', justifyContent: 'center' }} >
                      <div style={{ width: '267px', height: '409px' }}>
                        <CustomCard stuff={{ photoUrl: nikeImage.src, title: 'NIKE', brief: 'Sportsware smooth men\'s Semi-Brushed Back Fleece Sweater', size: 'S, M, L, XL, 2XL', price: '$33', oldPrice: '$44' }} />
                      </div>
                    </Col>
                    <Col sm={3} style={{ display: 'flex', justifyContent: 'center' }} >
                      <div style={{ width: '267px', height: '409px' }}>
                        <CustomCard stuff={{ photoUrl: nikeImage.src, title: 'NIKE', brief: 'Sportsware smooth men\'s Semi-Brushed Back Fleece Sweater', size: 'S, M, L, XL, 2XL', price: '$33', oldPrice: '$44' }} />
                      </div>
                    </Col>
                    <Col sm={3} style={{ display: 'flex', justifyContent: 'center' }} >
                      <div style={{ width: '267px', height: '409px' }}>
                        <CustomCard stuff={{ photoUrl: nikeImage.src, title: 'NIKE', brief: 'Sportsware smooth men\'s Semi-Brushed Back Fleece Sweater', size: 'S, M, L, XL, 2XL', price: '$33', oldPrice: '$44' }} />
                      </div>
                    </Col>
                  </Row>
                </>
              </div>
            </Col>
          ) : flag == 1 ? (
            <>
              <Col md={1} lg={1}></Col>
              <Col md={10} lg={10}>
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
              </Col>
            </>
          ) : (
            <>
              <Col md={1} lg={1}></Col>
              <Col md={10} lg={10}>
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
              </Col>
            </>
          )}
        </Row>
      </Container>
    </div >
  );
};

ProductsTab.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsTab;
