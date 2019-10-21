import React, { Component } from 'react'
import {Row, Col} from 'reactstrap'
import flag from '../../assets/images/flag.jpg'
class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Row>
                <Col className='m-0 p-0'>
                    <img src={flag} alt='flag' className='img-fluid' />
                </Col>
            </Row>
         )
    }
}
export default Logo