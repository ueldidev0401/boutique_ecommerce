import Link from "next/link";
import { Fragment } from "react";
import PropTypes from "prop-types";
import { ImSpinner2 } from "react-icons/im";
import { spin } from "@assets/css/keyframes";
import styled, {
  themeGet,
  color,
  border,
  typography,
  space,
  css,
  devices,
} from "@styled";

const Button = ({ tag, children, href, loading, ...props }) => {
  return (
    <Fragment>
      {tag === "a" && (
        <Link href={href} passHref>
          <StyledLink {...props}>
            {children}
            {loading && (
              <Loading>
                <ImSpinner2 />
              </Loading>
            )}
          </StyledLink>
        </Link>
      )}

      {tag === "button" && (
        <StyledButton {...props}>
          {children}
          {loading && (
            <Loading>
              <ImSpinner2 />
            </Loading>
          )}
        </StyledButton>
      )}
    </Fragment>
  );
};

Button.propTypes = {
  tag: PropTypes.oneOf(["a", "button"]),
  href: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  hvrColor: PropTypes.string,
  hvrBg: PropTypes.string,
  hvrBorderColor: PropTypes.string,
};

const Loading = styled.span`
  margin-left: 5px;
  vertical-align: middle;

  svg {
    animation: ${spin} 1s infinite;
  }
`;

const ButtonCSS = css`
  display: inline-block;
  text-align: center;
  padding: 17px 36px;
  border-radius: 0;
  line-height: 1;
  border: 0;
  transition: ${themeGet("transition")};
  font-size: ${themeGet("fontSizes.body")};
  font-family: ${themeGet("fonts.heading")};
  font-weight: ${themeGet("fontWeights.subHeading")};

  ${devices.sm} {
    padding: 15px 25px;
  }

  ${space}
  ${color}
  ${border}
  ${typography}
  &:hover {
    color: ${({ hvrColor }) => hvrColor && themeGet(`colors.${hvrColor}`)};
    background-color: ${({ hvrBg }) => hvrBg && themeGet(`colors.${hvrBg}`)};
    border-color: ${({ hvrBorderColor }) =>
      hvrBorderColor && themeGet(`colors.${hvrBorderColor}`)};
  }
`;

const StyledButton = styled.button`
  ${ButtonCSS};

  ${({ textTransform }) =>
    textTransform &&
    css`
      text-transform: ${textTransform};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;

const StyledLink = styled.a`
  ${ButtonCSS};

  ${({ textTransform }) =>
    textTransform &&
    css`
      text-transform: ${textTransform};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;

export default Button;
