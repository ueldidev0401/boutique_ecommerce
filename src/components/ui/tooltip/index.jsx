import {useState} from "react";
import PropTypes from 'prop-types';
import {Tooltip as BootTooltip} from "@bootstrap";


const Tooltip = ({children, placement, target}) => {
    const [isOpen, setIsOpen] = useState(false);
    const theme = {
        ...BootTooltip.defaultProps.theme,
        '$tooltip-font-size': '12px'
    }

    return (
        <BootTooltip
            theme={theme}
            isOpen={isOpen}
            target={target}
            placement={placement}
            delay={{shape: 0, hide: 80}}
            toggle={() => setIsOpen(prevState => !prevState)}
        >
            {children}
        </BootTooltip>
    );
};

Tooltip.defaultProps = {
    placement: "left"
}

Tooltip.propTypes = {
    placement: PropTypes.string,
    target: PropTypes.string
};


export default Tooltip;
