import React, { Component } from 'react'
import {Row, Col} from 'reactstrap'
import flag from '../../assets/images/flag.jpg'
import './style.css'
class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Row className='logo' style={{backgroundImage:`url(${flag})`}}>
                <Col className='m-0 p-0'>
                test
                </Col>
            </Row>
         )
    }
}
export default Logo