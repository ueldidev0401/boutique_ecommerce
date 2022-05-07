import Head from "next/head";
import settings from "@data/settings";
import Layout from "@components/layout";
import Image from "@components/ui/image";
import {Container, Col, Row} from "@bootstrap";
import Breadcrumb from "@components/ui/breadcrumb";

const AboutPage = () => {
    return (
        <Layout>
            <Head>
                <title>{"About :: " + settings?.title}</title>
                <meta name="description" content={settings?.description}/>
            </Head>

            <Breadcrumb
                py={[40, 80]}
                mb={[60, null, 100]}
                pageTitle="About Us"
            />


            <section className="about-page-wrapper">
                <Container>
                    <h2>Furns is a global furniture destination for somethings. We sell cutting-edge furniture and offer
                        a wide variety of fashion-related content.</h2>
                </Container>

                <Container fluid className="mt-3 mt-md-5">
                    <Row>
                        <Col md={6}>
                            <figure>
                                <Image
                                    width={950}
                                    height={600}
                                    alt={settings?.title}
                                    src="/images/about/02.jpg"
                                />
                            </figure>
                        </Col>

                        <Col md={6}>
                            <figure>
                                <Image
                                    width={950}
                                    height={600}
                                    alt={settings?.title}
                                    src="/images/about/01.jpg"
                                />
                            </figure>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-3 mt-md-5">
                    <Row>
                        <Col lg={6} className="mb-5 mb-lg-0">
                            <div className="about-store">
                                <h4>OUR STORES</h4>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet
                                    conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="about-store">
                                <h4>OUR MISSION</h4>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet
                                    conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    );
};

export default AboutPage;
