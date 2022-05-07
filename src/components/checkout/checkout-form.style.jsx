import {FormGroup} from "@bootstrap";
import styled, {devices, space, themeGet} from "@styled";

export const InputNote = styled.p`
  font-size: 13px;

  a {
    color: ${themeGet('colors.text')};
    font-weight: ${themeGet("fontWeights.subHeading")};
    
    &:hover{
      color: ${themeGet('colors.primary')};
    }
  }
`

export const InputField = styled(FormGroup)`
  margin-bottom: 25px !important;

  ${devices.sm} {
    margin-bottom: 15px !important;
  }
`

export const FormCheckout = styled.div`
  ${space}
`