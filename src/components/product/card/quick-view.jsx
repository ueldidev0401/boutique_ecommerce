import {Modal, ModalBody, Row, Col} from "@bootstrap";
import {OffCanvasCloseBtn} from "@components/ui/offCanvas/style";
import ProductDetailsThumb from "@components/product/details/thumbnail";
import ProductDetailsContent from "@components/product/details/content";

const QuickView = ({product, isOpen, onHandler}) => {
    return (
        <Modal isOpen={isOpen} toggle={() => onHandler()} size="lg" modalClassName="ht-modal">
            <OffCanvasCloseBtn className="btn-close" onClick={() => onHandler()}>x</OffCanvasCloseBtn>
            <ModalBody>
                <Row>
                    <Col md={6}>
                        <ProductDetailsThumb thumbnails={product?.images?.edges}/>
                    </Col>

                    <Col md={6}>
                        <ProductDetailsContent product={product}/>
                    </Col>
                </Row>
            </ModalBody>
        </Modal>
    );
};

export default QuickView;
