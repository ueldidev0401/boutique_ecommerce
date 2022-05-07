import styled, {css, devices, space, themeGet} from "@styled";

export const RelatedProductsWrapper = styled.section`
  ${space}
`

export const ProductNav = styled.div`
  ${space}
  li {
    padding: 0;
    cursor: pointer;
    font-size: 18px;
    margin-right: 30px;
    vertical-align: top;
    display: inline-block;
    text-transform: capitalize;
    color: ${themeGet('colors.text')};
    transition: ${themeGet('transition')};
    font-family: ${themeGet('fonts.body')};
    font-weight: ${themeGet('fontWeights.subHeading')};
    
    ${devices.xs}{
      margin-right: 10px;
      font-size: ${themeGet('fontSizes.body')};
    }
    

    &:hover, &.react-tabs__tab--selected {
      color: ${themeGet('colors.primary')};
    }
  }

  ${({align}) => align === "center" && css`
    text-align: center;
  `}
  ${({align}) => align === "left" && css`
    text-align: left;
  `}
  ${({align}) => align === "right" && css`
    text-align: right;
  `}
`