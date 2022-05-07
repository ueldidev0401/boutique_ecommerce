import {Alert} from "@bootstrap";
import styled, {devices, themeGet, space} from "@styled";

export const AlertMessage = styled(Alert)`
  ${space};
  margin-bottom: 0 !important;
  font-family: ${themeGet('fonts.body')};
  font-size: ${themeGet('fontSizes.standard')};

  ul {
    list-style: square;
    padding-left: 20px;

    li {
      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }
  }
`

export const LoginFormWrap = styled.div`

`

export const FormWrap = styled.div`
  padding: 50px 30px;
  box-shadow: ${themeGet("shadows.default")};

  ${devices.xs} {
    padding: 30px 20px;
  }
`