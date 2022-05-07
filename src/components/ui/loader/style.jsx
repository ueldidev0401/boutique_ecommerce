import styled, {themeGet} from "@styled";
import {spin} from "@assets/css/keyframes";

export const LoaderStyle = styled.div`
  font-size: 13px;
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  font-family: ${themeGet('fonts.body')};
  font-weight: ${themeGet('fontWeights.subHeading')};

  svg {
    font-size: 45px;
    color: ${themeGet("colors.primary")};
  }

  & > * {
    animation: ${spin} 1s infinite;
  }
`