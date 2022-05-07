import Link from "next/link";
import { useState } from "react";
import PropTypes from "prop-types";
import { useIsLoggedIn } from "@hooks";
import Logo from "@components/ui/logo";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "@bootstrap";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { getCartProductsQuantity } from "@utils/product";
import { AiOutlineMenu, AiOutlineSetting } from "react-icons/ai";
import { IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import cart from '@assets/image/header/cart.png'
import {
  DropdownMenu,
  DropdownToggleButton,
} from "@components/ui/dropdown/dropdwon.style";
import {
  ActionItem,
  CartItemCount,
  HeaderAction,
  HeaderActionBtn,
  HeaderBottomWrap,
} from "@components/layout/header/header.style";

const HeaderBottom = ({
  onConfigHandler,
  onMiniCartHandler,
  onSearchBoxHandler,
  onMobileNavHandler,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const cartQuantity = getCartProductsQuantity(shoppingCart);
  const isLoggedIn = useIsLoggedIn();
  return (
    <HeaderBottomWrap>
      <Container style={{ maxWidth: '90%' }}>
        <Row className="align-items-center header">
          <Col xs={3} lg={3} className="d-lg-none">
            <HeaderActionBtn onClick={() => onMobileNavHandler()}>
              <AiOutlineMenu />
            </HeaderActionBtn>
          </Col>
          <Col xs={3} lg={4} className="text-left text-lg-left">
            <div style={{
              fontFamily: 'Rubik',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '21px',
            }}>
              Help Line
            </div>
            <div style={{
              fontFamily: 'Rubik',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '21px',
              color: '#ffcb65'
            }}>
              1-800-700-600
            </div>
          </Col>

          <Col xs={4} lg={3} className="d-lg-none text-right">
            <HeaderAction>
              <ActionItem>
                <HeaderActionBtn onClick={() => onSearchBoxHandler()}>
                  <IoSearchOutline />
                </HeaderActionBtn>
              </ActionItem>
              <ActionItem>
                <HeaderActionBtn onClick={() => onConfigHandler()}>
                  <AiOutlineSetting />
                </HeaderActionBtn>
              </ActionItem>
            </HeaderAction>
          </Col>
          <Col xs={3} lg={4} className="text-center text-lg-center">
            <Logo className="logo--desktop" src="/images/logo/logo.png" />

            <Logo
              width={100}
              height={30}
              className="logo--mobile"
              src="/images/logo/logo.png"
            />
          </Col>

          <Col xs={4} lg={4} className="d-none d-lg-block">
            <HeaderAction>
              <ActionItem>
                <HeaderActionBtn onClick={() => onSearchBoxHandler()}>
                  <IoSearchOutline />
                </HeaderActionBtn>
              </ActionItem>

              {/* <ActionItem>
                <DropdownToggleButton
                  color="#000"
                  className="header-action-btn"
                  onClick={() => setIsDropdownOpen((prevState) => !prevState)}
                >
                  <IoPersonOutline />
                </DropdownToggleButton>
                <DropdownMenu
                  align="center"
                  className={isDropdownOpen ? "show" : "hide"}
                >
                  {isLoggedIn ? (
                    <li>
                      <Link href="/account">My Account</Link>
                    </li>
                  ) : (
                    <li>
                      <Link href="/signin">Signin</Link>
                    </li>
                  )}
                  <li>
                    <Link href="/cart">Cart</Link>
                  </li>
                  <li>
                    <Link href="/wishlist">Wishlist</Link>
                  </li>
                  <li>
                    <Link href="/compare">Compare</Link>
                  </li>
                  {isLoggedIn && (
                    <li>
                      <Link href="/logout">Logout</Link>
                    </li>
                  )}
                </DropdownMenu>
              </ActionItem> */}

              <ActionItem>
                <HeaderActionBtn
                  className="pr-1"
                  onClick={() => onMiniCartHandler()}
                >
                  {/* <HiOutlineShoppingBag /> */}
                  <img src={cart.src} style={{ width: '79.8%' }} />

                  <CartItemCount>{4}</CartItemCount>
                </HeaderActionBtn>
              </ActionItem>
            </HeaderAction>
          </Col>
        </Row>
      </Container>
    </HeaderBottomWrap>
  );
};

HeaderBottom.propTypes = {
  onConfigHandler: PropTypes.func.isRequired,
  onMiniCartHandler: PropTypes.func.isRequired,
  onSearchBoxHandler: PropTypes.func.isRequired,
  onMobileNavHandler: PropTypes.func.isRequired,
};

export default HeaderBottom;
