import {Table, Td} from "@bootstrap";
import styled, {themeGet, space} from "@styled";

export const CompareProDelete = styled.button`
  display: block;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;

  &:hover {
    color: ${themeGet('colors.danger')};
  }
`

export const CompareProData = styled(Td)`
  color: ${themeGet('colors.text')};
  font-size: ${themeGet('fontSizes.standard')};
  font-weight: ${themeGet('fontWeights.subHeading')};
`

export const CompareProDesc = styled(Td)`
  line-height: 1.7;
  min-width: 200px;
  text-align: left !important;
  white-space: normal !important;
  color: ${themeGet('colors.text')};
  font-size: ${themeGet('fontSizes.standard')};
`

export const CompareProTitle = styled.span`
  display: block;
  margin-top: 10px;
  color: ${themeGet('colors.heading')};
  font-weight: ${themeGet('fontWeights.subHeading')};
`

export const CompareTitle = styled(Td)`
  font-size: 16px;
  color: ${themeGet('colors.heading')};
  font-weight: ${themeGet('fontWeights.subHeading')};
`

export const CompareProduct = styled(Td)`
  vertical-align: top !important;
`

export const CompareTable = styled(Table)`
  font-family: ${themeGet('fonts.body')};
  border: 1px solid ${themeGet('colors.borderLight')};
`

export const CompareListWrap = styled.div`
  ${space}
  ${CompareTable} {
    tbody {
      td {
        padding: 20px;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        border-right: 1px solid ${themeGet('colors.borderLight')};
      }
    }
  }
`