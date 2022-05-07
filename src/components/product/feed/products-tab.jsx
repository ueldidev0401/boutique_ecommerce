import cn from "classnames";
import {useState} from "react";
import PropTypes from 'prop-types';
import Loader from "@components/ui/loader";
import EmptyProduct from "@components/ui/empty";
import ProductCard from "@components/product/card";
import SectionTitle from "@components/ui/section-title";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import {Col, Container, Row} from "@bootstrap-styled/v4";
import {ProductNav} from "@components/product/feed/style";
import {getFeaturedProducts, getSaleProducts, getTendingProducts} from "@utils/product";

const productNav = [
    {
        key: "new",
        title: "New Arrival",
    },
    {
        key: "featured",
        title: "Featured",
    },
    {
        key: "sale",
        title: "On Sale",
    },
    {
        key: "tending",
        title: "Tending",
    }
]

const ProductsTab = ({products, limit = 8, className}) => {
    const [data, setData] = useState(products);

    const onHandler = (event) => {
        const target = event.target;
        const key = target.dataset.key
        switch (key) {
            case "sale":
                setData(getSaleProducts(products));
                break;
            case "featured":
                setData(getFeaturedProducts(products));
                break;
            case "tending":
                setData(getTendingProducts(products));
                break;
            default:
                setData(products);
        }
    }

    return (
        <div className={cn(className)}>
            <Container>
                <Row>
                    <Col xs={12}>
                        <SectionTitle
                            mb={42}
                            align="center"
                            title="Our Products"
                            content="Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore"
                        />
                    </Col>
                </Row>

                {(!data) && <Loader/>}

                {data && (
                    <Tabs>
                        <ProductNav mb={[30, null, 55]} align="center">
                            <TabList>
                                {productNav.map(item => (
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

                        {productNav.map(item => (
                            <TabPanel key={item?.key}>
                                <Row className="products-grid-mobile mtn-30">
                                    {data?.length > 0 ? (
                                        data?.slice(0, limit)?.map(product => (
                                            <Col xs={6} md={4} lg={3} key={product?.node?.id}>
                                                <ProductCard product={product?.node}/>
                                            </Col>
                                        ))
                                    ) : (
                                        <div className="w-100">
                                            <EmptyProduct/>
                                        </div>
                                    )}
                                </Row>
                            </TabPanel>
                        ))}
                    </Tabs>
                )}
            </Container>
        </div>
    );
}

ProductsTab.propTypes = {
    products: PropTypes.array.isRequired,
};


export default ProductsTab;
