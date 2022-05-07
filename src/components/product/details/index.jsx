import PropTypes from 'prop-types';
import {Container, Col, Row} from "@bootstrap";
import ProductDetailsThumb from "@components/product/details/thumbnail";
import ProductDetailsContent from "@components/product/details/content";
import {ProductDetailsWrapper} from "@components/product/details/details.style";

const ProductDetails = ({product, ...props}) => {
    return (
        <ProductDetailsWrapper className="product-details-content" {...props}>
            <Container>
                <Row>
                    <Col md={6} lg={5}>
                        <ProductDetailsThumb
                            thumbnails={product?.images?.edges}
                        />
                    </Col>

                    <Col md={6} lg={7}>
                        <ProductDetailsContent product={product} className="details-page"/>
                    </Col>
                </Row>
            </Container>
        </ProductDetailsWrapper>
    );
};

ProductDetails.propTypes = {
    product: PropTypes.object.isRequired
};


export default ProductDetails;
