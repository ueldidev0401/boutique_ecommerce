import settings from "@data/settings"
import {Form, Col, Row} from "@bootstrap";
import Select from "@components/ui/select";
import Input, {TextArea} from "@components/ui/input";
import {FormCheckout, InputField} from "@components/checkout/checkout-form.style";

const CheckoutForm = () => {
    return (
        <FormCheckout>
            <Form>
                <Row>
                    <Col md={6}>
                        <InputField>
                            <Input
                                id="first_name"
                                label="First Name"
                            />
                        </InputField>
                    </Col>

                    <Col md={6}>
                        <InputField>
                            <Input
                                id="last_name"
                                label="Last Name"
                            />
                        </InputField>
                    </Col>
                </Row>

                <InputField>
                    <Input
                        id="company"
                        label="Company Name"
                    />
                </InputField>

                <InputField>
                    <Select
                        label="Country"
                        name="country"
                        id="country"
                        options={settings.countries}
                    />
                </InputField>

                <InputField>
                    <Input
                        id="address"
                        name="address"
                        label="Street Address"
                        placeholder="House number and street name"
                    />
                    <div className="mt-3">
                        <Input
                            id="address2"
                            name="address2"
                            placeholder="Apartment, suite, unit etc."
                        />
                    </div>
                </InputField>

                <InputField>
                    <Input
                        id="city"
                        label="Town / City"
                    />
                </InputField>

                <Row>
                    <Col md={6}>
                        <InputField>
                            <Input
                                id="state"
                                label="State / Division"
                            />
                        </InputField>
                    </Col>

                    <Col md={6}>
                        <InputField>
                            <Input
                                id="zip"
                                label="Zip Code"
                            />
                        </InputField>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <InputField>
                            <Input
                                id="phone"
                                label="Phone"
                            />
                        </InputField>
                    </Col>

                    <Col md={6}>
                        <InputField>
                            <Input
                                id="email"
                                type="email"
                                label="Email"
                            />
                        </InputField>
                    </Col>
                </Row>

                <InputField>
                    <TextArea
                        rows="5"
                        label="Order notes"
                        placeholder="Notes about your order, e.g. special notes for delivery."
                    />
                </InputField>
            </Form>
        </FormCheckout>
    );
};

export default CheckoutForm;
