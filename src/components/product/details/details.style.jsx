import styled, {devices, themeGet, space} from "@styled";

export const ReviewItem = styled.div`
  display: flex;
  align-items: center;

  ${devices.sm} {
    display: block;
  }

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  .review-img {
    width: 120px;
    height: 120px;
    display: flex;
    flex: 0 0 120px;
    margin: 0 15px 0 0;
    align-items: center;
    justify-content: center;
    color: ${themeGet("colors.text")};
    border-radius: ${themeGet('radii.circle')};
    border: 1px solid ${themeGet('colors.borderLight')};

    svg {
      font-size: 50px;
    }

    ${devices.sm} {
      margin-bottom: 15px;
    }
  }

  .review-content {
    width: 100%;
    line-height: 1;
    margin-bottom: 5px;
    font-size: ${themeGet('fontSizes.standard')};

    .review-name {
      margin-bottom: 7px;
      line-height: 1;
      font-size: ${themeGet('fontSizes.body')};
      font-weight: ${themeGet('fontWeights.medium')};
    }

    .ratings {
      margin-bottom: 5px;
      color: ${themeGet('colors.primary')};
    }
  }
`

export const ReviewFormWrap = styled.div`
  ${devices.md} {
    margin-top: 30px;
  }

  h3 {
    font-size: 26px;
    margin-bottom: 25px;
    font-weight: ${themeGet('fontWeights.subHeading')};
  }
`

export const ProInfoList = styled.ul`
  margin-bottom: 15px;

  li {
    display: block;
    font-size: ${themeGet('fontSizes.standard')};

    &:not(:last-child) {
      margin-bottom: 13px
    }

    span {
      min-width: 70px;
      margin: 0 26px 0 0;
      display: inline-block;
      color: ${themeGet('colors.heading')};
      font-weight: ${themeGet('fontWeights.medium')};
    }
  }
`

export const ProDescription = styled.div`
  line-height: 1.7;
  font-size: 15px;

  p {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`

export const ProductDescReviewContent = styled.div`
  overflow: hidden;
  line-height: 24px;
  text-align: left;
  padding: 30px;
  border: 1px solid ${themeGet('colors.borderLight')};

  ${devices.sm} {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const ProductDescReviewWrapper = styled.section`
  ${space}
  .description-review-nav {
    display: flex;
    justify-content: center;

    li {
      line-height: 1;
      margin: 0 30px;
      font-size: 20px;
      cursor: pointer;
      position: relative;
      padding-bottom: 15px;
      color: ${themeGet('colors.heading')};
      transition: ${themeGet('transition')};
      font-family: ${themeGet('fonts.heading')};
      font-weight: ${themeGet('fontWeights.subHeading')};

      ${devices.sm} {
        margin: 0 10px;
        font-size: 14px;
      }

      &:after {
        left: 0;
        right: 0;
        height: 2px;
        content: "";
        bottom: -1px;
        position: absolute;
        transition: ${themeGet('transition')};
      }

      &.react-tabs__tab--selected, &:hover {
        &:after {
          background-color: ${themeGet('colors.primary')};
        }
      }
    }
  }
`

export const ProductThumbNav = styled.div`
  margin-top: 10px;

  figure {
    height: 85px;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    ${devices.xs} {
      height: 70px;
    }
  }

  .swiper-slide {
    border: 1px solid transparent;

    &-thumb-active {
      border-color: ${themeGet('colors.primary')};
    }
  }


  [class*="swiper-button"] {
    height: 30px;
    width: 30px;
    line-height: 30px;

    &:after {
      font-size: 12px !important;
    }
  }
`

export const ProductThumbGallery = styled.div`
  figure {
    height: 500px;
    overflow: hidden;
    position: relative;

    ${devices.md} {
      height: 400px;
    }

    ${devices.sm} {
      height: 400px;
    }

    ${devices.xs} {
      height: 300px;
    }
  }
