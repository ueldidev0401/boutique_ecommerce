import styled, {themeGet} from "@styled";

export const MobileNav = styled.nav`
  padding: 20px;

  ul {
    font-family: ${themeGet('fonts.body')};

    li {
      a {
        display: flex;
        font-size: 13px;
        align-items: center;
        padding: 5px 0;
        text-transform: uppercase;
        justify-content: space-between;
        color: ${themeGet('colors.dark2')};
        font-weight: ${themeGet('fontWeights.subHeading')};

        &:hover {
          color: ${themeGet('colors.primary')};
        }

        svg {
          font-size: 16px;
          line-height: 1;
          color: ${themeGet('colors.darkgray')};

          &.minus {
            display: none;
          }
        }

        &.mm-next-level {
          & ~ ul {
            display: none;
          }

          &.menu-expand {
            svg {
              &.minus {
                display: block;
              }

              &.plus {
                display: none;
              }
            }
          }
        }
      }

      ul {
        padding-left: 10px;

        a {
          padding-top: 3px;
          padding-bottom: 3px;
          text-transform: capitalize;
        }
      }
    }
  }
`