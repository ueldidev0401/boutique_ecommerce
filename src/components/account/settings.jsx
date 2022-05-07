import Cookies from "js-cookie";
import {useState} from "react";
import cogoToast from "cogo-toast";
import Input from "@components/ui/input";
import {totalDays} from "@utils/method";
import Button from "@components/ui/button";
import {decode, encode} from "js-base64";
import {SettingsForm} from "./account.style";
import {useSelector, useDispatch} from "react-redux";
import {previewModeNotification} from "@utils/constant";
import {AlertMessage} from "@components/auth/auth.style";
import {Row, Col, Form, Fieldset, Legend} from "@bootstrap";
import {saveCustomerData} from "@global/actions/customerAction";
import {InputField} from "@components/checkout/checkout-form.style";
import {client, customerUpdate, customerAccessTokenCreate} from "@graphql";

const SettingsContent = () => {
    const customer = useSelector((state) => state.customer);
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState({});
    const [error, setError] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const onInputChange = (e) => {
        const target = e.target;
        setFormValue((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(formValue).length) {
            const currentToken = decode(Cookies.get("access_token"));

            if (
                formValue?.password &&
                formValue?.current_pass &&
                formValue?.confirm_pass
            ) {
                setIsLoading(true);
                const updatedCustomer = formValue;
                if (formValue?.password === formValue?.confirm_pass) {
                    delete updatedCustomer.current_pass;
                    delete updatedCustomer.confirm_pass;
                    client(customerAccessTokenCreate(), {
                        input: {
                            email: customer?.email,
                            password: formValue?.password,
                        },
                    }).then((res) => {
                        console.log(res);

                        if (res?.customerAccessTokenCreate?.customerAccessToken) {
                            client(customerUpdate(), {
                                customerAccessToken: currentToken,
                                customer: updatedCustomer,
                            }).then((res) => {
                                setIsLoading(false);
                                setError([]);
                                setFormValue({});
                                e.target.reset();
                                const newToken =
                                    res?.customerUpdate?.customerAccessToken?.accessToken;
                                const expiresAt =
                                    res?.customerUpdate?.customerAccessToken?.expiresAt;
                                Cookies.set("access_token", encode(newToken), {
                                    expires: totalDays(expiresAt),
                                });
                                cogoToast.success("Successfully updated!", {
                                    position: "top-right",
                                });
                            });
                        }

                        if (
                            res?.customerAccessTokenCreate?.customerUserErrors?.length !== 0
                        ) {
                            setError([{message: "Current password not correct!"}]);
                            setIsLoading(false);
                            e.target.reset();
                        }
                    });
                } else {
                    setError([{message: "New Password doesn't match!"}]);
                    setIsLoading(false);
                }
            }

            if (formValue?.firstName || formValue?.lastName || formValue?.phone) {
                setIsLoading(true);
                const variables = {
                    customerAccessToken: currentToken,
                    customer: formValue,
                };
                client(customerUpdate(), variables)
                    .then((res) => {
                        if (res?.customerUpdate?.customer) {
                            e.target.reset();
                            dispatch(saveCustomerData(res?.customerUpdate?.customer));
                            cogoToast.success("Successfully updated!", {
                                position: "top-right",
                            });
                            setFormValue({});
                        }

                        setIsLoading(false);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        } else {
            setError([{message: "No have anything to changes!"}]);
        }
    };

    console.log(formValue);

    return (
        <SettingsForm>
            <Form onSubmit={process.env.NEXT_PUBLIC_DEMO_MODE === "true" ? previewModeNotification : onFormSubmit}>
                <Fieldset>
                    <Legend>Personal Info</Legend>
                    <Row>
                        <Col md={6}>
                            <InputField>
                                <Input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    label="First Name"
                                    onChange={onInputChange}
                                    defaultValue={customer?.firstName}
                                />
                            </InputField>
                        </Col>

                        <Col md={6}>
                            <InputField>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    label="Last Name"
                                    onChange={onInputChange}
                                    defaultValue={customer?.lastName}
                                />
                            </InputField>
                        </Col>
                    </Row>

                    <InputField>
                        <Input
                            id="displayName"
                            name="displayName"
                            label="Display Name"
                            value={customer?.displayName}
                            readOnly
                        />
                    </InputField>

                    <InputField>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            label="Email"
                            value={customer?.email}
                            readOnly
                        />
                    </InputField>

                    <InputField>
                        <Input
                            type="text"
                            id="phone"
                            name="phone"
                            label="Phone"
                            onChange={onInputChange}
                            defaultValue={customer?.phone}
                        />
                    </InputField>
                </Fieldset>

                <Fieldset>
                    <Legend>Password Change</Legend>
                    <InputField>
                        <Input
                            type="password"
                            id="current_pass"
                            name="current_pass"
                            onChange={onInputChange}
                            label="Current Password"
                        />
                    </InputField>

                    <Row>
                        <Col md={6}>
                            <InputField>
                                <Input
                                    type="password"
                                    id="password"
                                    name="password"
                                    label="New Password"
                                    onChange={onInputChange}
                                />
                            </InputField>
                        </Col>

                        <Col md={6}>
                            <InputField>
                                <Input
                                    type="password"
                                    id="confirm_pass"
                                    name="confirm_pass"
                                    label="Confirm Password"
                                    onChange={onInputChange}
                                />
                            </InputField>
                        </Col>
                    </Row>
                </Fieldset>

                <Button
                    tag="button"
                    bg="primary"
                    type="submit"
                    color="white"
                    hvrBg="secondary"
                    className="w-100"
                    fontSize="standard"
                    loading={isLoading}
                    textTransform="uppercase"
                >
                    Save Changes
                </Button>
            </Form>

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
        </SettingsForm>
    );
};

export default SettingsContent;
