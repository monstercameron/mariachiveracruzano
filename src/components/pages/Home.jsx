import React, { Component } from 'react'
import Layout from '../layouts/Desktop'
import Logo from '../header/Logo'
import Menu from '../menu/MainMenu'
import QuickLinks from '../header/QuickLinks'
import Landing from '../sections/Landing'
import About from '../sections/About'
import Services from '../sections/Services'
import Contacts from '../sections/Contacts'
class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    render() { 
        return ( 
            <Layout 
                quick={QuickLinks} 
                header={Logo} 
                menu={Menu} 
                landing={Landing}
                about={About}  
                services={Services}
                contacts={Contacts}
            />
         )
    }
}
export default HomePage