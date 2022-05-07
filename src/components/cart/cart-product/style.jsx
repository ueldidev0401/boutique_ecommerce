import styled, {themeGet} from "@styled";
import Button from "@components/ui/button";
import {Quantity} from "@components/cart/cart.style";

export const CartActionBtn = styled(Button)`
  padding: 0;
  margin: 0 5px;
  font-size: 18px;
  color: ${themeGet('colors.text')};

  &:hover {
    color: ${themeGet('colors.primary')};
  }
`

export const CartProAction = styled.td`
  width: 100px;
`

export const CartProPrice = styled.td`
  width: 435px;
`

export const CartProMeta = styled.div`
  margin-top: 3px;
  font-size: 11px;
  text-transform: capitalize;
  color: ${themeGet('colors.darkgray')};
  font-weight: ${themeGet('fontWeights.subHeading')};
`

export const CartProName = styled.a`
  color: ${themeGet('colors.heading')};
  font-weight: ${themeGet('fontWeights.subHeading')};

  &:hover {
    color: ${themeGet('colors.primary')};
  }
`

export const CartProInfo = styled.td`
  width: 435px;
  font-size: 15px;
  font-family: ${themeGet('fonts.heading')};
`

export const CartProThumb = styled.td`
  a {
    & > div {
      display: flex !important;
    }
  }
`

export const SingleCartItem = styled.tr`
  border-bottom: 1px solid ${themeGet('colors.borderLight')};

  td {
    text-align: center;
    border: none !important;
    vertical-align: middle !important;
  }

  ${Quantity} {
    margin: 0 auto;
  }
`