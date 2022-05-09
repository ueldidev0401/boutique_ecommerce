import { Alert } from "@bootstrap";
import styled, { devices, themeGet, space } from "@styled";

export const AlertMessage = styled(Alert)`
  ${space};
  margin-bottom: 0 !important;
  font-family: ${themeGet("fonts.body")};
  font-size: ${themeGet("fontSizes.standard")};

  ul {
    list-style: square;
    padding-left: 20px;

    li {
      &:not(:last-child) {
      }
    }
  }
`;

export const LoginFormWrap = styled.div``;

export const FormWrap = styled.div`
  box-shadow: ${themeGet("shadows.default")};
  border: 1px solid lightgrey;
  border-radius: 7px;
  ${devices.xs} {
    padding: 30px 20px;
  }
`;
export const Padding = styled.div`
  padding: 15px 0 0 15px;
`;
export const Margin = styled.div`
  margin: 15px 15px 0 15px;
`;
export const Text = styled.p`
  font-size: 14px;
  font-weight: 600;
`;
export const Redtext = styled.span`
  color: red;
`;

export const Button = styled.button`
  background-color: #e84242;
  border: none;
  color: white;
  padding: 13px 40px 13px 40px;
  text-align: center;
  font-size: 16px;
  opacity: 0.8;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  border-radius: 4px;
  float:right;
  margin:0 15px 15px;
  &:hover {
    opacity: 1;
  }
`;
export const Backendground = styled.div`
  background-color: #f4f5f7;
`;

