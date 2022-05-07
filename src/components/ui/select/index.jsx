import {Label} from "@bootstrap";
import {customStyles} from "./style";
import ReactSelect from "react-select";
import styled, {themeGet} from "@styled";

const LabelStyle = styled(Label)`
  font-weight: ${themeGet('fontWeights.subHeading')};
`

const Select = ({...props}) => {
    return (
        <>
            {props.label && <LabelStyle>{props.label}</LabelStyle>}
            <ReactSelect styles={{...customStyles}} {...props}/>
        </>

    );
};

export default Select;
