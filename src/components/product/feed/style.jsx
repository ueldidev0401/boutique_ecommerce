import styled, { css, devices, space, themeGet } from "@styled";

export const RelatedProductsWrapper = styled.section`
  ${space}
`;

export const LargeFontWeight = styled.p`
  font-size: ${themeGet("fontSizes.body")};
  font-weight: 1000;
`;

export const CommonFontWeight = styled.span`
  font-size: ${themeGet("fontSizes.body")};
  font-weight: ${themeGet("fontWeights.body")};
`;

export const CustomButton = styled.button`
  background-color: #E84242;
  border: none;
  color: white;
  padding: 8px 58px 13px 56px;
  text-align: center;
  font-size: 16px;
  opacity: 0.8;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  border-radius: 4px;
  margin-top:67px;
  &:hover { 
    opacity: 1
  }
`;

export const TextAreaCustom = styled.textarea`
  width: 100%;
  height: 200px;
  outline: 0;
  border-width: 0 0 2px;
  border-color: grey;
  &:focus {
    outline: 1;
    border-width: 1px 1px 2px 1px;
    border-color: #ea596e;
  }
`;

export const CustomInput = styled.input`
  outline: 0;
  border-width: 0 0 2px;
  border-color: grey;
  width: 100%;
  padding-bottom: 10px;
  font-size: 18px;
  margin-bottom: 40px;
  &:focus {
    border-color: #ea596e;
  }
`;

export const ProductNav = styled.div`
  ${space}

  li {
    padding: 0;
    cursor: pointer;
    font-size: 18px;
    margin-right: 30px;
    vertical-align: top;
    display: inline-block;
    text-transform: capitalize;
    color: ${themeGet("colors.text")};
    transition: ${themeGet("transition")};
    font-family: ${themeGet("fonts.body")};

    ${devices.xs} {
      margin-right: 10px;
      font-size: ${themeGet("fontSizes.body")};
    }

    &:hover,
    &.react-tabs__tab--selected {
      color: #000;
    }
    .aboutus {
      width: 80%;
      padding-left: 40px;
    }
  }

  li:hover,active {
    font-weight: ${themeGet("fontWeights.subHeading")};
    text-decoration: underline;
    text-decoration-color: red;
    text-underline-offset: 13px;
  }

  ${({ align }) =>
    align === "center" &&
    css`
      text-align: center;
    `}
  ${({ align }) =>
    align === "left" &&
    css`
      text-align: left;
    `}
  ${({ align }) =>
    align === "right" &&
    css`
      text-align: right;
    `}
`;
