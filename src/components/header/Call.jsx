import React, { Component } from 'react'
import {Row, Col, Container} from 'reactstrap'
class Call extends Component {
    state = {  }
    render() { 
        return ( 
            <Col>
                Call me {this.props.number}
            </Col>
         )
    }
}
export default Call