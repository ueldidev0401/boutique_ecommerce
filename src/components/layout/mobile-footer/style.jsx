import styled, {devices, themeGet} from "@styled";

export const FooterButtons = styled.div`
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: space-between;


  button {
    margin: 0;
    padding: 0;
    color: black;
    line-height: 1;
    font-size: 20px;
    text-align: center;
    transition: ${themeGet('transition')};
    font-family: ${themeGet('fonts.body')};

    span {
      display: block;
      font-size: 10px;
      margin-top: -2px;
    }

    &:hover {
      color: ${themeGet('colors.primary')};;
    }
  }
`

export const MobileFooterWrap = styled.div`
  left: 0;
  bottom: 0;
  z-index: 99;
  width: 100%;
  display: none;
  position: fixed;
  
  background: rgba(242, 242, 242, 0.63);
  border: 1px solid #EFEFEF;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.13);
  backdrop-filter: blur(4px);

  ${devices.md} {
    display: block;
  }
`