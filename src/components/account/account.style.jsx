import styled, { space, themeGet } from "@styled";

export const SettingsForm = styled.div`
  ${space};

  fieldset {
    legend {
      margin-bottom: 20px;
      font-family: ${themeGet("fonts.body")};
      font-weight: ${themeGet("fontWeights.subHeading")};
    }
  }
`;

export const ButtonView = styled.a`
  font-size: 20px;
  color: ${themeGet("colors.dark")};
`;

export const EmptyStatus = styled.div`
  padding: 15px 10px 0;
  border-radius: 5px 5px 0 0;
  font-family: ${themeGet("fonts.body")};
  font-size: ${themeGet("fontSizes.standard")};
  background-color: ${themeGet("colors.white")};
  font-weight: ${themeGet("fontWeights.heading")};
  border-top: 3px solid ${themeGet("colors.primary")};
`;

export const TabContentTitle = styled.h3`
  font-size: 20px;
  font-weight: ${themeGet("fontWeights.subHeading")};
`;

export const TabContentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 10px;
  justify-content: space-between;
  border-bottom: 1px dashed ${themeGet("colors.borderLight")};

  button {
    padding: 7px 15px;
  }
`;

export const AccountTabContent = styled.div`
  padding: 30px;
  border: 1px solid ${themeGet("colors.borderLight")};

  p {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  a {
    color: ${themeGet("colors.text")};
    &:hover {
      color: ${themeGet("colors.primary")};
    }
  }
`;

export const AccountNav = styled.nav`
  font-family: ${themeGet("fonts.body")};
  border: 1px solid ${themeGet("colors.borderLight")};

  ul {
    li {
      display: flex;
      font-size: 13px;
      padding: 12px 15px;
      text-transform: uppercase;
      color: ${themeGet("colors.heading")};
      transition: ${themeGet("transition")};
      font-weight: ${themeGet("fontWeights.subHeading")};

      &:not(:last-child) {
        border-bottom: 1px solid ${themeGet("colors.borderLight")};
      }

      &:hover,
      &.react-tabs__tab--selected {
        cursor: pointer;
        color: ${themeGet("colors.white")};
        background-color: ${themeGet("colors.primary")};

        a {
          color: ${themeGet("colors.white")};
        }
      }

      svg {
        line-height: 1;
        font-size: 18px;
        margin-right: 10px;
        vertical-align: bottom;
      }

      a {
        flex-basis: 100%;
        color: ${themeGet("colors.heading")};

        &:hover {
          color: ${themeGet("colors.white")};
        }
      }
    }
  }
`;

export const AccountContentWrap = styled.div`
  ${space}
`;
