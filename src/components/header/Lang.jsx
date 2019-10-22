import React, { Component } from 'react'
import {Row, Col, Container} from 'reactstrap'
class Lang extends Component {
    state = {  }
    render() { 
        return ( 
            <Col>
                Lang me {this.props.number}
            </Col>
         )
    }
}
export default Lang