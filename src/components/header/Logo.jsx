import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import flag from "../../assets/images/flag.jpg";
import "./style.css";
class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Row className="logo" style={{ backgroundImage: `url(${flag})` }}>
                <Col sm={8} className="mx-auto text-center logo-font">
                    <Row>
                        <Col className='logo-title font-satisfy p-2 rounded'>Mariachi Veracruzano</Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}
export default Logo;
