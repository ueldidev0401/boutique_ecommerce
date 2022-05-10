import cn from "classnames";
import PropTypes from "prop-types";
import HeaderTop from "@components/layout/header/header-top";
import {DesktopNavbar as Navbar} from "@components/layout/navbar";
import {HeaderArea} from "@components/layout/header/header.style";
import HeaderBottom from "@components/layout/header/header-bottom";

const Header = ({bg, className, onMiniCartHandler, onSearchBoxHandler, onMobileNavHandler, onConfigHandler, mobileNavHandleStatus}) => {
    return (
        <HeaderArea className={cn('header', className)}>
            {/* <HeaderTop
                className="d-none d-lg-block"
            /> */}

            <HeaderBottom
                onConfigHandler={onConfigHandler}
                onMiniCartHandler={onMiniCartHandler}
                onSearchBoxHandler={onSearchBoxHandler}
                onMobileNavHandler={onMobileNavHandler}
                mobileNavHandleStatus={mobileNavHandleStatus}
            />

            {/* <Navbar
                bg={bg}
                className="d-none d-lg-block"
            /> */}
        </HeaderArea>
    );
};

Header.propTypes = {
    bg: PropTypes.string,
    onMiniCartHandler: PropTypes.func.isRequired,
    onSearchBoxHandler: PropTypes.func.isRequired,
    onMobileNavHandler: PropTypes.func.isRequired,
    onConfigHandler: PropTypes.func.isRequired,
};

export default Header;