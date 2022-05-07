import styled, {devices, space, themeGet} from "@styled";

export const OrderDetailsWrap = styled.div`
  ${space}
`

export const PageSubTitle = styled.h2`
  font-size: 24px;
  line-height: 16px;
  margin-bottom: 45px;
  font-weight: ${themeGet('fontWeights.subHeading')};

  ${devices.sm} {
    margin-bottom: 30px;
  }
`

export const ShippingForm = styled.div`
  ${space}
`

export const CheckPageWrapper = styled.section`
  ${space}
`