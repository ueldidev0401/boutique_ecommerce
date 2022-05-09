import { Modal, ModalBody, ModalHeader, ModalFooter, Row, Col, Button } from "@bootstrap";
import { OffCanvasCloseBtn } from "@components/ui/offCanvas/style";
import ProductDetailsThumb from "@components/product/details/thumbnail";
import ProductDetailsContent from "@components/product/details/content";
import { useDispatch, useSelector } from "react-redux";
import { changeIsModalShowAction } from "@global/actions/cardActions";
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';
import { RadioGroup } from "react-radio-group";
import { useState } from 'react';

import Radio from "@components/ui/radio";
import Checkbox from "@components/ui/checkout";
import { HiOutlinePlus } from 'react-icons/hi';
import { HiOutlineMinus } from 'react-icons/hi';
import { BsChevronUp } from 'react-icons/bs';
const QuickView = ({ product, isOpen, onHandler }) => {
    var [selectedSizeValue, setSelectedSizeValue] = useState('small');
    const cardReducer = useSelector((state) => state).cardReducer;
    const dispatch = useDispatch();
    console.log('product?.images?.edges = ', product?.images?.edges);
    return (
        <Modal isOpen={isOpen} toggle={() => dispatch(changeIsModalShowAction(false))} size="lg" modalClassName="ht-modal" style={{ width: '1112px', height: '1420px' }}>
            <ModalBody style={{ padding: 0, width: '100%', height: '100%' }}>
                <div className="customModalHeader">
                    <p className="customModalHeaderTitle">SLAZENGER 1881 Sweatshirt</p>
                    <GrPrevious color="#655454" className="customModalHeaderPrevious" />
                    <GrNext color="#655454" className="customModalHeaderNext" />
                </div>
                <Row style={{ marginTop: '70.16px' }}>
                    <Col md={6} style={{ paddingLeft: '4.3%' }}>
                        <div style={{ width: '88.8%', }}>
                            <ProductDetailsThumb thumbnails={product?.images?.edges} />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="customModalBodyPrice">
                            {product.price}
                            <div className="customModalBodyPriceOld">{product.oldPrice}</div>
                        </div>
                        <div className="customBodalBodySelectOptions">
                            <p>Select Options</p>
                            <p className="custommodalBodySelectOptionsSize">Size</p>
                            <div className="customModalBodySelectOptionsSizeOptions">
                                <div style={{
                                    display: 'flex',
                                }}>
                                    <Radio label="Small" name="size" />
                                </div>
                                <div style={{
                                    display: 'flex',
                                }}>
                                    <Radio label="Medium" name="size" />

                                </div>
                                <div style={{
                                    display: 'flex',
                                }}>
                                    <Radio label="Large" name="size" />

                                </div>

                            </div>
                            <div className="customModalBodySelectOptionsSizePrice">
                                <p>
                                    $3.00
                                </p>
                                <p>
                                    $3.50
                                </p>
                                <p>
                                    $4.00
                                </p>
                            </div>

                            <p className="custommodalBodySelectOptionsColour">Colour</p>
                            <div className="customModalBodySelectOptionsColourOptions">
                                <div style={{
                                    display: 'flex',
                                }}>
                                    <Radio label="Red" name="Colour" />
                                </div>
                                <div style={{
                                    display: 'flex',
                                }}>
                                    <Radio label="Black" name="Colour" />

                                </div>
                                <div style={{
                                    display: 'flex',
                                }}>
                                    <Radio label="White" name="Colour" />
                                </div>

                            </div>
                            <div className="customModalBodySelectOptionsColourPrice">
                                <p>
                                    $3.00
                                </p>
                                <p>
                                    $3.50
                                </p>
                                <p>
                                    $4.00
                                </p>
                            </div>

                            <p className="custommodalBodySelectOptionsExtra">Extras</p>
                            <div className="customModalBodySelectOptionsExtraOptions">
                                <div style={{
                                    display: 'flex',
                                    marginBottom: '10px'
                                }}>
                                    <Checkbox label="Cap" name="Extra" />
                                </div>
                                <div style={{
                                    display: 'flex',

                                }}>
                                    <Checkbox label="Belt" name="Extra" />
                                </div>

                            </div>
                            <div className="customModalBodySelectOptionsExtraPrice">
                                <p>
                                    $3.00
                                </p>
                                <p>
                                    $3.00
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginTop: '111px', marginLeft: '5.3%', marginRight: '6.8%', fontFamily: 'Saira' }}>
                    <div class="customModalBodyDescription">
                        <p className="customModalBodyDescriptionTitle">Description</p>
                        <p className="customModalBodyDescriptionContent">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus mi nec orci luctus, eu congue neque venenatis. Nunc tincidunt viverra mi elementum eleifend. Nunc fringilla felis lectus. Nunc feugiat ipsum id vestibulum rhoncus. Pellentesque at elementum lectus. Donec pulvinar justo non mi vehicula hendrerit. Phasellus blandit nunc vel felis cursus fermentum. Donec mattis sollicitudin commodo. Sed tellus leo, dignissim a diam et, fringilla tincidunt mauris. Vivamus quam tellus, maximus sit amet enim sed, porttitor bibendum lorem. Phasellus faucibus quam sit amet massa tincidunt faucibus
                        </p>
                    </div>
                </Row>
            </ModalBody>
            <div className="customModalBodyBottom">
                Medium, Black, Cap, Belt
            </div>
            <div className="customModalFooter">
                <div style={{
                    width: '3.5%', height: '100%',
                    position: 'absolute',
                    left: '6.1%',
                }}>
                    <HiOutlinePlus class="customModalFooterPlus" />

                </div>

                <p className="customModalFooterCounter">3</p>

                <div style={{
                    width: '3.5%', height: '100%',
                    position: 'absolute',
                    left: '16.1%',
                }}>
                    <HiOutlineMinus class="customModalFooterPlus" />
                </div>

                <p className="customModalFooterPrice">$12.50</p>

                <div className="customModalFooterButton">
                    {/* <Button color="#E84242"><p className="customModalFooterButtonTitle">Add to Cart</p></Button> */}
                    <a class="btn btn-primary customModalFooterButtonTitle">Add to Cart</a>
                </div>

                <div style={{ 
                    position: "absolute",
                    right: '2.6%',
                    top: '12.63px',
                    fontStyle: 'normal',
                    fontWeight: 300,
                    fontSize: '1.25vw',
                    lineHeight: '28px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    fontFamily: 'Saira',
                    color: '#655454',
                    cursor: 'pointer',
                    alignItems: 'center',
                  }} onClick={() => {
                      dispatch(changeIsModalShowAction(false));
                  }}>
                    <BsChevronUp fontSize={'40px'} color='#655454' />
                    CLOSE
                  </div>
            </div>
        </Modal>
    );
};

export default QuickView;
