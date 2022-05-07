import styled, {themeGet, space, devices} from "@styled";

export const BreadcrumbNavLink = styled.a`
  position: relative;
  color: ${themeGet('colors.text')};
  font-weight: ${themeGet('fontWeights.medium')};

  &::after {
    content: '';
    width: 0;
    right: 0;
    bottom: 0;
    left: auto;
    height: 1px;
    z-index: -1;
    position: absolute;
    background: currentColor;
    transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
  }

  &:hover {
    color: ${themeGet('colors.primary')};

    &::after {
      left: 0;
      right: auto;
      width: 100%;
      z-index: 0;
    }
  }
`

export const BreadcrumbNavItem = styled.li`
  line-height: 1;
  overflow: hidden;
  max-width: 200px;
  letter-spacing: 2px;
  white-space: nowrap;
  display: inline-block;
  text-overflow: ellipsis;
  text-transform: uppercase;
  font-family: ${themeGet('fonts.body')};
  font-size: ${themeGet('fontSizes.standard')};

  ${devices.sm} {
    font-size: 12px;
  }
`

export const BreadcrumbNav = styled.ul`
  margin-top: 10px;

  ${BreadcrumbNavItem} {
    & + ${BreadcrumbNavItem} {
      padding-left: 5px;

      &:before {
        float: left;
        content: "/";
        padding-right: 5px;
        color: ${themeGet('colors.text')};
      }
    }
  }
`

export const BreadcrumbTitle = styled.h2`
  margin: 0;
  font-size: 32px;
  overflow: hidden;
  line-height: 1.58;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-transform: uppercase;
  font-weight: ${themeGet('fontWeights.subHeading')};

  ${devices.md} {
    font-size: 28px;
  }

  ${devices.sm} {
    font-size: 20px;
  }
`

export const BreadcrumbWrap = styled.section`
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: ${themeGet('colors.gray100')};

  ${space}
`