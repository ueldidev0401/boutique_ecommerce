import PropTypes from "prop-types";
import Instafeed from "instafeed.js";
import { useRef, useEffect } from "react";
import { Container, Col, Row, H1 } from "@bootstrap";
import SectionTitle from "@components/ui/section-title";
import { InstafeedWrap, InstafeedContent } from "./instafeed.style";

const InstafeedGallery = ({ limit }) => {
  const instafeedRef = useRef(null);
  const access_token =
    "AQDGQDuju49yDXPBDZD-kJFX-nZjpev5CjRIMqpyEy5t3HHaV9Ii1Kk6EcDbyAXpR7YRPxLGJrHBZ6ccSLNfiCLFUXN0pTU-jqD0RmbymGgSRxEyteCTU8aepPOiDJc3BeUjaNQeTo7IXer-xst4Y5opBioTTS6yyDtDfRPmmde6XmUhhEz0nCsOaTIQXIL-1uT5gl72w9Nji48_S1IYSVLW9Roxou3OBTmJRcj_qOwHbw";
  const template =
    '<a class="insta-cart-product" href="{{link}}" target="_blank"><figure><img alt="{{caption}}" src="{{image}}"/></figure></a>';

  useEffect(() => {
    const feed = new Instafeed({
      accessToken: access_token,
      template: template,
      target: instafeedRef.current,
      limit: limit,
    });
    feed.run();
  }, []);
  return (
    <InstafeedWrap>
      <Container>
        <Row>
          <Col>
            <SectionTitle
              mb={52}
              align="center"
              title="Our Instafeed"
              content="Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore"
            />
          </Col>
        </Row>

        <InstafeedContent ref={instafeedRef} />
      </Container>
    </InstafeedWrap>
  );
};

InstafeedGallery.propTypes = {
  limit: PropTypes.number.isRequired,
};

export default InstafeedGallery;