`

export const ProductSocialShare = styled.div`
  display: flex;
  line-height: 1;
  margin-top: 10px;
  align-items: center;

  h4 {
    margin-right: 10px;
    color: ${themeGet('colors.text')};
    font-size: ${themeGet('fontSizes.standard')};
    font-weight: ${themeGet('fontWeights.heading')};
  }

  .media {
    margin-top: 3px;

    a {
      font-size: 18px;
      display: inline-block;
      color: ${themeGet('colors.text')};

      &:not(:last-child) {
        margin-right: 15px;
      }

      &:hover {
        color: ${themeGet('colors.primary')};
      }
    }
  }
`

export const QuantityIncDecButton = styled.div`
  width: 120px;
  display: flex;
  margin-right: 15px;
  border: 1px solid ${themeGet('colors.primary')};

  .btn {
    &:hover {
      color: ${themeGet('colors.white')};
      background-color: ${themeGet('colors.primary')};
    }

    &-decrement {
      border-right: 1px solid ${themeGet('colors.primary')};
    }

    &-increment {
      border-left: 1px solid ${themeGet('colors.primary')};
    }
  }

  input {
    width: 100%;
    border: none;
    display: block;
    text-align: center;
    font-weight: ${themeGet('fontWeights.subHeading')};
  }
`

export const ProductActionButton = styled.div`
  margin-top: 30px;

  .quantity-cart-button {
    display: flex;

    .btn-cart {
      border: 1px solid transparent;

      ${devices.xs} {
        padding: 10px 20px;
        font-size: ${themeGet('fontSizes.standard')};
      }
    }
  }

  .wishlist-compare-button {
    margin-top: 20px;

    .btn {
      padding: 0;
      border: none;
      line-height: 1;
      color: ${themeGet('colors.text')};
      font-family: ${themeGet('fonts.body')};
      font-size: ${themeGet('fontSizes.standard')};

      &:not(:last-child) {
        margin-right: 20px;
      }

      svg {
        margin-right: 2px;
        vertical-align: bottom;
      }

      &:hover {
        color: ${themeGet('colors.primary')};
      }
    }
  }
`

export const ProductSwatchItem = styled.div`
  label {
    margin-bottom: 3px;
    color: ${themeGet('colors.heading')};
    font-weight: ${themeGet('fontWeights.subHeading')};
  }
`

export const ProductSwatches = styled.div`
  margin-top: 20px;

  ${ProductSwatchItem} {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`

export const ProductPrices = styled.div`
  font-size: 22px;
  margin-top: 15px;
  margin-bottom: 20px;
  color: ${themeGet('colors.heading')};

  ${devices.xs} {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .price {
    &.old {
      margin-right: 5px;
      color: ${themeGet('colors.darkgray')};
    }
  }
`

export const ProductRatings = styled.div`
  margin-top: 5px;

  svg {
    width: 16px;
    overflow: hidden;
    color: ${themeGet('colors.primary')};
    font-size: ${themeGet('fontSizes.body')};
  }
`

export const ProductSKU = styled.p`
  line-height: 1;
  font-size: 13px;

  strong {
    color: ${themeGet('colors.heading')};
    font-weight: ${themeGet('fontWeights.subHeading')};
  }
`

export const ProductName = styled.h2`
  line-height: 1;
  font-size: 24px;
  margin: 15px 0;
  color: ${themeGet('colors.heading')};
  font-weight: ${themeGet('fontWeights.subHeading')};

  ${devices.xs} {
    font-size: 20px;
    margin-bottom: 10px;
  }
`

export const ContentWrap = styled.div`
  line-height: 26px;
  font-family: ${themeGet('fonts.body')};
  font-size: ${themeGet('fontSizes.standard')};

  ${devices.sm} {
    margin-top: 25px;
  }

  ${ProductSKU} {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &.details-page {
    ${ProductSwatches} {
      @media screen and (min-width: 992px) {
        max-width: 50%;
      }
    }
  }
`

export const ProductDetailsWrapper = styled.section`
  ${space}
`