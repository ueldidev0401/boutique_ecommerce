import styled, {color, themeGet, css} from "@styled";

export const Nav = styled.nav`
  display: flex;
  justify-content: ${props => props.align ? props.align : 'center'};
`

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;

  & > li {
    & + {
      li {
        margin-left: 40px;
      }
    }

    a {
      display: block;
      line-height: 60px;
      letter-spacing: .5px;
      text-decoration: none;
      text-transform: capitalize;
      color: ${themeGet('colors.white')};
      font-family: ${themeGet('fonts.body')};
      font-size: ${themeGet('fontSizes.standard')};

      svg {
        transform: translate(2px, 3px);
      }
    }

    &.dropdown {
      position: relative;

      &:hover {
        ul {
          pointer-events: visible;
          transform: none;
          opacity: 1;
          visibility: visible;
        }
      }
    }

    &:hover, &.active {
      & > a {
        color: ${themeGet('colors.primary')};
      }
    }
  }
`

export const SubMenu = styled.ul`
  background-color: ${themeGet('colors.white')};
  position: absolute;
  z-index: 2;
  text-align: left;
  min-width: 205px;
  left: auto;
  box-shadow: 0 0 3.76px 0.24px rgba(0, 0, 0, 0.15);
  transform-style: preserve-3d;
  transform: rotateX(-75deg);
  transform-origin: 0 0;
  transition: transform 0.4s, opacity 0.3s;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;

  li {

    a {
      display: block;
      line-height: 19px;
      padding: 10px 0 10px 20px;
      border-bottom: 1px solid ${themeGet('colors.borderLight')};
      height: 40px;
      color: ${themeGet('colors.black')};

      &:hover {
        color: ${themeGet('colors.primary')};
      }
    }
  }
`

export const NavbarWrap = styled.div`
  ${color};
  position: relative;

  ${NavList} {
    & > li {
      a {
        ${({bg}) => bg !== "secondary" && css`
          color: ${themeGet("colors.secondary")};
        `}
      }

      &:hover, &.active {
        & > a {
          color: ${themeGet('colors.primary')};
        }

        ul {
          li {
            a {
              &:hover {
                color: ${themeGet('colors.primary')};
              }
            }
          }
        }
      }
    }
  }
`