import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Header from'./Header.jsx'
import Home from './Home.jsx'
import Checkout from './Checkout.jsx'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
// 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className="App">
    <Router>
      <Switch>
        
        <Route  path="/checkout">
          <Header/>
          <Checkout />    
        </Route>

        <Route exact path="/">
          <Header/>
          <Home/>
        </Route>

      </Switch>
    </Router>
      {/* <Header/>
      <Home/> */}
   </div>
    </>
  )
}

export default App
