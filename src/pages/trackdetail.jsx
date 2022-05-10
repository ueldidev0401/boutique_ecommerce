import Layout from "@components/layout";
import Head from "next/head";
import settings from "@data/settings.json";
import SigninForm from "@components/auth/signin-form";
import { AiOutlineEye } from 'react-icons/ai';
import { Row, Col } from "@bootstrap-styled/v4";
import { useRouter } from "next/router";
import scrollTop from "@assets/image/header/scrollTop.png";
import { AiOutlineClose } from 'react-icons/ai';
import { IoMdRefresh } from 'react-icons/io';
import {BsRecordBtn} from 'react-icons/bs';
import itemImage from '@assets/image/body/section1/tableImage.png';
const TrackDetail = () => {
    const router = useRouter();
    return (
        <Layout>
            <div style={{ position: 'relative', width: '100%', height: '933px' }}>

                <Head>
                    <title>{settings?.title}</title>
                    <meta name="description" content={settings?.description} />
                </Head>
                {/* <SigninForm /> */}

                <Row style={{ position: 'relative', display: 'flex', justifyContent: 'center', height: '100%'}}>
                    <div style={{ width: '55.8%', height: '455px', margin: 'auto', border: '1px solid grey', padding: '10px', borderRadius: '3px'  }}>
                        <div className="trackDetailHeader">
                            <p>Order ID #2022162907</p>
                            <div className="trackDetailHeaderCloseBtn">
                                <AiOutlineClose style={{ width: '100%', height: '100%' }} onClick={() => {
                                    // dispatch(changeIsCategoriesModalShowAction(false))
                                    router.push('/track');
                                }} />
                            </div>
                        </div>
                        <div className="trackDetailBody">
                            <div className="trackDetailBodyTableHeader">
                                <div style={{ width: '5%', height: '100%', display: 'flex', alignItems: 'center', borderRight: '1px grey solid', paddingLeft: '3px' }}>Sl</div>
                                <div style={{ width: '20%', height: '100%', display: 'flex', alignItems: 'center', borderRight: '1px grey solid', paddingLeft: '3px' }}>Image</div>
                                <div style={{ width: '35%', height: '100%', display: 'flex', alignItems: 'center', borderRight: '1px grey solid', paddingLeft: '3px' }}>Item Name</div>
                                <div style={{ width: '20%', height: '100%', display: 'flex', alignItems: 'center', borderRight: '1px grey solid', paddingLeft: '3px' }}>Qty</div>
                                <div style={{ width: '20%', height: '100%', display: 'flex', alignItems: 'center', borderRight: '1px grey solid', paddingLeft: '3px', fontWeight: 'bold' }}>Total</div>
                            </div>
                            <div className="trackDetailBodyTableBody">
                                <div className="trackDetailBodyTableRow">
                                    <div style={{ width: '5%', height: '100%', display: 'flex', alignItems: 'center', borderRight: '1px grey solid', paddingLeft: '3px' }}>1</div>
                                    <div style={{ width: '20%', height: '100%', display: 'flex', alignItems: 'center', borderRight: '1px grey solid', paddingLeft: '3px' }}><div><img src={itemImage.src} /></div></div>
                                    <div style={{ width: '35%', height: '100%', display: 'flex', alignItems: 'center', borderRight: '1px grey solid', paddingLeft: '3px' }}>Veggie Pizza <BsRecordBtn color="red"/></div>
                                    <div style={{ width: '20%', height: '100%', display: 'flex', alignItems: 'center', borderRight: '1px grey solid', paddingLeft: '3px' }}>1 X 563.00 $</div>
                                    <div style={{ width: '20%', height: '100%', display: 'flex', alignItems: 'center', borderRight: '1px grey solid', paddingLeft: '3px' }}>563.00 $</div>
                                </div>
                                <div className="trackDetailBodyTableDetail">
                                    <div style={{ width: '60%', height: '100%', display: 'flex', alignItems: 'center', borderRight: '1px grey solid', paddingLeft: '3px' }}></div>

                                    <div style={{ width: '20%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px grey solid', paddingLeft: '10px' }}>
                                        <div>qyt</div>
                                        <div>Sub Total</div>
                                        <div>Tax Fee</div>
                                        <div>discount</div>
                                        <div>Total</div>
                                    </div>
                                    <div style={{ width: '20%', height: '100%', display: 'flex',flexDirection: 'column',justifyContent: 'center', alignItems: 'end', paddingRight:'10px', borderRight: '1px grey solid', paddingLeft: '3px' }}>
                                        <div style={{ fontWeight: 'bold'}}>1</div>
                                        <div style={{ fontWeight: 'bold'}}>563.00 $</div>
                                        <div style={{ fontWeight: 'bold'}}>14.08 $</div>
                                        <div style={{ fontWeight: 'bold'}}>11.26 $</div>
                                        <div style={{ fontWeight: 'bold'}}>565.82 $</div>

                                    </div>

                                </div>
                            </div>

                        </div>
                        <hr />
                        <div className="trackDetailFooter">
                            <a className="btn-close" onClick={() => {
                                    router.push('/track');
                            }}>Close</a>
                            <a className="btn-pink" style={{ display: 'flex', flexDirection: 'row' }}><IoMdRefresh />Order Again</a>
                        </div>

                    </div>
                </Row>

            </div>

        </Layout>
    )
}

export default TrackDetail;