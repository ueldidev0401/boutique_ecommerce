import Promo from "@components/promo";
import promotions from "@data/promotions";
import {Container, Col, Row} from "@bootstrap";
import {PromotionsWrap} from "./promotions.style";

const Promotions = ({fluid}) => {
    return (
        <PromotionsWrap
            py={[60, 60, 100]}
        >
            <Container fluid={fluid}>
                <Row className="mtn-30">
                    {promotions.map(promo => (
                        <Col lg={6} key={promo.id}>
                            <Promo
                                slug={promo.slug}
                                align={promo.align}
                                thumb={promo.thumb}
                                title={promo.title}
                                content={promo.content}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </PromotionsWrap>
    );
};

export default Promotions;