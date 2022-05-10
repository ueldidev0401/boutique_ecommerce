import Cookie from "js-cookie";
import { useState } from "react";
import { encode } from "js-base64";
import { useRouter } from "next/router";
import Input from "@components/ui/input";
import { totalDays } from "@utils/method";
import { Col, Container, Form, Row } from "@bootstrap";
import { client, customerAccessTokenCreate } from "@graphql";
import { InputField } from "@components/checkout/checkout-form.style";
import { LargeFontWeight } from "@components/product/feed/style";
import {
  FormWrap,
  AlertMessage,
  Text,
  Redtext,
  Padding,
  Margin,
  Button,
  Backendground,
} from "@components/auth/auth.style";

const defaultValue = {
  email: "customer@demo.com",
  password: "demo123",
};

const SigninForm = () => {
  const router = useRouter();
  const [error, setError] = useState([]);
  const [formData, setFormData] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(false);

  const onInputChange = (e) => {
    const target = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <section>
      <Container>
        <Col lg={6} className="m-auto">
          <FormWrap>
            <Form onSubmit={onFormSubmit} noValidate>
              <LargeFontWeight
                style={{
                  padding: "15px",
                  fontWeight: "550",
                  fontSize: "20px",
                  borderBottom: "1px solid lightgrey",
                  backgroundColor:"#ecedef",
                }}
              >
                Track Order
              </LargeFontWeight>
              <Backendground>
                <InputField>
                    <Padding>
                    <Text>
                        Phone Number <Redtext>*</Redtext>
                    </Text>
                    </Padding>
                    <Margin>
                    <Input
                        id="phone-number"
                        name="phone-number"
                        type="phone-number"
                        required={true}
                        placeholder="Phone Number"
                        onChange={onInputChange}
                    ></Input>
                    </Margin>
                    <Padding>
                    <Text>
                        Order ID
                    </Text>
                    </Padding>
                    <Margin>
                    <Input
                        id="phone-number"
                        name="phone-number"
                        type="phone-number"
                        placeholder="Order ID"
                        required={true}
                        onChange={onInputChange}
                    ></Input>
                    </Margin>
                </InputField>
                <InputField className="mb-0">
                    <Row>
                    <Col md={6}>
                    </Col>
                    <Col md={6}>
                        <Button onClick={() => {
                          console.log('asdfasdf')
                        }}>Check</Button>
                    </Col>
                    </Row>
                </InputField>
              </Backendground>
            </Form>
          </FormWrap>

          {error.length > 0 && (
            <AlertMessage
              mt={3}
              color="danger"
              isOpen={error}
              onClick={() => setError([])}
            >
              <ul>
                {error.map((item, idx) => (
                  <li key={idx}>{item?.message}</li>
                ))}
              </ul>
            </AlertMessage>
          )}
        </Col>
      </Container>
    </section>
  );
};

export default SigninForm;
