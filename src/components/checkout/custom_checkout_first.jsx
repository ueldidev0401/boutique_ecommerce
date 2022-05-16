import settings from "@data/settings";
import { Form, Col, Row } from "@bootstrap";
import back from "../../assets/image/body/section1/background.png";
import {
  FormCheckout,
  Text,
  Title,
  Padding,
  OrderTypeText,
  ItalicText,
  TextInCardTitle,
  TextInCardContent,
  TextInCardNumber,
  InputCoupoun,
  CustomButton,
  CenterText,
  SmallText,
  CustomButtonGreen,
} from "./custom_checkut.style.jsx";

import { useEffect, useState } from 'react'

import check_woman from "../../assets/image/body/section1/check_woman.png";
import close from "../../assets/image/body/section1/close.png";
import badgeRed from "../../assets/image/body/section1/badgeRed.png";
import badge from "../../assets/image/body/section1/badge.png";
import { Provider } from "react-redux";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import map from "../../assets/image/body/section1/map.png";
import emoji from "../../assets/image/body/section1/emoji.png";
import qrcode from "../../assets/image/body/section1/qrcode.png";
import download from "../../assets/image/body/section1/download.png"
import phone from "../../assets/image/body/section1/phone.png"

import { useRouter } from "next/router";
import { BsChevronUp } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { BsEmojiSmile } from 'react-icons/bs';

