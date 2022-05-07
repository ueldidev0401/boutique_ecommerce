import styled, {devices, themeGet, css, typography} from "@styled";

export const SliderThumb = styled.div`
  &:not(.style-2) {
    img {
      ${devices.md} {
        height: 250px;
      }

      ${devices.sm} {
        width: 300px;
        height: 250px;
        margin-bottom: 10px;
      }
    }
  }

  &.style-2 {
    img {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      object-position: center;
      animation: none !important;
    }
  }
`

export const SlideSubTitle = styled.h4`
  font-size: 24px;
  line-height: 1;
  color: ${themeGet('colors.text')};
  font-weight: ${themeGet('fontWeights.subHeading')};
`

export const SlideTitle = styled.h2`
  font-size: 72px;
  margin-bottom: 10px;
  font-weight: ${themeGet('fontWeights.heading')};

  ${devices.md} {
    font-size: 50px;
  }

  ${devices.sm} {
    font-size: 32px;
  }
`

export const SlideContent = styled.div`
  z-index: 1;
  position: relative;
  ${typography};

  & > p {
    max-width: 470px;

    ${props => props.textAlign === "center" && css`
      margin: auto;
    `}
  }

  ${props => props.mode === "light" && css`
    & > * {
      color: ${themeGet("colors.white")};
    }
  `}
`

export const SlideItem = styled.div`
  height: 750px;
  display: flex;
  background-color: ${themeGet('colors.offWhite')};

  ${devices.md} {
    height: 600px;
  }

  ${devices.sm} {
    height: 500px;
  }

  ${devices.xs} {
    height: auto;
    padding: 100px 0;
  }

  & > div {
    align-self: center;
  }
`