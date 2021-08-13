import React from 'react';
import '../../App.css';
import { Row, Col } from 'reactstrap';
import devKhonanimated from '../video/devKhon.mp4'


const Banner = () => {
    return (
        <Row className="banner-row">
        <Col className="col-12">
        <div className="logo-vid">
            <video autoPlay loop muted>
                <source src={devKhonanimated} type="video/mp4" className="src-vid"/>
            </video>
        </div>
        </Col>
        </Row>
    )
}

export default Banner;