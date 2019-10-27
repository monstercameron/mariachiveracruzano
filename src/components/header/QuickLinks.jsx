import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import text from '../../vars/text'
import './style.css'
class QuickLinks extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        console.log(this.props)
        return (
            <Row className='text-center'>
                <Col sm={'auto'} className='mr-auto quick-link m-1 border text-capitalize' onClick={this.props.updateLang}>
                    {text.quick[this.props.lang].lang}
                </Col>
                <Col sm={'auto'} className='ml-auto m-1 quick-link border text-capitalize'>
                    {text.quick[this.props.lang].call} <a href={`tel:${text.quick.number}`}>{text.quick.number}</a>
                </Col>
            </Row>
        )
    }
}
export default QuickLinks