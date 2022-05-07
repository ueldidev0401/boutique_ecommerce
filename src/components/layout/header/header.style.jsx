import styled, {color, themeGet, devices, css} from "@styled";

export const CartItemCount = styled.span`
  font-size: 10px;
  font-weight: ${themeGet('fontWeights.body')};
  line-height: 17px;
  position: absolute;
  z-index: 2;
  top: -14px;
  right: 4px;
  height: 17px;
  width: 17px;
  text-align: center;
  color: ${themeGet('colors.white')};
  border-radius: ${themeGet('radii.circle')};
  background-color: #E84242;
`

const HeaderBtnStyle = css`
  padding: 0;
  line-height: 1;
  position: relative;
  text-decoration: none;
  background-color: transparent;
  color: ${themeGet('colors.black')};

  &:hover {
    color: ${themeGet('colors.primary')};
  }

  svg {
    font-size: 24px;
    line-height: 1;
  }
`

export const HeaderActionBtn = styled.button`
  ${HeaderBtnStyle}
`

export const HeaderActionAnchor = styled.a`
  ${HeaderBtnStyle}
`

export const ActionItem = styled.div`
  position: relative;
  line-height: 1;

  button {
    padding-left: 0;
    padding-right: 0;
  }
`

export const HeaderAction = styled.div`
  display: flex;
  justify-content: flex-end;

  & > * {
    & + * {
      padding-left: 18px;
      margin-left: 18px;

      &:before {
        content: "";
        left: 0;
        top: 50%;
        width: 2px;
        height: 22px;
        position: absolute;
        transform: translateY(-50%);
        background-color: ${themeGet('colors.borderLight')};
      }

      ${devices.xs} {
        padding-left: 13px;
        margin-left: 10px;
      }
    }
  }
`

export const HeaderBottomWrap = styled.div`
  padding: 30px 0;
  position: relative;
  height: 111px;
  ${devices.md} {
    padding: 15px 0;
  }

  [class*='col'] {
    line-height: 1;
  }
`

export const HeaderTopSetLanCurr = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  font-family: ${themeGet('fonts.heading')};

  ${devices.sm} {
    justify-content: center;
  }
`

export const HeaderTopMessage = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 0;
  font-style: italic;
  color: ${themeGet("colors.primary")};
  font-family: ${themeGet("fonts.heading")};
`

export const HeaderTopWrap = styled.div`
  ${color};

  padding: 11px 0;
  background-color: ${themeGet("colors.secondary")};
`

export const HeaderArea = styled.header`
  ${devices.md} {
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    position: fixed;
    background-color: ${themeGet('colors.white')};
    border-bottom: 1px solid ${themeGet('colors.borderLight')};
  }
`