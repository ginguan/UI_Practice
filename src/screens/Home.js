import React from "react";
import {Link } from "react-router-dom";
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
import Pricing from './Pricing';
import Audio1 from './img/song.mp3';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home= () =>{


    var myAudio = document.getElementById("audio");
    var isPlaying = false;

    function togglePlay() {
    isPlaying ? myAudio.pause() : myAudio.play();
    };

    myAudio.onplaying = function() {
    isPlaying = true;
    };
    myAudio.onpause = function() {
    isPlaying = false;
    };

    const TryitNow =()=>{
        return(
            <Link to="/Pricing">
                <button className = "btn-tryitnow">TRY IT NOW</button></Link>
        );
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
                <div>
                <MenuDropdown />
                <p className="red-text">SUPERIOR SOUND</p>
                <p className="red-text2">Experience live versions of your favourite songs.</p>
                <button className = "btn-demo">SEE DEMO</button>
                </div>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <div>
                    <Link to="/Pricing">
                    <button className = "btn-red-tryitnow">TRY IT NOW</button></Link>
                    </div>
                    <div style={{display:"flex",flexDirection:"row"}} >
                    <div style = {{marginTop:'100px'}} >
                    
                    {/* <audio  src="https://soundcloud.com/steveaoki/mind-control-1"></audio> */}
                    <img onClick={togglePlay}
                    data-playing="false" role="switch" aria-checked="false" src={speaker1}>
                    </img> </div>
                    <div style = {{marginTop:'340px'}}
                    ><img onClick={togglePlay}
                    src={speaker2}></img>
                    <div hidden>
                    <audio id="audio" controls>
                    <source src={Audio1} type="audio/mpeg"/>
                    Your browser does not support the audio element.
                    </audio>
                    </div>
                    
                    </div>
                    </div>

                
                </div>
            
            </div>
        );
    };

    const Yellow=()=>{
        return(
            <div className="yellow-background">
                <div style={{display:"flex",flexDirection:'row'}}>
                <div>
                <MenuDropdown />
                <div className="img-container">
                    <img style={{marginLeft:"400px",marginTop:"25%"}}
                    className="circle-img " src = "https://static-assets.profiles.hallyulife.com/lalisa-manoban-photo-welcoming-collection.jpg"/>
                    <div style={{marginLeft:"400px" }}
                    className="overlay">
                    </div>
                </div>
                <div className="img-container">
                    <img style={{height:'400px',width:'400px',marginLeft:"250px",marginTop:"-20%"}}
                    className="circle-img" src='https://pbs.twimg.com/profile_images/1273136969904775168/J3R4lSpN_400x400.jpg'/>
                    <div style={{height:'400px',width:'400px',marginLeft:"250px"}}
                    className="overlay" >
                    </div>
                </div>
                <div className="img-container">
                    <img style={{height:'100px',width:'100px',marginTop:"-380px",marginLeft:"580px"}}
                    className="circle-img" src='https://pbs.twimg.com/profile_images/1273136969904775168/J3R4lSpN_400x400.jpg'/>
                    <div style={{height:'100px',width:'100px',marginLeft:"580px"}}
                    className="overlay" >
                    </div>
                </div>
                </div>
                <div >
                <Link to="/Pricing">
                <button className = "btn-yellow-tryitnow">TRY IT NOW</button></Link>
                <p className="yellow-text">FRONT ROW SEATS</p>
                <p className="yellow-text2">Experience concerts up close and personal.</p>
                <button className = "btn-demo-yellow">SEE DEMO</button>
            
                </div>
                </div>
            </div>

        );
    }
    const Perks =() =>{
        return (
            <div className="perks-background">
                <div>
                <MenuDropdown />
                
                </div>
                <div style={{display:"flex",flexDirection:"column"}}>
                   
                    
                </div>
                <div style={{display:"flex",flexDirection:"column"}}>
                   
                    
                </div>
                
            
            </div>
            
        );
    };

    return(

        <div>
        
        <Hero/>
        <Red/>
        <Yellow/>
        <Perks/>
        <div className="gap-container"></div>
        </div>
        
    );
}
export default Home;
