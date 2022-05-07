import Link from "next/link";
import cn from "classnames";
import navData from "@data/nav";
import PropTypes from "prop-types";
import {IoIosArrowDown} from "react-icons/io";
import {Container, Col, Row} from "@bootstrap";
import {NavbarWrap, Nav, NavList, SubMenu} from "./desktop-nav.style";

const DesktopNav = ({bg, className}) => {
    return (
        <NavbarWrap bg={bg} className={cn(className)}>
            <Container>
                <Row>
                    <Col>
                        <Nav>
                            <NavList>
                                {navData.map((navItem, index) => (
                                    <li key={index} className={navItem.submenu ? "dropdown" : undefined}>
                                        <Link href={navItem.link}>
                                            <a>
                                                {navItem.text}
                                                {navItem.submenu && <IoIosArrowDown/>}
                                            </a>
                                        </Link>

                                        {navItem.submenu && (
                                            <SubMenu>
                                                {navItem.submenu.map((item) => (
                                                    item.list.map((subItem, index) => (
                                                        <li key={index}>
                                                            <Link href={subItem.link}>{subItem.text}</Link>
                                                        </li>
                                                    ))
                                                ))}
                                            </SubMenu>
                                        )}
                                    </li>
                                ))}
                            </NavList>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </NavbarWrap>
    );
};

DesktopNav.propTypes = {
    bg: PropTypes.string
};


export default DesktopNav;