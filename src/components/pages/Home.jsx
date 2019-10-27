import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Layout from '../layouts/Desktop'
import Logo from '../header/Logo'
import Menu from '../menu/MainMenu'
import QuickLinks from '../header/QuickLinks'
import Landing from '../sections/Landing'
import About from '../sections/About'
import Services from '../sections/Services'
import Contacts from '../sections/Contacts'
import QueryString from 'query-string'
class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lang: this.getLang(this.props),
            updateLang: this.updateLang
        }
    }
    getLang = (props) => {
        const { lang } = QueryString.parse(props.location.search)
        const supportedLang = ['es', 'eng']
        if (lang && supportedLang.includes(lang)) {
            return lang
        } else {
            return 'eng'
        }
    }
    updateLang = () => {
        const newLang = this.state.lang === 'es' ? 'eng': 'es'
        this.props.history.push({search:`?lang=${newLang}`})
        this.setState({lang:newLang})
    }
    render() {
        // console.log(this.props, this.state)
        return (
            <Layout
                {...this.state}
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
export default withRouter(HomePage)