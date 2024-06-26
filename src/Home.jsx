import React from "react";
import "./Home.css"

function Home(){
  return(
  
    <div>
        <div className="home">
          <div className="home__container">
            <img src="https://www.vocso.com/blog/wp-content/uploads/2022/02/eCommerce-Website-Features-1920-x-1080-1024x576.jpg" alt="" className="home__image" />

          <div className="home__row">
           < Product/>
           < Product/>
          </div>
          <div className="home__row">
           < Product/>
           < Product/>
           < Product/>
          </div>
          <div className="home__row">
           < Product/>
          </div>



          </div>
        </div>
    </div>

  )
}

export default Home;