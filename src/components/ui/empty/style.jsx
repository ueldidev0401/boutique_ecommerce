import styled, {devices, themeGet, space} from "@styled";

export const EmptyContent = styled.div`
  text-align: center;
  margin-top: 100px;

  ${devices.md} {
    margin-top: 20px;
  }

  svg {
    font-size: 100px;
    color: ${themeGet('colors.primary')};
  }

  h2 {
    font-size: 20px;
    color: ${themeGet('colors.heading')};
    margin-top: 15px;
    font-weight: ${themeGet('fontWeights.subHeading')};

    ${devices.sm} {
      font-size: 18px;
    }
  }
`

export const EmptyHeading = styled.h2`
  color: ${themeGet('colors.heading')};
  text-align: left;
  font-size: 24px;
  line-height: 16px;
  font-style: normal;
  text-transform: none;
  margin: 0 0 30px;
  font-weight: ${themeGet('fontWeights.subHeading')};
`
