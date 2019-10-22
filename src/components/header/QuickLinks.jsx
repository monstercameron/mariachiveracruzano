import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Lang from './Lang'
import Call from './Call'
class QuickLinks extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        return ( 
            <Row className='text-center'>
                <Col sm={3} className='mr-auto border'>
                    <Lang/>
                </Col>
                <Col sm={3}  className='ml-auto border'>
                    <Call/>
                </Col>
            </Row>
         )
    }
}
export default QuickLinks