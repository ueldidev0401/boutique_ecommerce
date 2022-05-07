import styled, {css, themeGet} from "@styled";


export const Label = styled.label`
  display: block;
  line-height: 1;
  margin-bottom: 10px;
  color: ${themeGet('colors.heading')};
  font-family: ${themeGet('fonts.body')};
  font-size: ${themeGet("fontSizes.standard")};
  font-weight: ${themeGet("fontWeights.subHeading")};
`

const inputStyle = css`
  width: 100%;
  display: block;
  line-height: 1;
  padding: 12px 15px;
  transition: ${themeGet("transition")};
  border-radius: ${themeGet('radii.sm')};
  font-family: ${themeGet('fonts.body')};
  font-size: ${themeGet("fontSizes.standard")};
  border: 1px solid ${themeGet('colors.borderLight')};
  
  &:focus{
    border-color: ${themeGet('colors.primary')};
  }
`

export const InputTag = styled.input`
  ${inputStyle}
`

export const TextAreaTag = styled.textarea`
  ${inputStyle}
`