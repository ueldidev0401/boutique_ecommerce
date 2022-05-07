import Button from "@components/ui/button";
import styled, {devices, themeGet} from "@styled";


export const RemoveButton = styled.button`
  width: 25px;
  height: 25px;
  line-height: 1;
  font-size: 17px;
  color: ${themeGet('colors.heading')};
  font-family: ${themeGet('fonts.heading')};
  border-radius: ${themeGet('radii.circle')};

  &:hover {
    color: ${themeGet('colors.white')};
    background-color: ${themeGet('colors.danger')};
  }
`

export const PriceAmount = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${themeGet('colors.primary')};
`

export const MiniCartProPrice = styled.div`
  font-size: 14px;
  display: block;
  margin-top: 3px;
`

export const MiniCartProMeta = styled.div`
  font-size: 13px;
  margin-top: 5px;
  text-transform: capitalize;
  color: ${themeGet('colors.darkgray')};
  font-weight: ${themeGet('fontWeights.subHeading')};
`

export const MiniCartProName = styled.a`
  color: ${themeGet('colors.heading')};
  font-family: ${themeGet('fonts.body')};
  font-size: ${themeGet('fontSizes.body')};
  font-weight: ${themeGet('fontWeights.body')};

  ${devices.sm} {
    font-size: ${themeGet('fontSizes.standard')};
  }

  &:hover {
    color: ${themeGet('colors.primary')};
  }
`

export const MiniCartProContent = styled.div`
  display: flex;
  margin-top: -4px;
  position: relative;
  padding-left: 12px;
  align-items: flex-start;
  flex: 1 0 calc(100% - 150px);
  justify-content: space-between;
  font-family: ${themeGet('fonts.body')};

  ${devices.xs} {
    flex: 1 0 calc(100% - 100px);
  }
`

export const MiniCartProThumb = styled.a`
  flex: 1 0 75px;

  img {
    border: 1px solid ${themeGet("colors.borderLight")} !important;
  }
`

export const MiniCartProductItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 25px 20px 20px;
  border-bottom: 1px solid ${themeGet("colors.borderLight")};

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: 0;
  }
`

export const TotalPrice = styled.span`
  top: 50%;
  right: 10px;
  height: 37px;
  display: flex;
  padding: 10px;
  position: absolute;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  color: ${themeGet('colors.primary')};
  border-radius: ${themeGet('radii.sm')};
  background-color: ${themeGet('colors.white')};
  font-weight: ${themeGet('fontWeights.subHeading')};
`

export const BtnCheckout = styled(Button)`
  width: 100%;
  text-align: left;
  position: relative;
  padding-left: 10px;
  border-radius: ${themeGet('radii.sm')};
`

export const MiniCartFooter = styled.div`
  padding: 20px;
`

export const MiniCartList = styled.div`
  position: relative;
  height: calc(100% - 160px);
`