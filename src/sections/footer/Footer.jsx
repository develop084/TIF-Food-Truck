import React from 'react'
import "./stylesFooter.css"
function Footer() {
  return (
    <div className='footer-wrapper'>
      <div>
      <img src="./assetsh1/food_truck.png"/>
      </div>
       <div className='contact'>
        <p className='heading-footer'>Contact Us</p>
        <div className='more-options'>
        <p>Lorem Ipsum Pvt Ltd.5/1, Magalton <br></br> Road, Phartosh Gate near YTM<br></br> Market, XYZ-343434</p>
         <p>example2020@gmail.com</p>
         <p>(904) 443-0343</p>
        </div>
        
       </div>
       <div className='more'>
        <p className='heading-footer'>More</p>
        <div className='more-options'>
        <p>About Us</p>
         <p>Products</p>
         <p>Career</p>
         <p>Contact Us</p>
        </div>
         
       </div>


       <div className='copy-social-links'>
       <p className='heading-footer social-heading'> Social Links</p>
        <div className='social-icon-wrapper'>
       
        <img src="./assetsh1/Path2.svg"/>
        <img src="./assetsh1/Path3.svg"/>
        <img src="./assetsh1/Path1.svg"/>
           
           
        </div>
        <p className='copyright'>© 2022 Food Truck Example</p>
       </div>
    </div>
  )
}

export default Footer