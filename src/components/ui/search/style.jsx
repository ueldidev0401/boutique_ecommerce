import styled, {css, devices, themeGet} from "@styled";
import {OffCanvasCloseBtn} from "@components/ui/offCanvas/style";

export const hiddenElem = css`
  visibility: hidden;
  pointer-events: none;
  opacity: 0;
`
export const visibleElem = css`
  visibility: visible;
  pointer-events: visible;
  opacity: 1;
`

export const SearchButton = styled.button`
  top: 0;
  right: 0;
  left: auto;
  width: 60px;
  height: 100%;
  display: flex;
  font-size: 20px;
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: 0 5px 5px 0;
  color: ${themeGet('colors.white')};
  background: ${themeGet('colors.primary')};
`;

export const SearchBox = styled.div`
  padding: 30px 25px 25px;
  transform: translateY(-100%);
  transition: ${themeGet('transition')};
  background-color: ${themeGet('colors.white')};

  .form-wrap {
    width: 50%;
    margin: auto;
    text-align: center;

    ${OffCanvasCloseBtn} {
      margin-top: 20px;
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
`

export const SearchBoxWrap = styled.aside`
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 999;
  height: 100vh;
  position: fixed;
  transition: ${themeGet('transition')};

  ${hiddenElem}
  .popular-searches {
    display: flex;
    margin-top: 15px;
    justify-content: center;
    font-family: ${themeGet('fonts.body')};

    h4 {
      margin-right: 10px;
      font-size: ${themeGet('fontSizes.standard')};
      font-weight: ${themeGet('fontWeights.subHeading')};
    }

    ul {
      display: flex;
      align-items: center;

      li {
        a {
          text-decoration: underline;
          color: ${themeGet('colors.dark')};
          transition: ${themeGet('transition')};
          font-size: ${themeGet('fontSizes.standard')};
          font-weight: ${themeGet('fontWeights.subHeading')};

          &:hover {
            color: ${themeGet('colors.primary')};
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
    background-color: rgba(0, 0, 0, 0.5);

    ${hiddenElem}
  }

  ${({show}) => show && css`
    ${visibleElem}
    ${SearchBox} {
      transform: none;
    }

    .overlay {
      ${visibleElem}
    }
  `}
`