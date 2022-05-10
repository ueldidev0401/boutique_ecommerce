import cn from "classnames";
import Link from "next/link";
import navData from "@data/nav";
import PropTypes from "prop-types";
import Logo from "@components/ui/logo";
import OffCanvas from "@components/ui/offCanvas";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { MobileNav } from "@components/layout/navbar/mobile-nav.style";
import { getClosest, getSiblings, slideToggle, slideUp } from "@utils/method";
import { OffCanvasCloseBtn, OffCanvasHead } from "@components/ui/offCanvas/style";
import { useDispatch, useSelector } from "react-redux"; 
import { changeCurrentPageAction } from "@global/actions/cardActions";
import { BsShop } from 'react-icons/bs';
import { FcAbout } from 'react-icons/fc';
import { TiContacts } from 'react-icons/ti';
import translateImg from '@assets/image/footer/translate.png'
import replaceImg from '@assets/image/footer/replace.png'
import { BsExclamationSquare } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
const NavbarItem = ({ navbarItemName }) => {
    switch (navbarItemName) {
        case 'shop':
            return (<BsShop style={{ width: '100%', height: '100%' }} />);
            break;
        case 'about':
            return (<BsExclamationSquare style={{ width: '100%', height: '100%' }} />);

            break;
        case 'contact':
            return (<TiContacts style={{ width: '100%', height: '100%' }} />);

            break;
        case 'track':
            return (
                <div >
                    <img src={replaceImg.src} style={{ width: '100%', height: '100%' }} />
                </div>);

            break;
        default:
            break;
    }
}

const MobileNavbar = ({ isOpen, onHandler }) => {
    var dispatch = useDispatch();

    return (
        <OffCanvas open={isOpen} onHandler={onHandler}>
            <MobileNav>
                <ul style={{ marginTop: '55px' }}>
                    {navData.map(nav => (
                        <li key={nav?.text} style={{ marginBottom: '35px', display: 'flex', flexDirection: 'row' }}
                            onClick={(event => dispatch(changeCurrentPageAction(nav.index)))}
                        >
                            <div className="MobileNavIcon">
                                <NavbarItem navbarItemName={nav.icon} />
                            </div>
                                <a
                                    style={{ position: 'absolute', fontSize: '20px', marginLeft: '48px' }}
                                    className={cn({ 'mm-next-level': nav?.submenu || nav?.mega_menu })}
                                >
                                    {nav?.text}
                                </a>
                        </li>
                    ))}
                </ul>
                <div className="translator">
                    <div className="translatorImg">
                        <img src={translateImg.src} style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className="tanslatorName">Arabic</div>
                </div>
                <div className="connectTo">
                    <div className="whatsapp">
                        <RiWhatsappFill style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className="instagram" >
                        <AiFillInstagram style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className="facebook">
                        <BsFacebook style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className="helpline">
                        <p className="helplineText">Help Line</p>
                        <p className="helplineNumber">1-800-700-600</p>
                    </div>
                    <div className="copyrightForMobile">
                        © 2021 mysouq. All rights reserved
                    </div>
                </div>
            </MobileNav>
        </OffCanvas>
    );
};

MobileNavbar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onHandler: PropTypes.func.isRequired
};

export default MobileNavbar;
