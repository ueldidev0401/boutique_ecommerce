import {Table, Th} from "@bootstrap";
import styled, {css, devices, space, themeGet} from "@styled";

export const CartCouponActions = styled.div`
  ${space};

  padding: 20px;
  background-color: ${themeGet('colors.borderLight')};

  ${devices.md} {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`

export const GrandPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  min-width: 200px;
  display: flex;
  margin-right: 35px;
  justify-content: flex-end;
  color: ${themeGet("colors.primary")};
  font-family: ${themeGet('fonts.heading')};

  span {
    margin-left: 40px;
    color: ${themeGet("colors.heading")};
  }
`

export const TableHeading = styled(Th)`
  white-space: nowrap;
  border: none !important;
  text-transform: uppercase;
  text-align: center !important;
  padding: 21px 45px 22px !important;
  color: ${themeGet('colors.heading')};
  font-size: ${themeGet('fontSizes.standard')};
  font-weight: ${themeGet('fontWeights.heading')};
  background-color: ${themeGet('colors.borderLight')};
`

export const CartListTable = styled(Table)`
  font-family: ${themeGet('fonts.body')};
  border: 1px solid ${themeGet('colors.borderLight')};
`

export const TableResponsive = styled.div`
  ${({responsive}) => responsive && css`
    width: 100%;
    display: block;
    overflow-x: auto;
  `}
`

export const CartProductsList = styled.div`
  ${space}
`