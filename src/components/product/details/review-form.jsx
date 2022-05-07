import {useState} from "react";
import Button from "@components/ui/button";
import StarRating from "@components/ui/star-rating";
import {Form, FormGroup, Row, Col} from "@bootstrap";
import Input, {TextArea} from "@components/ui/input";
import {Label} from "@components/ui/input/input.style";
import {ReviewFormWrap} from "@components/product/details/details.style";

const defaultValue = {
    rating: 0,
    name: "",
    message: "",
    email: ""
}

const ReviewForm = ({getReviewValue}) => {
    const [formValue, setFormValue] = useState(defaultValue);

    const getRatingValue = value => {
        setFormValue(prevState => {
            return {
                ...prevState,
                rating: value
            }
        })
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const state = formValue;
        setFormValue(defaultValue);
        getReviewValue(state);
    }

    const onChangeHandler = (event) => {
        const target = event.target;
        setFormValue(prevState => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    return (
        <ReviewFormWrap>
            <h3>Add your Review</h3>

            <Form onSubmit={onSubmitHandler}>
                <FormGroup className="mb-3 d-flex">
                    <Label className="mr-3 mb-0">Your Rating:</Label>
                    <StarRating getRatingValue={getRatingValue}/>
                </FormGroup>

                <FormGroup className="mb-3">
                    <TextArea
                        rows={5}
                        id="message"
                        name="message"
                        label="Message"
                        value={formValue?.message}
                        onChange={onChangeHandler}
                    />
                </FormGroup>

                <Row>
                    <Col md={6}>
                        <FormGroup className="mb-3 mb-md-0">
                            <Input
                                id="name"
                                type="text"
                                name="name"
                                label="Name"
                                value={formValue?.name}
                                onChange={onChangeHandler}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup className="mb-0">
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                label="Email"
                                value={formValue?.email}
                                onChange={onChangeHandler}
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup className="mb-0 mt-4">
                    <Button
                        type="submit"
                        tag="button"
                        bg="primary"
                        color="white"
                        hvrBg="secondary"
                        borderRadius="3px"
                    >
                        Submit
                    </Button>
                </FormGroup>
            </Form>
        </ReviewFormWrap>
    );
};

export default ReviewForm;
