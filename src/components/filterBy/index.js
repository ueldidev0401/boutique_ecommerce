import { Fragment } from "react";
import { Col, Container, Row } from "@bootstrap";
import { GoPlus } from 'react-icons/go';
import filterByStandard from '@assets/image/body/section1/filter.png'
import filterByExpended from '@assets/image/body/section1/grid.png'
import { IoFilter } from 'react-icons/io'
// import { IoIosAlbums } from "react-icons/io";
import { MdFilterList } from 'react-icons/md';
import { HiViewGrid } from 'react-icons/hi';
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
// import { getSampleData } from "@global/actions/sampleAction";
import { changeViewAction } from "@global/actions/cardActions";

const FilterBy = ({ stuff, style }) => {
    var [isGridViewActive, setIsGridViewActive] = useState(false)
    const dispatch = useDispatch();

    const sampleListData = useSelector((state) => state);

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col style={{ flexDirection: "row-reverse", display: "flex", }} md={12}>
                        <HiViewGrid fontSize='50px' cursor={'pointer'} color={isGridViewActive ? "#FF0101" : "#D2D2D2"} onClick={() => {
                            setIsGridViewActive(true);
                            dispatch(changeViewAction(true));
                        }} />
                        <MdFilterList fontSize={'50px'} cursor={'pointer'} color={!isGridViewActive ? "#FFCB65" : "#D2D2D2"} onClick={() => {
                            setIsGridViewActive(false);
                            dispatch(changeViewAction(false));
                        }} />
                        <div style={{
                            width: '129px',
                            height: '12px',
                            fontSize: '25px',
                            color: '#B4B1B1',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>Filter By</div>
                </Col>
            </Row>
        </Container>
        </Fragment >
    );
};

export default FilterBy;
