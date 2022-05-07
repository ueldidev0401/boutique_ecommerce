import styled, {themeGet} from "@styled";

export const SettingsFooter = styled.div`
  margin-top: auto;
  text-align: center;
  padding: 20px 20px 30px;
  font-family: ${themeGet('fonts.body')};

  .support {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    svg {
      margin-right: 5px;
      font-size: 30px;
      color: ${themeGet('colors.dark2')};
    }

    a {
      color: ${themeGet('colors.text')};
    }
  }

  p {
    a {
      color: ${themeGet('colors.primary')};
    }

    svg {
      vertical-align: middle;
      color: ${themeGet('colors.danger')};
    }
  }
`

export const SettingsItem = styled.div`
  font-family: ${themeGet('fonts.heading')};

  &:not(:last-child) {
    margin-bottom: 25px;
  }

  label {
    font-size: 15px;
    font-weight: ${themeGet('fontWeights.subHeading')};
  }
`

export const SettingsWrap = styled.div`
  padding: 20px;
`