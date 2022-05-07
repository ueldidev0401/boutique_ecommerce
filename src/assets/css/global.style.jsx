import styled, {createGlobalStyle, devices, themeGet} from "@styled";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-style: normal;
    position: relative;
    visibility: visible;
    color: ${themeGet("colors.text")};
    font-family: ${themeGet("fonts.body")};
    font-size: ${themeGet("fontSizes.body")};
    font-weight: ${themeGet("fontWeights.body")};
    line-height: ${themeGet("lineHeights.body")};

    &[dir="rtl"] {
      text-align: right;
    }
  }

  strong {
    font-weight: ${themeGet('fontWeights.heading')};
  }

  img {
    display: block;
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${themeGet("colors.heading")};
    font-family: ${themeGet("fonts.heading")};
  }

  a,
  button {
    border: 0;
    text-decoration: none;
    background-color: transparent;
    transition: ${themeGet("transition")};
  }

  a {
    &:hover {
      color: ${themeGet('colors.primary')};
    }
  }

  button {
    cursor: pointer;
    box-shadow: none;
    outline: 0;
  }

  textarea {
    width: 100%;
    padding-left: 20px;
    padding-top: 20px;
    outline: 0;
  }

  .form-control {
    &.furns-form-control {
      min-height: 50px;
      padding: 6px 80px 6px 20px;
      font-family: ${themeGet("fonts.body")};
      font-weight: ${themeGet("fontWeights.body")};
      line-height: ${themeGet("lineHeights.body")};
      color: ${themeGet("colors.text")};
      border-radius: ${themeGet("radii.sm")};

      &:focus {
        border-color: ${themeGet('colors.primary')};
      }
    }
  }

  label {
    margin-bottom: 15px;
  }

  p {
    color: ${themeGet("colors.text")};
    font-family: ${themeGet("fonts.body")};

    &:last-child {
      margin-bottom: 0;
    }
  }

  input:focus,
  button:focus {
    outline: 0;
    box-shadow: none;
  }

  .mtn-30 {
    margin-top: -30px;
  }

  .products-grid-mobile {
    &.row {
      ${devices.xs} {
        margin-left: -5px;
        margin-right: -5px;

        [class*='col'] {
          padding-left: 5px;
          padding-right: 5px;
        }
      }
    }
  }

  .ct-heading {
    font-size: 12px;
  }

  .overflow {
    overflow: hidden;
  }

  .modal {
    text-align: center;

    &:before {
      content: "";
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }

    &-dialog {
      display: inline-block;
      vertical-align: middle;
    }

    &-lg {
      max-width: 85%;
    }

    &-body {
      overflow: hidden;
      text-align: left;

      ${devices.md} {
        overflow-y: auto;
        max-height: 80vh;
      }
    }

    &.ht-modal {
      .modal {
        &-content {
          border: none;
          border-radius: 0;
        }

        &-lg {
          @media (min-width: 768px) {
            max-width: 750px;
          }
          @media (min-width: 992px) {
            max-width: 960px;
          }
        }

        &-body {
          padding-top: 30px;
          padding-bottom: 30px;
        }
      }
    }

    .btn-close {
      top: -10px;
      right: -10px;
      width: 25px;
      height: 25px;
      z-index: 99;
      position: absolute;
      border-radius: ${themeGet('radii.circle')};
      background-color: ${themeGet('colors.primary')};

      &:before, &:after {
        left: 7px;
        width: 12px;
        background-color: ${themeGet('colors.white')};
      }
    }
  }


  .about-page-wrapper {
    h2 {
      font-size: 32px;
      font-weight: ${themeGet("fontWeights.heading")};
    }

    h4 {
      font-size: 20px;
      margin-bottom: 15px;
      font-weight: ${themeGet("fontWeights.subHeading")};
    }

    .about-store {
      line-height: 2;
      font-size: ${themeGet("fontSizes.standard")};
    }
  }
`

export const ErrorPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 32px;
    margin: 20px 0 10px;
    font-family: ${themeGet("fonts.body")};
    font-weight: ${themeGet("fontWeights.heading")};
  }
`