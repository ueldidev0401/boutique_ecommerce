import styled, { devices, space, themeGet } from "@styled";

export const FormCheckout = styled.div`
  ${space}
  option {
    font-weight: 300;
    font-size: 12px;
  }
  .secondaryButton {
    background-color: #e84242;
    display: none;
  }
  .primaryButton {
    position: absolute;
    margin-top: 1323px;
    background-color: #e84242;
    margin-left: 70%;
    color: white;
  }
  .contentClass {
    background-color: green;
    display: none;
  }
`;
export const Text = styled.span``;

export const Title = styled.p`
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  color: #737373;
  margin-top: 0px;
`;

export const Padding = styled.p`
  padding: 85px;
`;

export const OrderTypeText = styled.p`
  font-weight: 300;
  font-size: 12px;
`;

export const ItalicText = styled.p`
  font-weight: 400;
  font-size: 12px;
  font-style: italic;
  margin-top: 20px;
`;

export const TextInCardTitle = styled.p`
  font-weight: 700;
  font-size: 18vm;
`;

export const TextInCardContent = styled.p`
  font-weight: 300;
  font-size: 18vm;
`;

export const TextInCardNumber = styled.p`
  font-weight: 400;
  font-size: 25vm;
`;

export const InputCoupoun = styled.input`
  outline: 0;
  border-width: 0 0 2px;
  border-color: grey;
  padding-bottom: 10px;
  font-size: 18px;
  background: transparent;
  margin-bottom: 40px;
  width: 50%;
  &:focus {
    border-color: #ea596e;
  }
`;

export const CustomButton = styled.button`
  background-color: #e84242;
  border: none;
  color: white;
  padding: 8px 26px 13px 26px;
  margin-left: 26px;
  text-align: center;
  font-size: 16px;
  opacity: 0.8;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 67px;
  &:hover {
    opacity: 1;
  }
`;

export const CenterText = styled.p`
  font-weight: 400;
  font-size: 13px;
  text-align: center;
`;

export const SmallText = styled.p`
  font-weight: 400;
  font-size: 10px;
`;

export const CustomButtonGreen = styled.p`
  display: flex;
  margin-left:auto;
  margin-right: auto;
  margin-top : 26px;
  background-color: #22A35D;
  border: none;
  color: white;
  padding: 17px 23px 16px 33px;
  text-align: center;
  font-size: 16px;
  opacity: 0.8;
  transition: 0.3s;
  text-decoration: none;
  width:220px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    opacity: 1;
  }
`;
