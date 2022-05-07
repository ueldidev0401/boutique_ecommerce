import styled, {devices, themeGet, space} from "@styled";

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: ${themeGet('fontWeights.heading')};
`

export const CouponForm = styled.div`
  display: flex;
  justify-content: space-between;

  ${devices.xs} {
    display: block;
  }

  div {
    input {
      border-radius: 3px 0 0 3px;
      border-color: ${themeGet('colors.primary')};

      @media screen and (min-width: 576px) {
        border-right: 0;
      }
    }

    button {
      ${devices.xs} {
        width: 100%;
        margin-top: 10px;
      }
    }

    input, button {
      height: 48px;
    }

    &:first-child {
      flex-grow: 1;
    }
  }
`

export const EstimateCartItem = styled.div`
  ${space};

  form {
    font-family: ${themeGet('fonts.body')};

    label {
      font-size: ${themeGet('fontSizes.standard')};
    }
  }
`

export const CartUpdateAction = styled.div`
  ${space};
  text-align: right;

  ${devices.md} {
    text-align: center;
  }

  .btn-checkout {
    margin-left: 30px;

    ${devices.xs} {
      margin-left: 15px;
    }
  }

  button, a {
    ${devices.xs} {
      padding: 15px 10px;
    }
  }
`

/**
 * Cart Quantity Increment, Decrement Style
 */

export const Quantity = styled.div`
  width: 90px;
  height: 35px;
  display: flex;
  padding: 0 10px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  border-radius: ${themeGet('radii.rounded')};
  background-color: ${themeGet('colors.gray150')};

  ${devices.sm} {
    height: 30px;
  }

  input {
    background-color: transparent;
    width: 100%;
    border: none;
    display: block;
    text-align: center;
    font-size: 14px;
  }

  button {
    font-size: 14px;
    margin: 5px 0 0;
    padding: 0;
    border: none;
  }
`