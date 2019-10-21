import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
class MainMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Row>
                <Col sm={8} className='mx-auto border'>
                    <Row className='text-center'>
                        <Col>Home</Col>
                        <Col>About</Col>
                        <Col>Service</Col>
                        <Col>Contact</Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default MainMenu