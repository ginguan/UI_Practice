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
import speaker1 from './img/medium17.png';
import speaker2 from './img/medium27.png';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home= () =>{
    const TryitNow =()=>{
        return(<button className = "btn-tryitnow">TRY IT NOW</button>);
    }
    const DemoButton =()=>{
        return(<button className = "btn-demo">SEE DEMO</button>);
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
    const Red =() =>{
        return (
            <div className="red-background">
                <div><MenuDropdown />
                <p className="red-text">SUPERIOR SOUND</p>
                <p className="red-text2">Experience live versions of your favourite songs.</p>
                <DemoButton/></div>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <div>
                    <button className = "btn-red-tryitnow">TRY IT NOW</button>
                    </div>
                    <div style={{display:"flex",flexDirection:"row"}} >
                    <div style = {{marginTop:'239px'}}><img src={speaker1}></img> </div>
                    <div style = {{marginTop:'456px'}}
                    ><img src={speaker2}></img></div>
                    </div>
                
                </div>
            
            </div>
        );
        
    };

    return(

        <div>
        <Hero/>
        <Red/>
        </div>
        
    );
}
export default Home;
//carousel__title