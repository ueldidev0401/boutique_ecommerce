import {useState} from "react";
import PropTypes from 'prop-types';
import parse from "react-html-parser";
import {toCapitalize} from "@utils/method";
import reviewsDefaultData from "@data/rating";
import {Row, Col, Container} from "@bootstrap";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import Review from "@components/product/details/review";
import ReviewForm from "@components/product/details/review-form";
import {ProductDescReviewWrapper, ProductDescReviewContent, ProInfoList, ProDescription} from "./details.style";

const ProductDescriptionReview = ({product, ...props}) => {
    const {descriptionHtml, options, variants} = product;
    const [reviews, setReviews] = useState([...reviewsDefaultData]);

    const getReviewValue = value => {
        setReviews(prevState => ([
            ...prevState,
            {id: prevState.length + 1, ...value}
        ]));
    }

    return (
        <ProductDescReviewWrapper {...props}>
            <Container>
                <Tabs>
                    <TabList className="description-review-nav">
                        <Tab>Description</Tab>
                        {variants?.edges?.length > 1 && (
                            <Tab>Additional Info</Tab>
                        )}
                        <Tab>Reviews</Tab>
                    </TabList>

                    <ProductDescReviewContent>
                        <TabPanel>
                            <ProDescription>
                                {parse(descriptionHtml)}
                            </ProDescription>
                        </TabPanel>

                        {variants?.edges?.length > 1 && (
                            <TabPanel>
                                <ProInfoList>
                                    {options?.map(option => (
                                        <li key={option?.id}>
                                            <span>{option?.name}:</span> {option?.values?.map((value, idx) => (
                                            <>{toCapitalize(value)}{option?.values.length !== idx + 1 && ', '}</>
                                        ))}
                                        </li>
                                    ))}
                                </ProInfoList>
                            </TabPanel>
                        )}

                        <TabPanel>
                            <Row>
                                <Col lg={7}>
                                    {!reviews.length > 0 ? (
                                        <h2>No Reviews</h2>
                                    ) : (
                                        reviews.map(review => (
                                            <Review key={review.id} data={review}/>
                                        ))
                                    )}
                                </Col>

                                <Col lg={5}>
                                    <ReviewForm
                                        getReviewValue={getReviewValue}
                                    />
                                </Col>
                            </Row>
                        </TabPanel>
                    </ProductDescReviewContent>
                </Tabs>
            </Container>
        </ProductDescReviewWrapper>
    );
};

ProductDescriptionReview.propTypes = {
    product: PropTypes.object.isRequired,
};


export default ProductDescriptionReview;
