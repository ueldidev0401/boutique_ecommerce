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
import { useRouter } from 'next/router';

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
    }
]

const ProductsTab = ({products, limit = 8, className}) => {
    const router = useRouter();
    const [data, setData] = useState(products);

    const onHandler = (event) => {
        const target = event.target;
        const key = target.dataset.key
        switch (key) {
            case "shop":
                setData(getSaleProducts(products));
                router.push('/')
                break;
            case "about":
                router.push('/about')
                setData(getFeaturedProducts(products));
                break;
            case "contact":
                router.push('/contact')
                setData(getTendingProducts(products));
                break;
            default:
                setData(products);
        }
    }

    return (
        <div className={cn(className)}>
            <Container>
                {(!data) && <Loader/>}

                {data && (
                    <Tabs>
                        <ProductNav mb={[30, null, 55]} align="center" style={{marginBottom: 0}}>
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
