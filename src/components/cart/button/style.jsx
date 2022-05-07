import {bounce} from "@assets/css/keyframes";
import styled, {devices, themeGet} from "@styled";

export const Price = styled.span`
  width: 65px;
  height: 25px;
  padding: 0 5px;
  margin-top: 5px;
  line-height: 25px;
  color: ${themeGet('colors.primary')};
  border-radius: ${themeGet('radii.sm')};
  font-size: ${themeGet('fontSizes.standard')};
  background-color: ${themeGet('colors.white')};
  font-weight: ${themeGet('fontWeights.heading')};
`

export const CartButtonWrap = styled.button`
  right: 0;
  margin: 0;
  padding: 15px;
  display: flex;
  z-index: 999;
  position: fixed;
  align-items: center;
  top: calc(110px + 30%);
  flex-direction: column;
  border-radius: 3px 0 0 3px;
  color: ${themeGet('colors.white')};
  box-shadow: 0 0 16px -1px rgb(0 0 0 / 75%);
  font-family: ${themeGet('fonts.body')};
  background-color: ${themeGet('colors.secondary')};
  font-weight: ${themeGet('fontWeights.subHeading')};

  &.animated {
    animation-duration: 1s;
    animation-name: ${bounce};
    animation-fill-mode: both;
    transform-origin: center bottom;
  }

  ${devices.sm} {
    display: none;
  }

  svg {
    font-size: 20px;
    margin-bottom: 3px;
    color: ${themeGet('colors.primary')};
  }
`