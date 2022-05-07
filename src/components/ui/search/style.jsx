import styled, { css, devices, themeGet } from "@styled";

import { OffCanvasCloseBtn } from "@components/ui/offCanvas/style";

export const hiddenElem = css`
  visibility: hidden;
  pointer-events: none;
  opacity: 0;
`;
export const visibleElem = css`
  visibility: visible;
  pointer-events: visible;
  opacity: 1;
`;

export const SearchButton = styled.button`
  width: 50px;
  height: 38px;
  position: absolute;
  margin-left: 76%;
  top: 30px;
  color: ${themeGet("colors.white")};
  background: ${themeGet("colors.primary")};
`;

export const SearchBox = styled.div`
  position:absoulte;
  margin-top:111px;
  width:99%;
  height:107px;
  backdrop-filter: blur(20px);
  border:1px solid rgb(212, 212, 212);
 
    .searchInput{
      width:45%;
      margin-left: 14%;
      top:28px;
      position: absolute;
      padding-left: 20px;
      padding-top: 11px;
      padding-bottom:11px;
      background-color:white;
      border-color:white;
    }
    .selectoption{
      width:14%;
      height:40px;
      position: absolute;
      margin-left:61%;
      top:28px;
    }
    .close_search{
      width:3%;
        height:50px;
        cursor: pointer;
        z-index:99;
        position: absolute;
        margin-left:90%;
        top:28px;
    }
    ${devices.md} {
      width: 95%;
    }

    form {
      position: relative;

      input {
        background-color: transparent;

        &:focus {
          border-color: ${themeGet("colors.primary")};
        }
      }
    }
  }
`;

export const SearchBoxWrap = styled.aside`
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 999;
  height: 100vh;
  position: absolute;
  transition: ${themeGet("transition")};

  ${hiddenElem}
  .popular-searches {
    display: flex;
    margin-top: 15px;
    justify-content: center;
    font-family: ${themeGet("fonts.body")};

    h4 {
      margin-right: 10px;
      font-size: ${themeGet("fontSizes.standard")};
      font-weight: ${themeGet("fontWeights.subHeading")};
    }

    ul {
      display: flex;
      align-items: center;

      li {
        a {
          text-decoration: underline;
          color: ${themeGet("colors.dark")};
          transition: ${themeGet("transition")};
          font-size: ${themeGet("fontSizes.standard")};
          font-weight: ${themeGet("fontWeights.subHeading")};

          &:hover {
            color: ${themeGet("colors.primary")};
          }
        }

        &:not(:last-child) {
          margin-right: 8px;
        }
      }
    }
  }

  .overlay {
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
    height: 100%;
    cursor: pointer;
    position: absolute;

    ${hiddenElem}
  }

  ${({ show }) =>
    show &&
    css`
      ${visibleElem}
      ${SearchBox} {
        transform: none;
      }

      .overlay {
        ${visibleElem}
      }
    `}
`;
