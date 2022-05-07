import styled, {space, themeGet} from "@styled";

export const Input = styled.input`
  display: inline-block;
  vertical-align: top;
  line-height: 50px;
  height: 50px;
  color: ${themeGet('colors.white')};
  font-size: ${themeGet('fontSizes.standard')};
  width: 100%;
  text-transform: capitalize;
  border: none;
  background: transparent;
  border: 1px solid ${themeGet('colors.borderDark')};
  border-radius: 0;
  text-align: left;
  box-shadow: none;
  padding-left: 20px;
  padding-right: 10px;
  transition: ${themeGet('transition')};
  
  &::placeholder {
      color: ${themeGet('colors.white')};
  }
  &:focus {
    border-color: ${themeGet('colors.primary')};
  }
`

export const FormNewsletter = styled.div`
  position: relative;
  ${space};
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }
  
  button {
    font-size: 13px;
    font-weight: 600;
    border: 0;
    margin-top: 20px;
    svg {
      font-size: ${themeGet('fontSizes.body')};
      margin-right: 3px;
      vertical-align: text-top;
    }
  }
`