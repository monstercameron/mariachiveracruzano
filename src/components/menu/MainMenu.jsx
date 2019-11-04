import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import './style.css'
class MainMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Row>
                <Col sm={8} className='mx-auto mt-1 mb-1'>
                    <Row className='text-center text-'>
                        <Col className='menu-item rounded mr-1 ml-1 p-1 pt-2 pb-2'>Home</Col>
                        <Col className='menu-item rounded mr-1 ml-1 p-1 pt-2 pb-2'>About</Col>
                        <Col className='menu-item rounded mr-1 ml-1 p-1 pt-2 pb-2'>Service</Col>
                        <Col className='menu-item rounded mr-1 ml-1 p-1 pt-2 pb-2'>Contact</Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default MainMenu