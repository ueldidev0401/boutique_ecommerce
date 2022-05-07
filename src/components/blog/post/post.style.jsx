import styled, {themeGet} from "@styled";

export const PostTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: ${themeGet('fontWeights.subHeading')};

  a {
    color: ${themeGet('colors.heading')};
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

export const PostMeta = styled.div`
  display: flex;
  margin-bottom: 15px;
  font-size: 13px;
  font-weight: ${themeGet('fontWeights.subHeading')};

  a, span {
    text-decoration: none;
    color: ${themeGet('colors.text')};

    &:hover {
      cursor: pointer;
      color: ${themeGet('colors.primary')};
    }

    &:first-child {
      margin-left: 5px;
    }

    &:last-child {
      margin-left: 20px;
    }
  }
`

export const PostContent = styled.div`
  padding: 22px 20px 32px;


  .btn-read {
    margin-top: 20px;
    font-size: ${themeGet('fontSizes.standard')};
  }
`

export const PostItem = styled.article`
  position: relative;
  background-color: ${themeGet('colors.gray100')};
`