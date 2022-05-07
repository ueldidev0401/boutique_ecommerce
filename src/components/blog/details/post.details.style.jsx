import {PostTitle} from "@components/blog/post/post.style";
import styled, {devices, space, css, themeGet} from "@styled";


export const BlogPostThumb = styled.figure`
  margin-bottom: 20px;
`

export const BlogList = styled.ul`
  li {
    margin-left: 5px;
    display: inline-block;

    &:not(:last-child) {
      margin-right: 5px;
    }

    a {
      color: ${themeGet("colors.text")};

      &:hover {
        color: ${themeGet("colors.primary")};
      }
    }
  }

  ${props => props.tags && css`
    li {
      &:not(:last-child) {
        &:after {
          content: ",";
        }
      }
    }
  `}
`

export const BlogPostFooterItem = styled.div`
  display: flex;
  font-family: ${themeGet("fonts.body")};

  span {
    margin-right: 5px;
    font-weight: ${themeGet("fontWeights.subHeading")};
  }

  ${devices.xs} {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`

export const BlogPostFooter = styled.div`
  display: flex;
  margin-top: 30px;
  padding-top: 35px;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${themeGet("colors.borderLight")};

  ${devices.xs} {
    display: block;
  }
`

export const BlogPostText = styled.div`
  line-height: 1.7;

  p {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  blockquote {
    margin: 40px 100px;
    padding: 0 15px;
    line-height: 1.8;
    font-style: italic;
    border-left: 3px solid ${themeGet("colors.primary")};

    ${devices.sm} {
      margin: 20px 50px;
    }

    ${devices.xs} {
      margin-right: 0;
      margin-left: 30px;
    }
  }

  ul {
    list-style: square;
    padding-left: 20px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`

export const BlogPostContent = styled.section`
  ${PostTitle} {
    font-size: 32px;
    margin-bottom: 20px;

    ${devices.md} {
      font-size: 22px;
    }

    ${devices.sm} {
      margin-bottom: 15px;
    }

  }
`

export const PostDetailsContentWrapper = styled.article`
  ${space}
`