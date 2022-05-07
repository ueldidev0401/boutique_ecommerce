import PropTypes from "prop-types";
import {
  OffCanvasWrap,
  OffCanvasInner,
  OffCanvasOverlay,
  OffCanvasContent,
} from "./style";

const OffCanvas = ({ children, open, onHandler, position, maxWidth }) => {
  return (
    <OffCanvasWrap open={open} position={position}>
      <OffCanvasInner maxWidth={maxWidth}>
        <OffCanvasContent>{children}</OffCanvasContent>
      </OffCanvasInner>
      <OffCanvasOverlay onClick={() => onHandler()} />
    </OffCanvasWrap>
  );
};

OffCanvas.propTypes = {
  position: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onHandler: PropTypes.func.isRequired,
};

export default OffCanvas;
