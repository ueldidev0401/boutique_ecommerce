import {useState} from "react";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {DropdownWrap, DropdownToggleButton, DropdownMenu} from "./dropdwon.style";

const Dropdown = ({align, heading ,children}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <DropdownWrap>
            <DropdownToggleButton
                className={isDropdownOpen ? 'show' : 'hide'}
                onClick={() => setIsDropdownOpen(prevState => !prevState)}
            >
                {heading && heading}
                {isDropdownOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}
            </DropdownToggleButton>
            <DropdownMenu align={align} className={isDropdownOpen ? 'show' : 'hide'}>
                {children}
            </DropdownMenu>
        </DropdownWrap>
    );
};

export default Dropdown;