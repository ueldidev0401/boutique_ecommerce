import styled, {devices, space, themeGet} from "@styled";

export const ShopTopBarRight = styled.div`
  display: flex;
  align-items: center;

  ${devices.xs} {
    justify-content: center;
  }

  .sort-by {
    min-width: 220px;
    margin-left: 20px;

    &__control {
      min-height: 40px;
    }
  }
`;

export const ShopTopBarLeft = styled.div`
  ${devices.xs} {
    margin-bottom: 10px;
  }
`;

export const ShopTopBar = styled.div`
  display: flex;
  padding: 10px 20px;
  margin-bottom: 40px;
  align-items: center;
  justify-content: space-between;
  border-radius: ${themeGet("radii.sm ")};
  font-size: ${themeGet("fontSizes.standard")};
  background: ${themeGet("colors.borderLight")};

  ${devices.xs} {
    display: block;
    padding-top: 15px;
    text-align: center;
    padding-bottom: 15px;
  }
`;

export const ProductsFeedWrap = styled.div`
  ${space}
`;
