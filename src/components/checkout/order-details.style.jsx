import styled, {space, css, themeGet, devices} from "@styled";

export const PaymentMethodItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

export const PaymentMethods = styled.ul`
  ${space}
`

const flexStyle = css`
  display: flex;
  justify-content: space-between;
`

export const OrderShippingItem = styled.li`
  &:first-child {
    color: ${themeGet('colors.heading')};
    font-weight: ${themeGet('fontWeights.subHeading')};
  }
`

export const OrderShipping = styled.ul`
  ${flexStyle};

  ${({total}) => total && css`
    margin: 18px 0 30px;
    padding: 20px 0;
    border-top: 1px solid ${themeGet('colors.light300')};
    border-bottom: 1px solid ${themeGet('colors.light300')};

    ${OrderShippingItem} {
      &:last-child {
        color: ${themeGet('colors.primary')};
        font-weight: ${themeGet('fontWeights.heading')};
      }
    }
  `}
`

export const OrderDetailsMiddleItem = styled.li`
  ${flexStyle};
  font-family: ${themeGet('fonts.body')};

  &:not(:last-child) {
    margin-bottom: 13px;
  }

  span {
    &:last-child {
      margin-left: 15px;
    }
  }
`

export const OrderDetailsMiddle = styled.ul`
  margin: 30px 0 20px;
  padding: 19px 0 18px;
  border-top: 1px solid ${themeGet('colors.light300')};
  border-bottom: 1px solid ${themeGet('colors.light300')};
`

export const OrderDetailsTopItem = styled.li`
  color: ${themeGet('colors.heading')};
  font-weight: ${themeGet('fontWeights.subHeading')};
`

export const OrderDetailsTop = styled.ul`
  ${flexStyle};

`

export const DetailsOrdered = styled.div`
  padding: 38px 45px 45px;
  font-family: ${themeGet('fonts.heading')};
  background-color: ${themeGet('colors.borderLight')};
  
  ${devices.sm}{
    padding: 40px 20px;
  }
`