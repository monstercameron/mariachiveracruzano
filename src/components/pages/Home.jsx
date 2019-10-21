import React, { Component } from 'react'
import Layout from '../layouts/Desktop'
import Logo from '../header/Logo'
import Menu from '../menu/MainMenu'
class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        return ( 
            <Layout header={Logo} menu={Menu} />
         )
    }
}
 
export default HomePage