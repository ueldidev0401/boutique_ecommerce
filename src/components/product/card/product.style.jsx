import styled, {themeGet, css, devices} from "@styled";

const hvrVisible = css`
  visibility: visible;
  transform: translateY(0);
  opacity: 1;
`

export const ProductPrice = styled.div`
  font-size: ${themeGet('fontSizes.body')};
  line-height: 1;
  font-family: ${themeGet('fonts.montserrat')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${themeGet('colors.heading')};
  margin-top: 9px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  .price {
    font-weight: ${themeGet('fontWeights.medium')};

    &.old {
      margin-right: 10px;
      color: ${themeGet('colors.darkgray')};
    }
  }
`

export const ProductTitle = styled.h2`
  font-size: ${themeGet('fontSizes.standard')};
  font-family: ${themeGet('fonts.montserrat')};
  font-weight: ${themeGet('fontWeights.medium')};

  a {
    text-decoration: none;
    color: ${themeGet('colors.heading')};
    font-size: ${themeGet('fontSizes.body')};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;

    ${devices.sm} {
      font-size: ${themeGet('fontSizes.standard')};
    }

    &:hover {
      color: ${themeGet('colors.primary')};
    }
  }
`

export const ProductMeta = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding: 20px 15px 0;
  text-align: center;
  transition: ${themeGet('transition')};
  background-color: ${themeGet('colors.white')};

  ${devices.sm} {
    padding-top: 5px;
  }
`

const buttonStyle = css`
  border: 0;
  width: 80%;
  z-index: 11;
  height: 32px;
  display: none;
  font-size: 13px;
  line-height: 32px;
  text-align: center;
  margin: 10px auto 0;
  color: ${themeGet('colors.white')};
  transition: ${themeGet('transition')};
  border-radius: ${themeGet('radii.sm')};
  font-family: ${themeGet('fonts.heading')};
  background-color: ${themeGet('colors.primary')};
  font-weight: ${themeGet('fontWeights.subHeading')};

  svg {
    margin-right: 3px;
    vertical-align: text-bottom;
    font-size: ${themeGet('fontSizes.body')};
  }

  ${devices.md} {
    display: block;
  }

  &:hover {
    color: ${themeGet('colors.white')};
  }

  ${({mobile}) => !mobile && css`
    left: 0;
    right: 0;
    opacity: 0;
    bottom: 20px;
    height: 45px;
    display: block;
    line-height: 45px;
    position: absolute;
    visibility: hidden;
    transform: translateY(20px);
    color: ${themeGet('colors.secondary')};
    font-size: ${themeGet('fontSizes.standard')};
    background-color: ${themeGet('colors.white')};

    ${devices.md} {
      display: none;
    }

    &:hover {
      color: ${themeGet('colors.primary')};
    }
  `}
`

export const AddToCartButton = styled.button`
  ${buttonStyle}

  ${({disabled}) => disabled && css`
    pointer-events: none;
    opacity: 0.65 !important;
  `}
`

export const SelectOptionButton = styled.a`
  ${buttonStyle}
`

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  transition: ${themeGet('transition')};
  text-decoration: none;
  color: ${themeGet('colors.heading')};
  border-radius: ${themeGet('radii.circle')};
  background-color: ${themeGet('colors.white')};

  svg {
    font-size: 20px;
    line-height: 1;
  }

  &:not(.wishlist) {
    visibility: hidden;
    transform: translateY(20px);
    opacity: 0;
  }

  ${({isActive}) => isActive && css`
    color: ${themeGet('colors.primary')};
  `}
  &:hover {
    color: ${themeGet('colors.white')};
    background-color: ${themeGet('colors.primary')};
  }
`

export const ProductActions = styled.div`
  position: absolute;
  z-index: 9;
  top: 18px;
  right: 18px;
  display: flex;
  flex-direction: column;
  transition: ${themeGet('transition')};

  .btn-action {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  ${devices.sm} {
    display: none;
  }
`

export const ProductActionsMobile = styled.div`
  display: none;

  ${devices.sm}, ${devices.md} {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .btn-action {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  ${ActionButton} {
    visibility: visible;
    opacity: 1;
    transform: none;
    margin-top: 0;
    height: auto;
    width: auto;
    padding: 0;

    &:hover {
      background: transparent;
      color: ${themeGet('colors.primary')}
    }
  }
`

export const Badge = styled.span`
  background-color: ${themeGet('colors.secondary')};
  font-size: 12px;
  font-weight: ${themeGet('fontWeights.medium')};
  font-family: ${themeGet('fonts.body')};
  line-height: 1;
  display: block;
  padding: 5px 7px;
  text-align: center;
  text-transform: uppercase;
  width: auto;
  border-radius: ${themeGet('radii.sm')};
  color: ${themeGet('colors.white')};

  ${devices.xs} {
    font-size: 11px;
    padding: 3px 4px;
  }

  & + span {
    margin-top: 7px;

    ${devices.xs} {
      margin-top: 5px;
    }
  }

  ${props => props.type === 'new' && css`
    background-color: ${themeGet('colors.green')};
  `}

  ${props => props.type === 'sale' && css`
    background-color: ${themeGet('colors.danger')};
  `}

  ${props => props.type === 'featured' && css`
    background-color: ${themeGet('colors.primary')};
  `}
`

export const ProductBadges = styled.div`
  position: absolute;
  z-index: 8;
  top: 18px;
  left: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${devices.xs} {
    top: 10px;
    left: 10px;
  }
`

export const ProductImage = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  padding: 0;
  margin: 0;
  width: 100%;

  .thumb {
    z-index: 1;
    max-width: 100%;

    &.hover-image {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      opacity: 0;
    }
  }
`

export const ProductThumb = styled.figure`
  position: relative;
  overflow: hidden;
`

export const Product = styled.div`
  overflow: hidden;
  margin-top: 30px;

  &:hover {
    ${ProductImage} {
      .thumb {
        img {
          transform: scale(1.1) rotate(3deg);
        }

        &:not(:last-child) {
          opacity: 0;
        }

        &.hover-image {
          opacity: 1;
        }
      }
    }

    ${ActionButton} {
      ${hvrVisible}
    }

    ${AddToCartButton} {
      ${hvrVisible}
    }

    ${SelectOptionButton} {
      ${hvrVisible}
    }
  }
`
