import React, { Component } from 'react'
import {Container} from 'reactstrap'
import './style.css'
class DesktopLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        console.log(this.props)
        return ( 
            <Container fluid>
                {<this.props.quick />}
                {<this.props.header />}
                {<this.props.menu />}
                {<this.props.landing />}
                {<this.props.about />}
                {<this.props.services />}
                {<this.props.contacts />}
            </Container>
         )
    }
}
export default DesktopLayout