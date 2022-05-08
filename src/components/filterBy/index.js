import { Fragment } from "react";
import { Col, Container, Row } from "@bootstrap";
import { GoPlus } from 'react-icons/go';
import filterByStandard from '@assets/image/body/section1/filter.png'
import filterByExpended from '@assets/image/body/section1/grid.png'
import { IoFilter } from 'react-icons/io'
// import { IoIosAlbums } from "react-icons/io";
import { MdFilterList } from 'react-icons/md';
import { HiViewGrid } from 'react-icons/hi';
const FilterBy = ({ stuff, style }) => {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col style={{ flexDirection: "row-reverse", display: "flex", }} md={12}>
                        <HiViewGrid fontSize='50px'/>
                        <MdFilterList fontSize={'50px'}/>
                        <div style={{
                            width: '129px',
                            height: '12px',
                            fontSize: '34px'
                        }}>Filter By</div>
                    </Col>
                </Row>
            </Container>
        </Fragment >
    );
};

export default FilterBy;
