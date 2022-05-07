import styled, {devices, space, themeGet} from "@styled";

export const ContactForm = styled.div`

`

export const ContactInfoText = styled.div`
  a {
    color: ${themeGet("colors.text")};

    &:hover {
      color: ${themeGet("colors.primary")};
    }
  }

  p {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`

export const ContactInfoMethod = styled.h3`
  min-width: 80px;
  font-family: ${themeGet("fonts.heading")};
  font-weight: ${themeGet("fontWeights.subHeading")}
`

export const ContactInfoItem = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

export const ContactContentTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
  font-weight: ${themeGet("fontWeights.subHeading")}
`

export const ContactContentWrap = styled.div`
  ${space};

  padding: 50px 30px;
  background-color: ${themeGet("colors.offWhiteLight")};

  ${devices.xs} {
    padding: 30px 20px 40px;
  }
`

export const ContactMap = styled.div`
  height: 500px;

  ${space}
  iframe {
    width: 100%;
    height: 100%;
  }

  ${devices.md } {
    height: 300px;
  }
`

export const ContactWrapper = styled.section`
  ${space}
`