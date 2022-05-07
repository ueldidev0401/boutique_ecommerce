import styled, {devices, themeGet} from "@styled";

export const ErrorMessageWrap = styled.div`
  margin: auto;
  padding: 15px;
  max-width: 400px;
  text-align: center;
  border-radius: ${themeGet('radii.md')};
  box-shadow: rgba(100, 100, 111, 0.2) 0 5px 29px 0;

  ${devices.sm} {
    margin: 0 15px;
  }

  svg {
    font-size: 40px;
  }

  h2 {
    font-weight: ${themeGet('fontWeights.medium')};
  }
`