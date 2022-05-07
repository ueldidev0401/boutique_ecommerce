import styled, {devices, space, themeGet} from "@styled";

export const InstafeedContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: calc(30px / -2);
  margin-left: calc(30px / -2);

  ${devices.sm} {
    margin-top: -15px;
    margin-right: calc(15px / -2);
    margin-left: calc(15px / -2);
  }

  .insta-item {
    padding: 0 15px;
    display: block;
    flex-basis: calc(100% / 4);

    ${devices.sm} {
      flex-basis: calc(100% / 2);
      padding: 0 7.5px;
      margin-top: 15px;
    }

    figure {
      z-index: 1;
      height: 100%;
      overflow: hidden;
      position: relative;

      &:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: "";
        z-index: 2;
        opacity: .450;
        background: linear-gradient(0deg, rgba(0, 0, 0, .85) 0, rgba(255, 255, 255, 0) 100%);
        transition: ${themeGet('transition')};
      }

      &:before {
        background-image: url("/images/icons/instagram.png");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1.6);
        content: "";
        height: 30px;
        width: 30px;
        opacity: 0;
        transition: ${themeGet('transition')};
        z-index: 3;
      }
    }

    img {
      height: 100%;
      width: 100%;
      transition: ${themeGet('transition')};
    }

    &:hover {
      figure {
        &:after, &:before {
          opacity: 1;
        }

        &:before {
          transform: translate(-50%, -50%) scale(1);
        }
      }

      & img {
        transform: scale(1.1) rotate(3deg);
        transition: ${themeGet('transition')};
      }
    }
  }
`

export const InstafeedWrap = styled.section`
  ${space};
  position: relative;
`