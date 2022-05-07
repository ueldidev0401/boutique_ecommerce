import cn from "classnames";
import PropTypes from 'prop-types';
import Loader from "@components/ui/loader";
import {Col, Container, Row} from "@bootstrap";
import EmptyProduct from "@components/ui/empty";
import {getRelatedProducts} from "@utils/product";
import ProductCard from "@components/product/card";
import SectionTitle from "@components/ui/section-title";
import {RelatedProductsWrapper} from "@components/product/feed/style";

const RelatedProducts = ({products, categories, tags, limit, className, ...props}) => {
    const relatedProducts = getRelatedProducts(categories, tags, products, limit);

    return (
        relatedProducts.length > 0 ? (
            <RelatedProductsWrapper
                {...props}
                className={cn(className)}
            >
                <Container>
                    <Row>
                        <Col xs={12}>
                            <SectionTitle
                                align="left"
                                mb={[27, null, 47]}
                                title="Related Products"
                            />
                        </Col>
                    </Row>

                    {(!relatedProducts) && <Loader className="mt-5"/>}

                    <Row className="products-grid-mobile mtn-30">
                        {relatedProducts.map(product => (
                            <Col xs={6} md={4} lg={3} key={product?.id}>
                                <ProductCard product={product}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </RelatedProductsWrapper>
        ) : (
            <div className="w-100">
                <EmptyProduct message="Related products not found!"/>
            </div>
        )
    );
};

RelatedProducts.defaultProps = {
    limit: 4
}

RelatedProducts.propTypes = {
    className: PropTypes.string,
    tags: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
};

export default RelatedProducts;
