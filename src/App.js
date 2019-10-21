import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import HomePage from './components/pages/Home'
function App() {
  return (
    <HashRouter>
      <Route exact path='/' component={HomePage} />
      <Route path='/about' component={() => <div>about</div>} />
      <Route path='/service' component={() => <div>service</div>} />
      <Route path='/contact' component={() => <div>contact</div>} />
      <Route path='/landing' component={() => <div>landing</div>} />
    </HashRouter>
  )
}
export default App
