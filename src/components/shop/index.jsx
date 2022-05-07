import {useState} from "react";
import PropTypes from "prop-types";
import {useRouter} from "next/router";
import Select from "@components/ui/select";
import {Container, Col, Row} from "@bootstrap";
import ProductCard from "@components/product/card";
import {
    ShopTopBar,
    ShopTopBarLeft,
    ShopTopBarRight,
    ProductsFeedWrap,
} from "@components/shop/shop.style";

export const sortByOptions = [
    {label: "Relevance", value: "relevance"},
    {label: "Name (A - Z)", value: "title-ascending"},
    {label: "Name (Z - A)", value: "title-descending"},
    {label: "Price (Low - High)", value: "price-ascending"},
    {label: "Price (High - Low)", value: "price-descending"},
];

const ShopProductsFeed = ({products}) => {
    const router = useRouter();
    const {sort} = router.query;
    const [selectedSort, setSelectedSort] = useState(
        sortByOptions.find((item) => item.value === sort) || sortByOptions[0]
    );

    const onSortHandler = (event) => {
        setSelectedSort({...event});
        router.push(`${location.pathname}?sort=${event.value}`);
    };

    return (
        <ProductsFeedWrap>
            <Container>
                <Row>
                    <Col>
                        <ShopTopBar>
                            <ShopTopBarLeft>
                                <p>Showing {products?.length} products</p>
                            </ShopTopBarLeft>

                            <ShopTopBarRight>
                                <Select
                                    label="Sort by"
                                    className="sort-by"
                                    value={selectedSort}
                                    options={sortByOptions}
                                    onChange={onSortHandler}
                                    classNamePrefix="sort-by"
                                />
                            </ShopTopBarRight>
                        </ShopTopBar>
                    </Col>
                </Row>

                <Row className="products-grid-mobile" style={{marginTop: "-30px"}}>
                    {products?.map((product) => (
                        <Col xs={6} md={4} lg={3} key={product?.node.id}>
                            <ProductCard product={product?.node}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </ProductsFeedWrap>
    );
};

ShopProductsFeed.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ShopProductsFeed;
