import styled, {space, themeGet, devices} from "@styled";

export const WidgetBody = styled.div`
  ${space}
  .about-text {
    font-size: ${themeGet('fontSizes.standard')};
    max-width: 290px;
    line-height: 24px;

    ${devices.sm} {
      max-width: 454px;
    }
  }

  p {
    color: ${themeGet('colors.white')};
  }

  .widget-list {
    margin-bottom: 0;
    
    li {
      &:not(:last-child) {
        margin-bottom: 8px;
      }

      a {
        font-size: ${themeGet('fontSizes.standard')};
        line-height: 24px;
        padding: 0;
        color: ${themeGet('colors.white')};
        transition: ${themeGet('transition')};

        &:hover {
          padding-left: 6px;
          color: ${themeGet('colors.primary')};
        }
      }
    }
  }
`

export const WidgetTitle = styled.h4`
  font-size: 15px;
  font-weight: 500;
  position: relative;
  margin-bottom: 15px;
  letter-spacing: 1.2px;
  color: ${themeGet('colors.white')};
`

export const WidgetItem = styled.div`
    ${space}
`