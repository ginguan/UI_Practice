import React from "react";
import AwesomeSlider from 'react-awesome-slider';
// import AutoplaySlider from 'react-awesome-slider/src/hoc/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import './Home.css';
import MenuDropdown from '../components/MenuDropdown'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home= () =>{
    const TryitNow =()=>{
        return(<button className = "btn-tryitnow">TRY IT NOW</button>);
    }
    const NavMenu =() =>{
        //f0c9
        return(
        
            <button className="navMenu" ><FontAwesomeIcon size = '2x' icon={faBars} /></button>
        );
    }
    //backgroundImage :`url('https://wallpapercave.com/wp/wp1871636.jpg')`
    const Hero = () =>{
        return(
            <div>
            <div>
            <AutoplaySlider animation="cubeAnimation"
            // play ={true}
            cancelOnInteraction={false}
            // interval={10000}
            >
                <div className="container" style ={{backgroundImage :`url('https://wallpapercave.com/wp/wp1871636.jpg')`}}>
                <MenuDropdown />
                <p className="slide-text">INTERACTIVE CONCERT EXPERIENCE</p>
                <p className="slide-text2">Experience your favourite artists like never before and from the comfort of your own home.</p>
                <TryitNow/>
                </div>
                <div className="container" style ={{backgroundImage:`url('https://th.bing.com/th/id/R1211e7557b7c3364de17047da9f33d20?rik=EeoVBGO1PDuajg&riu=http%3a%2f%2fwww.ambientlightblog.com%2fwp-content%2fuploads%2f2018%2f01%2fCigarettesAfterSex_013.jpg&ehk=5Yy0Ty%2fF8qDnnzTScwo5JJz91zKTJC0q2IJ99RiTK0E%3d&risl=&pid=ImgRaw')`}}>
                <MenuDropdown/>
                <p className="slide-text">INTERACTIVE CONCERT EXPERIENCE</p>
                <p className="slide-text2">Experience your favourite artists like never before and from the comfort of your own home.</p>
                <TryitNow/>
                </div>
                <div className="container" style ={{backgroundImage:`url("https://i.pinimg.com/originals/20/7b/5d/207b5d20059943eb73dd5fbcd814733a.jpg")`}}>
                <MenuDropdown/>
                <p className="slide-text">INTERACTIVE CONCERT EXPERIENCE</p>
                <p className="slide-text2">Experience your favourite artists like never before and from the comfort of your own home.</p>
                
                <TryitNow/>
                </div>
           </AutoplaySlider>

            </div>
            </div>
        );
    };

    return(
        
        <Hero/>
        
    );
}
export default Home;
//carousel__title