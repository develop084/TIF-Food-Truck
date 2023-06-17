import React from "react";
import "./stylesAboutus.css";
import Button from "../../components/Button/Button";
function AboutUs() {
  return (
    <div className="about-us-wrapper">
      <div className="image-wrapper-about">
        <img src="./assetsh1/about-cooking.png" />
      </div>
      <div className="right-section-text">
        <h1 className="heading-about">About Us</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and <br></br>typesetting
          industry. Lorem Ipsum has been the industry's <br></br>standard dummy text ever
          since the 1500s, when an unknown<br></br> printer took a galley of type and
          scrambled it to make a type <br></br> specimen book. t has survived not only
          five centuries.
          
        </p>
        <span className="button-btm"><Button text={"Read More"}/></span>
        
      </div>
   
    </div>
  );
}

export default AboutUs;
