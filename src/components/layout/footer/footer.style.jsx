import styled, {space, color, themeGet, devices} from "@styled";

export const CopyrightText = styled.p`
  color: ${themeGet('colors.white')};
  font-size: 13px;
  font-family: ${themeGet('fonts.heading')};
  line-height: 26px;
  
  .company-name {
      color: ${themeGet('colors.white')};
      font-weight: ${themeGet('fontWeights.heading')};
      
      &:hover {
          color: ${themeGet('colors.primary')};
      }
  }
  
  svg{
      margin: 0 1px;
      vertical-align: middle;
      color: ${themeGet('colors.danger')};
      font-size: ${themeGet('fontSizes.standard')};
  }
`

export const FooterBottomWrapper = styled.div`
  ${color}
  ${space}
`

export const WidgetWrapper = styled.div`
  ${space};
  ${color};
`

export const FooterWrap = styled.footer`
  ${space};
  ${color};
`
export const SocialIcons = styled.ul`
  ${space};

  li {
    a {
      color: ${themeGet('colors.offWhite')};
      line-height: 38px;
      width: 32px;
      height: 32px;
      text-align: center;
      background-color: transparent;
      display: block;
      border-radius: ${themeGet('radii.circle')};

      &:hover {
        background-color: ${themeGet('colors.primary')};
      }
    }
  }
`