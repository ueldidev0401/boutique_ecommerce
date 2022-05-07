import styled, {css, themeGet} from "@styled";
import {fadeInUp, fadeOutUp} from "@assets/css/keyframes";
import {SlideContent, SliderThumb} from "@components/slider/slider.style";

export const SliderWrap = styled.div`
  position: relative;
  transition: ${themeGet('transition')};

  ${({arrows}) => arrows && css`
    .swiper-button {
      &-next,
      &-prev {
        top: 50%;
        z-index: 9;
        width: 40px;
        height: 40px;
        margin: auto;
        line-height: 40px;
        position: absolute;
        visibility: hidden;
        text-align: center;
        transform: translateY(-50%);
        color: ${themeGet('colors.heading')};
        transition: ${themeGet('transition')};
        border-radius: ${themeGet('radii.circle')};
        background-color: ${themeGet('colors.white')};
        box-shadow: 0 3px 25.5px 4.5px rgba(0, 0, 0, .06);

        &:hover {
          color: ${themeGet('colors.white')};
          background-color: ${themeGet('colors.primary')};
        }

        &:after {
          font-size: ${themeGet('fontSizes.standard')};
        }
      }

      &-prev {
        outline: 0;
        right: auto;
        left: -20px;

        &:after {
          margin-right: 3px;
        }
      }

      &-next {
        outline: 0;
        left: auto;
        right: -20px;

        &:after {
          margin-left: 3px;
        }
      }

      &-disabled {
        opacity: 0.1;
      }
    }

    &:hover {
      .swiper-button {
        &-prev, &-next {
          visibility: visible;
        }

        &-prev {
          left: 10px;
        }

        &-next {
          right: 10px;
        }
      }
    }
  `}

  ${({dots}) => dots && css`
    .swiper-pagination {
      &-bullet {
        cursor: pointer;
        width: 14px;
        height: 14px;
        display: inline-block;
        border-radius: ${themeGet('radii.circle')};
        background: transparent;
        opacity: 1;
        border: 1px solid ${themeGet('colors.black')};
        margin: 0 5px;
        box-shadow: none;
        transition: ${themeGet('transition')};

        &:hover, &-active {
          background-color: ${themeGet('colors.primary')};
          border-color: ${themeGet('colors.primary')};
        }
      }
    }
  `};

  ${({animate}) => animate && css`
    ${SlideContent} {
      & > * {
        animation-duration: 0.7s;
        animation-fill-mode: both;
        animation-name: ${fadeOutUp};
      }
    }

    ${SliderThumb} {
      img {
        animation-duration: 1.5s;
        animation-fill-mode: both;
        animation-name: ${fadeOutUp};
      }
    }

    .swiper-slide-active {
      ${SlideContent} {
        & > * {
          animation-name: ${fadeInUp};

          &:nth-child(1) {
            animation-delay: 0.5s;
          }

          &:nth-child(2) {
            animation-delay: 0.8s;
          }

          &:nth-child(3) {
            animation-delay: 1.1s;
          }

          &:nth-child(4) {
            animation-delay: 1.4s;
          }

          &:nth-child(5) {
            animation-delay: 1.7s;
          }

          &:nth-child(6) {
            animation-delay: 2s;
          }
        }
      }

      ${SliderThumb} {
        img {
          animation-name: ${fadeInUp};
          animation-delay: 0.2s;
        }
      }
    }
  `}
`