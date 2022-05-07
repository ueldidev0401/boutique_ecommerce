import {Form, FormGroup} from "@bootstrap";
import Input from "@components/ui/input";
import Button from "@components/ui/button";
import {EstimateCartItem, CouponForm} from "@components/cart/cart.style";

const Coupon = (props) => {
    return (
        <EstimateCartItem {...props}>
            <Form>
                <CouponForm>
                    <FormGroup className="mb-0">
                        <Input
                            type="text"
                            placeholder="Enter your coupon code if you have one"
                        />
                    </FormGroup>

                    <FormGroup className="mb-0">
                        <Button
                            tag="button"
                            bg="primary"
                            color="white"
                            hvrColor="white"
                            hvrBg="secondary"
                            fontSize="standard"
                            borderTopRightRadius={3}
                            borderBottomRightRadius={3}
                        >
                            Apply Coupon
                        </Button>
                    </FormGroup>
                </CouponForm>
            </Form>
        </EstimateCartItem>
    );
};

export default Coupon;
