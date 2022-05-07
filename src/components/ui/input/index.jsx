import {InputTag, TextAreaTag, Label} from "@components/ui/input/input.style";

const Input = ({className, ...props}) => {
    return (
        <>
            {props.label && <Label htmlFor={props.id}>{props.label}</Label>}
            <InputTag type={props.type ? props.type : 'text'} {...props}/>
        </>
    );
};

const TextArea = ({className, ...props}) => {
    return (
        <>
            {props.label && <Label htmlFor={props.id}>{props.label}</Label>}
            <TextAreaTag {...props}/>
        </>
    );
};

export {TextArea}

export default Input;
