import React from "react";
import {Link } from "react-router-dom";
import './Pricing.css';
import MenuDropdown from '../components/MenuDropdown'
const Pricing=()=> {
  const Perks =() =>{
    return (
        <div className="pricing-perks-background" style={{backgroundColor:"#D34848"}}>
            <div >
            <MenuDropdown />
            <p style={{paddingLeft:"100px"}}className="perks-title">PERKS</p>
            <hr className="line" style={{backgroundColor:"white",marginLeft:"100px"}}/>
            <p className="perks-content" style={{color:"white",paddingLeft:"100px"}}>Subscription Payment Model</p>
            <p className="perks-content2" style={{paddingLeft:"100px",color:"black"}}>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",paddingTop:"325px",paddingLeft:"30px"}}>
            <hr className="line" style={{backgroundColor:"white"}}/>
            <p className="perks-content" style={{color:"white"}}>No Fee Cancelation Policy</p>
            <p className="perks-content2" style={{color:"black"}}>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",paddingTop:"325px",paddingLeft:"30px"}}>
            <hr className="line" style={{backgroundColor:"white"}}/>
            <p className="perks-content" style={{color:"white"}}>Subscription Payment Model</p>
            <p className="perks-content2" style={{color:"black"}}>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
            </div>
            
        
        </div>
        
    );
};
    return (
      <div>
     <div className="pricing-page">
       <div style={{display:"flex",flexDirection:"column"}}>
         <MenuDropdown/>
         <p className="pricing-title">PRICING</p>
         <p className="pricing-content">Test out our app today! Choose from three subscription Based payment models.</p>
         <div className="pricing-container">
         <div>
           <p className="plan-title" style={{color: "#D24848" }}>
           BASIC
           </p>
           <hr className="line" style={{backgroundColor:"#D24848",marginLeft:"183px"}}/>
           <p style={{color: "#D24848",marginLeft:"183px" }}className="plan-title2">MONTHLY</p>
           <p style={{color: "#D24848",marginLeft:"183px" }}className="price">$9</p>
           <ul style={{marginLeft:"183px" }}class="music">
          <li>Very Good</li>
          <li>Amazing</li>
          <li>Perfect Job</li>
          <li>Love this</li>
          <li>It's so good</li>
          <li>Feature</li>
          </ul>
          <Link to="/Payment">
                <button 
                style={{backgroundColor: "#D24848" ,color:"white"}}
                className = "btn-select">Select</button></Link>
         </div>
         <div>
           <p className="plan-title" style={{color: "#FFB33F" }}>
           ADVANCED
           </p>
           <hr className="line" style={{backgroundColor:"#FFB33F",marginLeft:"183px"}}/>
           <p style={{color: "#FFB33F",marginLeft:"183px" }}className="plan-title2">YEARLY</p>
           <p style={{color: "#FFB33F",marginLeft:"183px" }}className="price">$99</p>
           <ul style={{marginLeft:"183px" }}class="music">
          <li>Very very good</li>
          <li>Even Amazing</li>
          <li>Perfect Job</li>
          <li>Love this more</li>
          <li>It’s so so good</li>
          <li>More Features</li>
          </ul>
          <Link to="/Payment">
                <button 
                style={{backgroundColor: "#FFB33F" ,color:"white"}}
                className = "btn-select">Select</button></Link>
         </div>
         <div>
           <p className="plan-title" style={{color: "#1FE1E9" }}>
           PRO
           </p>
           <hr className="line" style={{backgroundColor:"#1FE1E9",marginLeft:"183px"}}/>
           <p style={{color: "#1FE1E9",marginLeft:"183px" }}className="plan-title2">YEARLY</p>
           <p style={{color: "#1FE1E9",marginLeft:"183px" }}className="price">$120</p>
           <ul style={{marginLeft:"183px" }}class="music">
          <li>Very very good</li>
          <li>Even more</li>
          <li>Perfect Job</li>
          <li>Love this more</li>
          <li>It’s so so good</li>
          <li>More Features</li>
          </ul>
          <Link to="/Payment">
                <button 
                style={{backgroundColor: "#1FE1E9" ,color:"white"}}
                className = "btn-select">Select</button></Link>
         </div>
       </div>
       
       </div>

     </div>
     <div><Perks/></div>
     
      </div>

    );
  }
  
  export default Pricing;
  