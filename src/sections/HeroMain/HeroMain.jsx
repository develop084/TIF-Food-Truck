import React from "react";
import "./stylesHeroMain.css";
import Button from "../../components/Button/Button";
function HeroMain() {
  return (
    <div className="main-hero-wrapper">
      {/* navbar with logo and button  */}

      <div className="navbar-container">
        <img
          className="logo-truck"
          src="./assetsh1/food_truck.png"
          alt="truck logo"
        />
        <Button className="navbar-button" text={"Get in Touch"} isHollow />
        <img className="vector-red" src="./assetsh1/Rectangle 400.png"/>
        <img className="vector-red" src="./assetsh1/Vector 1.svg"/>
      </div>

      <div className="content-main">
        {/* left content  */}
        <div className="left-content-main">
        <h1 className="heading-main">Discover the <br></br> <span className="color-diff-best">Best </span>  Food <br></br> and Drinks</h1>
        <p className="sub-header">
        Naturally made Healthcare Products for the<br></br> better care & support of your body.
        </p>

        <Button text={"Explore Now!"}/>
        </div>
        <div className="image-wrapper">    
           
        </div>
   
       
      </div>


      {/* about us section */}


     
    </div>
  );
}

export default HeroMain;
