import styled, { themeGet, css, layout } from "@styled";
import { devices } from "@styled";

export const OffCanvasCloseBtn = styled.button`
  position: relative;
  width: 20px;
  height: 20px;
  text-indent: -9999px;
  border: 0;
  background-color: transparent;

  &:after,
  &:before {
    content: "";
    position: absolute;
    top: calc(50% - 1px);
    left: 0;
    width: 20px;
    height: 2px;
    transition: ${themeGet("transition")};
    transform: rotate(-45deg);
    background-color: ${themeGet("colors.primary")};
  }

  &::before {
    transform: rotate(45deg);
  }

  &:hover {
    &:before {
      transform: rotate(180deg);
    }

    &:after {
      transform: rotate(0deg);
    }
  }
`;

export const OffCanvasTitle = styled.h3`
  font-size: 20px;
  color: ${themeGet("colors.heading")};
  font-family: ${themeGet("fonts.body")};
  font-weight: ${themeGet("fontWeights.heading")};
`;

export const OffCanvasHead = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${themeGet("colors.borderLight")};
`;

export const OffCanvasContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const OffCanvasInner = styled.div`
  width: 100%;
  height: 100%;
  max-width: 385px;
  margin-left: auto;
  position: relative;
  transform: translateX(100%);
  transition: ${themeGet("transition")};
  background-color: ${themeGet("colors.white")};
  ${layout};
`;

export const OffCanvasOverlay = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const OffCanvasWrap = styled.aside`
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  transition: ${themeGet("transition")};
  font-size: ${themeGet("fontSizes.standard")};
  font-weight: ${themeGet("fontWeights.body")};

  ${({ open }) =>
    open &&
    css`
      opacity: 1;
      visibility: visible;
      pointer-events: visible;

      ${OffCanvasInner} {
        transform: translateX(0);
      }

      ${OffCanvasOverlay} {
        opacity: 1;
        visibility: visible;
        pointer-events: visible;
      }
    `}

  ${({ position }) =>
    position === "center" &&
    css`
      ${devices.sm} {
        padding: 0 15px;
      }
      ${OffCanvasInner} {
        top: 50%;
        margin: auto;
        height: auto;
        overflow-y: auto;
        max-height: 700px;
        transform: translateY(-50%);
      }
    `}
`;
