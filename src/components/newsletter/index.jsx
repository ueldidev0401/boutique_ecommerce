import Button from "@components/ui/button";
import {IoIosSend} from "react-icons/io";
import {Form, FormGroup, Label} from "@bootstrap";
import {FormNewsletter, Input} from "./newsletter.style";

const NewsletterForm = () => {
    return (
        <FormNewsletter mt={20}>
            <Form>
                <FormGroup className="mb-0">
                    <Label className="sr-only" for="newsletterInput">Newsletter</Label>
                    <Input
                        type="email"
                        id="newsletterInput"
                        placeholder="Enter E-mail Adheres"
                    />
                    <Button
                        tag="button"
                        color="white"
                        bg="primary"
                        hvrBg="heading"
                    >
                        <IoIosSend/>
                        Subscribe
                    </Button>
                </FormGroup>
            </Form>
        </FormNewsletter>
    );
};

export default NewsletterForm;