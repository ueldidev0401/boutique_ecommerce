import cn from "classnames";
import Link from "next/link";
import navData from "@data/nav";
import PropTypes from "prop-types";
import Logo from "@components/ui/logo";
import OffCanvas from "@components/ui/offCanvas";
import {CgMathPlus, CgMathMinus} from "react-icons/cg";
import {MobileNav} from "@components/layout/navbar/mobile-nav.style";
import {getClosest, getSiblings, slideToggle, slideUp} from "@utils/method";
import {OffCanvasCloseBtn, OffCanvasHead} from "@components/ui/offCanvas/style";

const MobileNavbar = ({isOpen, onHandler}) => {
    const onNavHandler = (e) => {
        const target = e.target;
        const hasSubmenus = getSiblings(target);
        hasSubmenus.length > 0 && e.preventDefault();
        target.classList.toggle('menu-expand');
        const parent = getClosest(target, "LI");
        const childNodes = parent.childNodes;
        const parentSiblings = getSiblings(parent);
        parentSiblings.forEach((sibling) => {
            const sibChildNodes = sibling.childNodes;
            sibChildNodes.forEach((child) => {
                if (child.classList.contains('mm-next-level')) {
                    child.classList.remove('menu-expand');
                }
                if (child.nodeName === "UL") {
                    slideUp(child, 300);
                }
            });
        });
        childNodes.forEach((child) => {
            if (child.nodeName === "UL") {
                slideToggle(child, 300);
            }
        });
    }


    return (
        <OffCanvas open={isOpen} onHandler={onHandler}>
            <OffCanvasHead>
                <Logo
                    width={100}
                    src="/images/logo/logo.png"
                />
                <OffCanvasCloseBtn onClick={() => onHandler()}>x</OffCanvasCloseBtn>
            </OffCanvasHead>

            <MobileNav>
                <ul>
                    {navData.map(nav => (
                        <li key={nav?.text}>
                            <Link href={nav?.link}>
                                <a
                                    onClick={(event => onNavHandler(event))}
                                    className={cn({'mm-next-level': nav?.submenu || nav?.mega_menu})}
                                >
                                    {nav?.text}
                                    {(nav?.submenu || nav?.mega_menu) && <CgMathPlus className="plus"/>}
                                    {(nav?.submenu || nav?.mega_menu) && <CgMathMinus className="minus"/>}
                                </a>
                            </Link>
                            {nav?.submenu && (
                                nav?.submenu.map((subitem, idx) => (
                                    <ul key={idx}>
                                        {subitem?.list.map(item => (
                                            <li key={item?.text} className={item.badge}>
                                                <Link href={item?.link}>{item?.text}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                ))
                            )}
                        </li>
                    ))}
                </ul>
            </MobileNav>
        </OffCanvas>
    );
};

MobileNavbar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onHandler: PropTypes.func.isRequired
};

export default MobileNavbar;
