import './CircleNav.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChartPie,faUser,faCog,faHome } from '@fortawesome/free-solid-svg-icons';
import {  Dropdown, MenuItem } from 'react-bootstrap';

const CircleNav=()=>{
    return(
        <div id="circularMenu1" class="circular-menu circular-menu-left active">
        
          <a class="floating-btn" onclick="document.getElementById('circularMenu1').classList.toggle('active');">
            <FontAwesomeIcon className="logo" size ="2x"icon={faBars} />
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