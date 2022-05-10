import Layout from "@components/layout";
import Head from "next/head";
import settings from "@data/settings.json";
import SigninForm from "@components/auth/signin-form";
import { AiOutlineEye } from 'react-icons/ai';
import { Row, Col } from "@bootstrap-styled/v4";
import { useRouter } from "next/router";
import scrollTop from "@assets/image/header/scrollTop.png";

const Track = () => {
    const router = useRouter();
    return (
        <Layout>
            <div style={{ position: 'relative', width: '100%', height: '933px' }}>

                <Head>
                    <title>{settings?.title}</title>
                    <meta name="description" content={settings?.description} />
                </Head>
                {/* <SigninForm /> */}
                <div className={"TrackOrderTitle"}>
                    Track Order
                </div>

                <Row style={{ position: 'relative', paddingLeft: '7.3%', paddingRight: '7.4%', top: '243px' }}>
                    <Col sm={3} style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="TrackOrder">
                            <div style={{ display: 'flex' }}>
                                <p>Order ID</p>
                                <p>2022162907</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Phone : </p>
                                <p>1231231231</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Total Qty : </p>
                                <p>1</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Total Price : </p>
                                <p>565.82$</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Order Date : </p>
                                <p>22 Apr 2022</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Order Type : </p>
                                <p>Pickup</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Status : </p>
                                <p style={{ color: 'RGB(26,134,38)' }}>Preparing</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p>Details : </p>
                                <p style={{ display: 'flex', alignItems: 'center' }}>Items <AiOutlineEye color="#E84242" onClick={() => {
                                    router.push('/trackdetail')
                                }}/></p>
                            </div>

                        </div>
                    </Col>
                    <Col sm={3} style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="TrackOrder">
                            <div style={{ display: 'flex' }}>
                                <p>Order ID</p>
                                <p>2022162907</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Phone : </p>
                                <p>1231231231</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Total Qty : </p>
                                <p>1</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Total Price : </p>
                                <p>565.82$</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Order Date : </p>
                                <p>22 Apr 2022</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Order Type : </p>
                                <p>Pickup</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Status : </p>
                                <p style={{ color: 'RGB(26,134,38)' }}>Preparing</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p>Details : </p>
                                <p style={{ display: 'flex', alignItems: 'center' }}>Items <AiOutlineEye color="#E84242" onClick={() => {
                                    router.push('/trackdetail')
                                }}/></p>
                            </div>

                        </div>
                    </Col>
                    <Col sm={3} style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="TrackOrder">
                            <div style={{ display: 'flex' }}>
                                <p>Order ID</p>
                                <p>2022162907</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Phone : </p>
                                <p>1231231231</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Total Qty : </p>
                                <p>1</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Total Price : </p>
                                <p>565.82$</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Order Date : </p>
                                <p>22 Apr 2022</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Order Type : </p>
                                <p>Pickup</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Status : </p>
                                <p style={{ color: 'RGB(26,134,38)' }}>Preparing</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p>Details : </p>
                                <p style={{ display: 'flex', alignItems: 'center' }}>Items <AiOutlineEye color="#E84242" onClick={() => {
                                    router.push('/trackdetail')
                                }}/></p>
                            </div>

                        </div>
                    </Col>
                    <Col sm={3} style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="TrackOrder">
                            <div style={{ display: 'flex' }}>
                                <p>Order ID</p>
                                <p>2022162907</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Phone : </p>
                                <p>1231231231</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Total Qty : </p>
                                <p>1</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Total Price : </p>
                                <p>565.82$</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Order Date : </p>
                                <p>22 Apr 2022</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Order Type : </p>
                                <p>Pickup</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>Status : </p>
                                <p style={{ color: 'RGB(26,134,38)' }}>Preparing</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p>Details : </p>
                                <p style={{ display: 'flex', alignItems: 'center' }}>Items <AiOutlineEye color="#E84242" onClick={() => {
                                    router.push('/trackdetail')
                                }}/></p>
                            </div>

                        </div>
                    </Col>
              
                </Row>


                <div
                    style={{ position: 'absolute', bottom: '0', right: '6%', width: '3.3%', height: '55px' }}
                    onClick={() => router.push('/')}
                >
                    <div className="close_search_icon" style={{ width: '50%', margin: 'auto' }}>
                        <img
                            style={{
                                marginLeft: "auto",
                                marginRight: "auto",
                                display: "block",
                                width: "100%",
                                height: '100%'
                            }}
                            src={scrollTop.src}
                        />
                    </div>
                    <div style={{ textAlign: "center" }} className="close_search_text">close</div>
                </div>
            </div>

        </Layout>
    )
}

export default Track;