import CheckWoman from '@assets/image/body/section1/check_woman.png';
import QRcode from '@assets/image/body/section1/qrcode.svg';
const step1Content = <h1>ssss</h1>;
const step2Content = <h1></h1>;
const CustomCheckOutFirst = () => {
  var router = useRouter();
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // dispatch(getSampleData());
    // console.log('sampleListData = ', sampleListData);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        // setscrollView(!scrollView)
        setVisible(true);
      } else {
        setVisible(false);
      }
    }, false)

  }, []);

  const onTopButtonHandle = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {
    return true;
  }

  function step3Validator() {
    // return a boolean
  }
  return (
    <FormCheckout>
      <img
        src={back.src}
        style={{
          width: "100%",
          height: "100%",
          filter: "blur(16px)",
          opacity: "0.4",
          position: "absolute",
        }}
      ></img>
      <br></br>
      <div
        style={{
          position: "absolute",
          top: "174px",
          borderLeft: "1px solid #737373",
          height: "705px",
          left: "50%",
        }}
      ></div>

      <div style={{
        position: 'fixed', bottom: '90px', right: "4.6%", fontFamily: 'Saira',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '18px',
        lineHeight: '28px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1000000,
        cursor: 'pointer',
        display: visible ? 'flex' : 'none',
        transition: 'all 3s'
      }} onClick={onTopButtonHandle}>
        <BsChevronUp fontSize={'40px'} color='#9D9999' />
        TOP
      </div>

      <div className="checkoutTitle">
        Check Out
      </div>

      <Row>
        <Col lg={6} style={{ paddingLeft: '5.62%', height: '934px' }}>
          <div className="checkoutBodyOrderType">Order Type</div>
          <div className="checkoutBodyOrderSelect">
            <select
              style={{
                border: "none",
                borderBottom: "1px solid #ADAAAA",
                backgroundColor: "transparent",
                width: '100%',
                height: '100%',
                color: '#655454'
              }}

            >
              <option value="0" style={{ color: '#655454' }}>Cash On Delivery</option>
              <option value="1" style={{ color: '#655454' }}>Hi</option>
            </select>
          </div>
          <div className="checkoutBodyValidCardText">
            *  We dont accept credit cards  for cash on delivery orders
          </div>
          <div style={{ position: 'absolute', width: '84.5%', height: '373px', top: '265px' }}>
            <div style={{ display: 'flex', marginBottom: '12px' }}>
              <div className="checkoutBodyOrderDetail">
                <div className="checkoutBodyOrderDetailLeft">
                  <div className="checkoutBodyOrderDetailImage">
                    <img src={CheckWoman.src} style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div className="checkoutBodyOrderDetailInfo">
                    <div className="checkoutBodyOrderDetailTitle">
                      SLAZENGER 1881 Sweatshirt
                    </div>
                    <div className="checkoutBodyOrderDetailSize">
                      Medium , Black , Belt
                    </div>
                  </div>
                  <div className="checkoutBodyOrderDetailPlus">
                    <AiOutlinePlus style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div className="checkoutBodyOrderDetailCount">
                    1
                  </div>
                  <div className="checkoutBodyOrderDetailMinus">
                    <AiOutlineMinus style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div className="checkoutBodyOrderDetailPrice">
                    10.99 €
                  </div>
                </div>
              </div>
              <div className="checkoutBodyOrderDetailDelete">
                <div className="checkoutBodyOrderDetailDeleteIcon">
                  <AiOutlineCloseCircle style={{ width: '100%', height: '100%' }} />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', marginBottom: '12px' }}>
              <div className="checkoutBodyOrderDetail">
                <div className="checkoutBodyOrderDetailLeft">
                  <div className="checkoutBodyOrderDetailImage">
                    <img src={CheckWoman.src} style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div className="checkoutBodyOrderDetailInfo">
                    <div className="checkoutBodyOrderDetailTitle">
                      SLAZENGER 1881 Sweatshirt
                    </div>
                    <div className="checkoutBodyOrderDetailSize">
                      Medium , Black , Belt
                    </div>
                  </div>
                  <div className="checkoutBodyOrderDetailPlus">
                    <AiOutlinePlus style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div className="checkoutBodyOrderDetailCount">
                    1
                  </div>
                  <div className="checkoutBodyOrderDetailMinus">
                    <AiOutlineMinus style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div className="checkoutBodyOrderDetailPrice">
                    10.99 €
                  </div>
                </div>
              </div>
              <div className="checkoutBodyOrderDetailDelete">
                <div className="checkoutBodyOrderDetailDeleteIcon">
                  <AiOutlineCloseCircle style={{ width: '100%', height: '100%' }} />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', marginBottom: '12px' }}>
              <div className="checkoutBodyOrderDetail">
                <div className="checkoutBodyOrderDetailLeft">
                  <div className="checkoutBodyOrderDetailImage">
                    <img src={CheckWoman.src} style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div className="checkoutBodyOrderDetailInfo">
                    <div className="checkoutBodyOrderDetailTitle">
                      SLAZENGER 1881 Sweatshirt
                    </div>
                    <div className="checkoutBodyOrderDetailSize">
                      Medium , Black , Belt
                    </div>
                  </div>
                  <div className="checkoutBodyOrderDetailPlus">
                    <AiOutlinePlus style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div className="checkoutBodyOrderDetailCount">
                    1
                  </div>
                  <div className="checkoutBodyOrderDetailMinus">
                    <AiOutlineMinus style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div className="checkoutBodyOrderDetailPrice">
                    10.99 €
                  </div>
                </div>
              </div>
              <div className="checkoutBodyOrderDetailDelete">
                <div className="checkoutBodyOrderDetailDeleteIcon">
                  <AiOutlineCloseCircle style={{ width: '100%', height: '100%' }} />
                </div>
              </div>
            </div>
          </div>


          {/* <CheckOutCard />
          <CheckOutCard />
          <CheckOutCard /> */}
          <hr className="checkoutBodyOrderHr" />
          <div>
            <div className='checkoutBodyOrderInputCoupoun'>
              <InputCoupoun placeholder="Coupoun Code" style={{ width: '100%', height: '100%' }}></InputCoupoun>
            </div>
            <div className="checkoutBodyOrderApplyBtn">
              <a className="btn-pink" style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>Apply</a>
            </div>
          </div>
          <div className="checkoutBodyPrice">
            <div>
              Tax :   0.99 €
            </div>
            <div>
              Delivery Charge :   5.00 €
            </div>
            <div style={{ fontWeight: 'bold', color: 'black' }}>
              Total : 30.99 €
            </div>
          </div>
        </Col>
        {/* <Col lg={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="checkoutBodyStep">
            <div className="checkoutBodyStepOne">
              1
            </div>
            <div className="checkoutBodyStepLine"></div>
            <div className="checkoutBodyStepTwo">
              2
            </div>
          </div>
          <div className="checkoutBodyFormFullName">
            <div>Full Name</div>
            <InputCoupoun style={{ width: '100%', height: '100%', marginTop: '10px' }}></InputCoupoun>
          </div>
          <div className="checkoutBodyPhoneNumberAndEmail">
            <div className="checkoutBodyPhoneNumber">
              <div>Phone Number</div>
              <InputCoupoun style={{ width: '100%', marginTop: '10px' }}></InputCoupoun>
            </div>
            <div className="checkoutBodyEmail">
              <div>Email</div>
              <InputCoupoun style={{ width: '100%', marginTop: '10px' }}></InputCoupoun>
            </div>
          </div>
          <div className="checkoutBodyDeliveryAddress">
            <div>Delivery Address</div>
            <InputCoupoun style={{ width: '100%', height: '100%', marginTop: '10px' }}></InputCoupoun>
          </div>
          <div className="checkoutBodyMap">
            <iframe src="https://maps.google.com/maps?q=Tangesir%20Dates%20Products&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width='100%' height='222' allowfullscreen></iframe>
          </div>
          <div className="checkoutBodyNextBtn">
              <a className="btn-pink" style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>Next</a>
          </div>
        </Col> */}
        <Col lg={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="checkoutBodyStep">
            <div className="checkoutBodyStepOne">
              1
            </div>
            <div className="checkoutBodyStepLine"></div>
            <div className="checkoutBodyStepTwo">
              2
            </div>
          </div>
          <div className="checkoutSmile">
            <BsEmojiSmile style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="checkoutOrderText">
            Order Ready to Proceed.<br/>Your Order Id: #2021913867<br/>
            You can track you order using your phone number
          </div>
          <div className="checkoutQRcode">
            <img src={QRcode.src} style={{width: '100%', height: '100%'}}/>
          </div>
          <div className="checkoutDownloadQRcode"></div>
          <div className="checkoutOrderQRcodeBtn"></div>
        </Col>
      </Row>
      {/* <Padding>
        <Text>
          <Title>Check Out</Title>
        </Text>
        <Row>
          <Col md={6}>
            <Text>
              <OrderTypeText>Order Type</OrderTypeText>
            </Text>
            <select
              style={{ 
                padding: "5px 0 5px",
                border: "none",
                borderBottom: "1px solid #ADAAAA",
                backgroundColor: "transparent",
                width: "273px",
                marginTop: "15px",
              }}
            >
              <option value="0">Cash On Delivery</option>
              <option value="1">Hi</option>
            </select>
            <Text>
              <ItalicText>
                * We dont accept credit cards for cash on delivery orders
              </ItalicText>
            </Text>
            <div>
              <Row>
                <Col md={11}>
                  <div
                    style={{
                      width: "95%",
                      height: "121px",
                      border: "1px solid grey",
                      borderRadius: "4px",
                      marginTop: "13px",
                      padding: "12px",
                    }}
                  >
                    <Row>
                      <Col md="3">
                        <img
                          src={check_woman.src}
                          style={{ width: "100%" }}
                        ></img>
                      </Col>
                      <Col md="4">
                        <TextInCardTitle>SLAZENGER 1881</TextInCardTitle>
                        <TextInCardTitle>Sweatshirt</TextInCardTitle>
                        <TextInCardContent>
                          Medium , Black , Belt
                        </TextInCardContent>
                      </Col>
                      <Col md="4">
                        <TextInCardNumber>+ 1 - 10.99 €</TextInCardNumber>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col md={1}>
                  <img
                    src={close.src}
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "55px",
                      position: "absolute",
                      marginLeft: "-10px",
                    }}
                  ></img>
                </Col>
              </Row>
              <Row>
                <Col md={11}>
                  <div
                    style={{
                      width: "95%",
                      height: "121px",
                      border: "1px solid grey",
                      borderRadius: "4px",
                      marginTop: "13px",
                      padding: "12px",
                    }}
                  >
                    <Row>
                      <Col md="3">
                        <img
                          src={check_woman.src}
                          style={{ width: "100%" }}
                        ></img>
                      </Col>
                      <Col md="4">
                        <TextInCardTitle>SLAZENGER 1881</TextInCardTitle>
                        <TextInCardTitle>Sweatshirt</TextInCardTitle>
                        <TextInCardContent>
                          Medium , Black , Belt
                        </TextInCardContent>
                      </Col>
                      <Col md="4">
                        <TextInCardNumber>+ 1 - 10.99 €</TextInCardNumber>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col md={1}>
                  <img
                    src={close.src}
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "55px",
                      position: "absolute",
                      marginLeft: "-10px",
                    }}
                  ></img>
                </Col>
              </Row>
              <Row>
                <Col md={11}>
                  <div
                    style={{
                      width: "95%",
                      height: "121px",
                      border: "1px solid grey",
                      borderRadius: "4px",
                      marginTop: "13px",
                      padding: "12px",
                    }}
                  >
                    <Row>
                      <Col md="3">
                        <img
                          src={check_woman.src}
                          style={{ width: "100%" }}
                        ></img>
                      </Col>
                      <Col md="4">
                        <TextInCardTitle>SLAZENGER 1881</TextInCardTitle>
                        <TextInCardTitle>Sweatshirt</TextInCardTitle>
                        <TextInCardContent>
                          Medium , Black , Belt
                        </TextInCardContent>
                      </Col>
                      <Col md="4">
                        <TextInCardNumber>+ 1 - 10.99 €</TextInCardNumber>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col md={1}>
                  <img
                    src={close.src}
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "55px",
                      position: "absolute",
                      marginLeft: "-10px",
                    }}
                  ></img>
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col md={11}>
                  <hr style={{ width: "100%", marginTop: "10px" }}></hr>
                </Col>
              </Row>
            </div>
            <div>
              <InputCoupoun placeholder="Coupoun Code"></InputCoupoun>
              <CustomButton>Apply</CustomButton>
            </div>
            <div style={{ float: "right", paddingRight: "75px" }}>
              <TextInCardContent style={{ fontSize: "25px" }}>
                Tax : 0.99 €
              </TextInCardContent>
              <TextInCardContent style={{ fontSize: "25px" }}>
                Delivery Charge : 5.00 €
              </TextInCardContent>
              <TextInCardTitle style={{ fontSize: "25px" }}>
                + 1 - 10.99 €
              </TextInCardTitle>
            </div>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={1}></Col>
              <Col md={11}>
                <Row>
                  <Col md={12}>
                    <StepProgressBar
                      startingStep={0}
                      steps={[
                        {
                          label: "",
                          name: "Briefing",
                          content: step1Content,
                        },
                        {
                          label: "",
                          name: "Image-Acquisition",
                          content: step2Content,
                          validator: step2Validator,
                        },
                      ]}
                      primaryBtnClass="primaryButton"
                      secondaryBtnClass="secondaryButton"
                      contentClass="contentClass"
                      onSubmit={() => {
                        console.log("here");
                      }}
                    />
                  </Col>
                  <Col md={12}>
                    <OrderTypeText>Full Name</OrderTypeText>
                    <InputCoupoun style={{ width: "100%" }}></InputCoupoun>
                  </Col>
                  <Col md={6}>
                    <OrderTypeText>Phone Number</OrderTypeText>
                    <InputCoupoun style={{ width: "100%" }}></InputCoupoun>
                  </Col>
                  <Col md={6}>
                    <OrderTypeText>Email</OrderTypeText>
                    <InputCoupoun style={{ width: "100%" }}></InputCoupoun>
                  </Col>
                  <Col md={12}>
                    <OrderTypeText>Delivery Address</OrderTypeText>
                    <InputCoupoun style={{ width: "100%" }}></InputCoupoun>
                  </Col>
                  <Col md={12}>
                    <img src={map.src}></img>
                  </Col>

                  {/* <Col md={12}>
                    <img
                      src={emoji.src}
                      style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginBottom: "16px",
                      }}
                    ></img>
                  </Col>
                  <Col md={12}>
                    <CenterText>Order Ready to Proceed.</CenterText>
                    <CenterText>Your Order Id: #2021913867</CenterText>
                    <CenterText>
                      You can track you order using your phone number
                    </CenterText>
                    <Col md={12}>
                      <img
                        src={qrcode.src}
                        style={{
                          marginTop: "67px",
                          display: "block",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      ></img>
                    </Col>
                    <Row>
                      <Col md={6}></Col>
                      <Col md={2} style={{ display: "flex", marginLeft: "25px" }}>
                        <img src={download.src}></img>
                        <Text><SmallText> Download </SmallText><SmallText> QR Code </SmallText></Text>
                      </Col>
                    </Row>
                    <Col md={12}>
                      <CustomButtonGreen onClick={() => {router.push('/whatsapp')}}><img src={phone.src}></img>{" "}<CenterText style={{ color: "white" }}>  Order On Whatsapp</CenterText></CustomButtonGreen>
                    </Col>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Padding>
       */}
    </FormCheckout >
  );
};

export default CustomCheckOutFirst;
