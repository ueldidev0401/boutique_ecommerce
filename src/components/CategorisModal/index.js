import { Modal, ModalBody, ModalHeader, ModalFooter, Row, Col, Button } from "@bootstrap";
import { OffCanvasCloseBtn } from "@components/ui/offCanvas/style";
import ProductDetailsThumb from "@components/product/details/thumbnail";
import ProductDetailsContent from "@components/product/details/content";
import { useDispatch, useSelector } from "react-redux";
import { changeIsCategoriesModalShowAction } from "@global/actions/cardActions";
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';
import { RadioGroup } from "react-radio-group";
import { useState } from 'react';

import Radio from "@components/ui/radio";
import Checkbox from "@components/ui/checkout";
import { HiOutlinePlus } from 'react-icons/hi';
import { HiOutlineMinus } from 'react-icons/hi';
import { BsChevronUp } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
const CategoriesModal = ({ product, isOpen, onHandler }) => {
    var [selectedSizeValue, setSelectedSizeValue] = useState('small');
    const cardReducer = useSelector((state) => state).cardReducer;
    const dispatch = useDispatch();
    console.log('product?.images?.edges = ', product?.images?.edges);
    return (
        <Modal isOpen={cardReducer.isCategoriesModalSHow} toggle={() => dispatch(changeIsCategoriesModalShowAction(false))} size="lg" modalClassName="ht-modal" style={{ width: '75.9%', height: '357px' }}>
            <ModalBody style={{ padding: 0, width: '100%', height: '100%' }}>
                <div className="customCategorisModalHeader">
                    <p className="customCategorisModalHeaderTitle">Categories</p>
                    <div className="customCategorisModalHeaderCloseBtn">
                        <AiOutlineClose color="#E84242" style={{ width: '100%', height: '100%' }} onClick={() => {
                            dispatch(changeIsCategoriesModalShowAction(false))
                        }} />
                    </div>

                </div>
                <Row className='customCategorisModalBody'>
                    <ul style={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        textAlign: 'center',
                        paddingTop: '10px',
                        paddingBottom: '10px',
                    }}>
                    <li className="customCategorisModalBodyCategoryList">All Categories</li>
                    <li className="customCategorisModalBodyCategoryList">Apparel</li>
                    <li className="customCategorisModalBodyCategoryList">Watches</li>
                    <li className="customCategorisModalBodyCategoryList">Cloths</li>
                    <li className="customCategorisModalBodyCategoryList">Bags &amp; Accessories</li>
                    <li className="customCategorisModalBodyCategoryList">Wäsche</li>
                    <li className="customCategorisModalBodyCategoryList">NEU in Bekleidung</li>
                </ul>
            </Row>
        </ModalBody>
        </Modal >
    );
};

export default CategoriesModal;
