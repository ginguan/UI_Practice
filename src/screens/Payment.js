import React from "react";
import {Link } from "react-router-dom";
import './Payment.css';
import MenuDropdown from '../components/MenuDropdown1';

const Payment=()=> {
    return (
      <div className="payment-background">
          <div >
            <MenuDropdown  /></div>
            <p className="payment-title"> PAYMENT</p>
            <p className="section">
            1. Select your plan
            </p>
            <div style={{ marginLeft:"183px",display:"flex",flexDirection: "row"}}>

            <p className="section1" style={{color: "#D24848"}}>&#9711;BASIC</p>
            <p className="section1" style={{color: "#FFB33F",marginLeft:"20px"}}>
            &#9711;ADVANCED
            </p> 
            <p className="section1" style={{color: "#1FE1E9",marginLeft:"20px"}}>
            &#9711;PRO
            </p> 

            </div>
            <div style={{ display:"flex",flexDirection: "row"}}>
              <div style={{ display:"flex",flexDirection: "column"}}>
              <p className="section">2. Billing Information</p>
              <label className="small-title" style={{ marginLeft:"183px"}}>
              FULL NAME
              </label>
              <input style={{ marginLeft:"183px"}} type="text" ></input>
              <label className="small-title" style={{ marginLeft:"183px"}}>
              BILLING ADDRESS
              </label>
              <input style={{ marginLeft:"183px"}} type="text" ></input>
              <div style={{ display:"flex",flexDirection: "row"}}>
                <div style={{ display:"flex",flexDirection: "column"}}>
                <label className="small-title" style={{ marginLeft:"183px"}}>
                CITY
                </label>
                <input style={{ marginLeft:"183px",width:"321px"}} type="text" ></input>
                </div>
                <div style={{ display:"flex",flexDirection: "column"}}>
                <label className="small-title" style={{ marginLeft:"33px"}}>
                POSTAL CODE
                </label>
                <input style={{ marginLeft:"33px",width:"321px"}} type="text" id="fname" name="fullname"></input>
                </div>
              </div>
              <label className="small-title" style={{ marginLeft:"183px"}}>
              COUNTRY
                </label>
                <select style={{ marginLeft:"183px"}} ></select>
                <p className="acknowledgement">By continuing, I acknowledge that I’ve read and agree to the Terms of Service &#38; Privacy Policy.</p>
                <button className = "btn-tryitnow">DOWNLOAD</button>
              </div>
              <div style={{ display:"flex",flexDirection: "column"}}>
              <p className="section">3. Credit Card Information</p>
              <label className="small-title" style={{ marginLeft:"183px"}}>
              CARDHOLDER’S NAME
              </label>
              <input style={{ marginLeft:"183px"}} type="text" ></input>
              <label className="small-title" style={{ marginLeft:"183px"}}>
              CARD NUMBER
              </label>
              <input style={{ marginLeft:"183px"}} type="text" ></input>
              <div style={{ display:"flex",flexDirection: "row"}}>
                <div style={{ display:"flex",flexDirection: "column"}}>
                <label className="small-title" style={{ marginLeft:"183px"}}>
                EXPIRY MONTH
                </label>
                <select style={{ marginLeft:"183px",width:"321px"}} type="text" ></select>
                </div>
                <div style={{ display:"flex",flexDirection: "column"}}>
                <label className="small-title" style={{ marginLeft:"33px"}}>
                EXPIRY YEAR
                </label>
                <select style={{ marginLeft:"33px",width:"321px"}} type="text" id="fname" name="fullname"></select>
                </div>
              </div>

                <label className="small-title" style={{ marginLeft:"183px"}}>
             CVV
              </label>
              <input style={{ marginLeft:"183px"}} type="text" ></input>
  

              </div>
            
            </div>
            
            
      </div>
    );
  }
  
  export default Payment;
  