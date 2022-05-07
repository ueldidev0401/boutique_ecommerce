import styled, { themeGet, color, devices, space } from "@styled";

export const AddressFormAction = styled.div`
  display: flex;

  button {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
`;

export const FormTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 30px;
  padding-bottom: 10px;
  font-weight: ${themeGet("fontWeights.subHeading")};
  border-bottom: 1px solid ${themeGet("colors.borderLight")};
`;

export const AddressFormWrap = styled.div`
  ${space}
  padding: 33px 30px 40px;
`;

export const AddressActionButton = styled.button`
  ${color};
  width: 25px;
  height: 25px;
  color: ${themeGet("colors.white")};
  border-radius: ${themeGet("radii.sm")};
`;

export const AddressActions = styled.div`
  top: 15px;
  right: 15px;
  position: absolute;
`;

export const AddressName = styled.h4`
  margin-bottom: 5px;
  font-family: ${themeGet("fonts.body")};
  font-size: ${themeGet("fontSizes.standard")};
  font-weight: ${themeGet("fontWeights.subHeading")};
`;

export const AddressItem = styled.div`
  padding: 15px;
  margin-top: 15px;
  position: relative;
  transition: ${themeGet("transition")};
  border-radius: ${themeGet("radii.sm")};
  border: 1px solid ${themeGet("colors.offWhiteLight")};
  background-color: ${themeGet("colors.offWhiteLight")};

  &:hover {
    border-color: ${themeGet("colors.primary")};
  }

  ${devices.md} {
    margin-top: 20px;
  }
`;

export const AddressListingWrap = styled.div`
  ${space}
`;
