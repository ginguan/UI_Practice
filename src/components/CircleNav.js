import './CircleNav.css';
import React ,{useState}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChartPie,faUser,faCog,faHome } from '@fortawesome/free-solid-svg-icons';
import {  Dropdown, MenuItem } from 'react-bootstrap';

const CircleNav=()=>{
    const [isActive,setActive]=useState("false");
    const handleToggle = () => {
        setActive(!isActive);
      }
    return(
        <div id="circularMenu1" class={isActive?"circular-menu circular-menu-left":"circular-menu circular-menu-left active"}>
        
          <a class="floating-btn" onClick={handleToggle}>
            <FontAwesomeIcon className="logo" size ="2x"icon={faBars} />
            <p className={isActive?"circle-logo-content":"circle-logo-content active"}> EXP|CON</p>
          </a>
          <menu class="items-wrapper">
            <a href="#" class="menu-item">
            <FontAwesomeIcon className="logo"icon={faHome} />
            </a>
            <a href="#" class="menu-item">
            <FontAwesomeIcon className="logo" icon={faUser} />
            </a>
            <a href="#" class="menu-item ">
            <FontAwesomeIcon className="logo" icon={faChartPie} />
            </a>
            <a href="#" class="menu-item">
            <FontAwesomeIcon className="logo" icon={faCog} />
            </a>
          </menu>
        
        </div>);
}
export default CircleNav;