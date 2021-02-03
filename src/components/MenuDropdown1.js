import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {  Dropdown, MenuItem } from 'react-bootstrap';
import './MenuDropdown1.css';


  export default class MenuDropdown1 extends React.Component{
    constructor() {
        super()
        this.navLinks = React.createRef();
      }
      menuAnimation = () => {
        this.menu.current.classList.toggle("open");
      }
      render() {
        return (
            <div>
          {/* <nav>
      
            <div className ="dropdownMenu"ref={this.menu} onClick={this.menuAnimation}>
              <FontAwesomeIcon size = '2x' icon={faBars} />
              <ul className="nav-links" ref={this.navLinks}>
                  <li onClick={this.menuAnimation}>Home</li>
                  <li onClick={this.menuAnimation}>Projects</li>
                  <li onClick={this.menuAnimation}>About</li>
              </ul>
              </div>
            </nav> */}
            <div>
            <Dropdown className ="dropdownMenu">
            <Dropdown.Toggle className ="dropdownLogo"
             variant="success" id="dropdown-basic">
                
                 <FontAwesomeIcon className="logo" size ="2x"icon={faBars} />
                <p className="logo-content"> EXP|CON</p>
              
            
            </Dropdown.Toggle>

            <Dropdown.Menu style ={{display:"flex",flexDirection: 'column'}}>
                <Dropdown.Item href="#/action-1">ARTIST</Dropdown.Item>
                <Dropdown.Item href="#/action-2">NEWS</Dropdown.Item>
                <Dropdown.Item href="#/action-3">CAREER</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            {/* <button className="navMenu" ></button> */}
        </div></div>
          );
        }
        
        
            
        
    
} 
