import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className="App">
    <div className="header_logo">

    </div>
    <div className="header_search">

    </div>
    <div className="header_navigation">
        <div className="nav_item">
          <span className="nav_itemLineOne">Hello Guest</span>
          <span className="nav_itemLineTwo">Sign in</span>
        </div>
        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>
        <div className="nav_item">
         < ShoppingBasketIcon fontSize='large'/>
          <span className="nav_itemLineTwo">0</span>

        </div>
      
    </div>
  </div>
    </>
  )
}

export default App
