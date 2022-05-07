import styled, {css, themeGet} from "@styled";

export const DropdownToggleButton = styled.button`
  border: none;
  display: flex;
  cursor: pointer;
  font-size: 14px;
  padding-left: 15px;
  border-radius: 3px;
  align-items: center;
  transition: all .3s ease 0s;
  background-color: transparent;
  font-family: ${themeGet("fonts.heading")};
  color: ${props => props.color ? props.color : themeGet('colors.white')};

  svg {
    font-size: 18px;
    margin-left: 7px;
    line-height: 23px;
    transition: all .3s ease 0s;
  }

  &.header-action-btn {
    svg {
      margin-left: 0;
      line-height: 1;
      font-size: 24px;
    }
  }

  &:hover {
    color: ${themeGet('colors.primary')};
  }
`;

export const DropdownWrap = styled.div`
  position: relative;

  &:not(:last-child) {
    button {
      padding-right: 15px;
      border-right: 1px solid ${themeGet('colors.borderDark')};
    }
  }
`

export const DropdownMenu = styled.ul`
  margin: 0;
  top: 45px;
  opacity: 0;
  z-index: 9;
  border: none;
  padding: 0 15px;
  min-width: 130px;
  border-radius: 0;
  overflow: hidden;
  position: absolute;
  pointer-events: none;
  transition: ${themeGet('transition')};
  background: ${themeGet('colors.white')};
  box-shadow: 0 3px 25.5px 4.5px rgb(0 0 0 / 6%);

  li {
    &:not(:last-child) {
      border-bottom: 1px solid ${themeGet("colors.borderLight")};
    }

    a {
      padding: 10px;
      font-size: 13px;
      display: block;
      line-height: 25px;
      text-decoration: none;
      color: ${themeGet("colors.text")};

      &:hover {
        color: ${themeGet('colors.primary')};
      }
    }
  }

  &.show {
    top: 34px;
    opacity: 1;
    pointer-events: visible;
  }

  ${props => props.align === 'left' && css`
    left: 0;
    right: auto;
  `}

  ${props => props.align === 'right' && css`
    right: 0;
    left: auto;
  `}

  ${props => props.align === 'center' && css`
    right: 0;
    left: 50%;
    transform: translateX(-50%);
  `}
`;