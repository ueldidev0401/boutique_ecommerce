import styled, {devices, themeGet} from "@styled";
import {spinAround} from "@assets/css/keyframes";

export const CatName = styled.h4`
  margin: 12px 0 0;
  color: ${themeGet('colors.text')};
  transition: ${themeGet('transition')};
  font-weight: ${themeGet('fontWeights.subHeading')};

  ${devices.xs} {
    font-size: 13px;
  }
`

export const CatItemInner = styled.div`
  align-self: center;
  text-align: center;

  img {
    margin: auto;
  }
`

export const CategoryItem = styled.a`
  margin: auto;
  width: 180px;
  height: 180px;
  display: flex;
  position: relative;
  justify-content: center;
  transition: ${themeGet('transition')};
  border-radius: ${themeGet('radii.circle')};
  border: 2px solid ${themeGet('colors.borderDark')};

  ${devices.sm} {
    width: 140px;
    height: 140px;
  }

  ${devices.xs} {
    width: 130px;
    height: 130px;
  }

  &:after {
    content: "";
    top: -1px;
    left: -1px;
    opacity: 0;
    z-index: -1;
    right: -1px;
    bottom: -1px;
    position: absolute;
    transition: ${themeGet('transition')};
    border-radius: ${themeGet('radii.circle')};
    border: 2px dashed ${themeGet('colors.primary')};
  }

  &:hover {
    border-color: transparent;

    &:after {
      opacity: 1;
      animation: ${spinAround} 9s linear infinite;
    }
  }
`