import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import text from '../../vars/text'
import bg from '../../assets/images/bw-guitar.jpg'
import './style.css'
class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        // console.log(this.props)
        return (
            <Row className='landing' style={{ backgroundImage: `url(${bg})` }}>
                <Col sm={2}>
                </Col>
                <Col sm={8}>
                    <Row className='text-center'>
                        <Col sm={12} className=' mt-5 mb-3 border'>
                            {text.landing[this.props.lang].text1}
                        </Col>
                        <Col sm={12} className=' mt-5 mb-3 border'>
                            {text.landing[this.props.lang].text2}
                        </Col>
                        <Col sm={12} className=' mt-5 mb-5 border'>
                            {text.landing[this.props.lang].text3}
                        </Col>
                        <Col sm={12} className='mt-5 border'>
                            {text.landing[this.props.lang].text4}
                        </Col>
                    </Row>
                </Col>
                <Col sm={2}>
                </Col>
            </Row>
        )
    }
}
export default Landing