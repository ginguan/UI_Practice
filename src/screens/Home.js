import React,  { useState, useEffect } from "react";
import {Link } from "react-router-dom";
import AwesomeSlider from 'react-awesome-slider';
// import AutoplaySlider from 'react-awesome-slider/src/hoc/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import './Home.css';
import MenuDropdown from '../components/MenuDropdown'
import speaker1 from './img/medium17.png';
import speaker2 from './img/medium27.png';
import speaker3 from './img/SmallSpeaker1.png';
import speaker4 from './img/SmallSpeaker2.png';
import Pricing from './Pricing';
import Audio1 from './img/song.mp3';
import CircleNav from '../components/CircleNav';
import AnimatedCursor from "react-animated-cursor";
const AutoplaySlider = withAutoplay(AwesomeSlider);


const Home= () =>{
    // var myAudio = document.getElementById("audio");

    // var isPlaying = false;
    // myAudio.onplaying = ()=> {
    //     isPlaying = true;
    //     };
    // myAudio.onpause = ()=> {
    // isPlaying = false;
    // };
    // function togglePlay() {
    //     if (isPlaying) {
    //         myAudio.pause();
    //     } else {
    //         myAudio.play();
    //     }
    // };
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
            <AnimatedCursor
            color='255, 255, 255'
            innerSize={10}
            outerSize={10}
            outerAplha={0.5}
            outerScale={8}/>

            <AutoplaySlider animation="openAnimation"
            play ={true}
            cancelOnInteraction={false}
            interval={10000}
            >
                
                <div className="container" style ={{backgroundImage :`url('https://wallpapercave.com/wp/wp1871636.jpg')`}}>
                
                
                <p className="slide-text">INTERACTIVE CONCERT EXPERIENCE</p>
                <p className="slide-text2">Experience your favourite artists like never before and from the comfort of your own home.</p>
                <TryitNow/>
                
                </div>
                <div className="container" style ={{backgroundImage:`url('https://th.bing.com/th/id/R1211e7557b7c3364de17047da9f33d20?rik=EeoVBGO1PDuajg&riu=http%3a%2f%2fwww.ambientlightblog.com%2fwp-content%2fuploads%2f2018%2f01%2fCigarettesAfterSex_013.jpg&ehk=5Yy0Ty%2fF8qDnnzTScwo5JJz91zKTJC0q2IJ99RiTK0E%3d&risl=&pid=ImgRaw')`}}>
               
                <p className="slide-text">INTERACTIVE CONCERT EXPERIENCE</p>
                <p className="slide-text2">Experience your favourite artists like never before and from the comfort of your own home.</p>
                <TryitNow/>
                </div>
                <div className="container" style ={{backgroundImage:`url("https://i.pinimg.com/originals/20/7b/5d/207b5d20059943eb73dd5fbcd814733a.jpg")`}}>
               
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

                <CircleNav/>
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
                    <img 
                    //onClick={togglePlay}
                    data-playing="false" role="switch" aria-checked="false" src={speaker1}>
                    </img>
                     </div>
                    <div style = {{marginTop:'340px'}}
                    ><img 
                    // onClick={togglePlay}
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
                
                <div className="img-container">
                    <img style={{marginLeft:"400px",marginTop:"25%"}}
                    className="circle-img " src = "https://i.guim.co.uk/img/media/74cae4f3a285b8a8638cfbc76355b2f0c0db29c5/0_208_1737_1042/master/1737.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6850eea75ed569aed2f1309ce993805f"/>
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
                <div className="img-container">
                    <img style={{height:'400px',width:'400px',marginTop:"120px",marginLeft:"580px"}}
                    className="circle-img" src='https://i.guim.co.uk/img/media/74cae4f3a285b8a8638cfbc76355b2f0c0db29c5/0_208_1737_1042/master/1737.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6850eea75ed569aed2f1309ce993805f'/>
                    <div style={{height:'400px',width:'400px',marginLeft:"580px"}}
                    className="overlay" >
                    </div>
                </div>
            
                </div>
                </div>
            </div>

        );
    }
    const Perks =() =>{
        return (
            
            <div className="perks-background">
                <div >

                <p style={{paddingLeft:"100px"}}className="perks-title">PERKS</p>
                <hr className="line" style={{backgroundColor:"#D34848",marginLeft:"100px"}}/>
                <p className="perks-content" style={{color:"#D34848",paddingLeft:"100px"}}>Subscription Payment Model</p>
                <p className="perks-content2" style={{paddingLeft:"100px"}}>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                </div>
                <div style={{display:"flex",flexDirection:"column",paddingTop:"325px",paddingLeft:"30px"}}>
                <hr className="line" style={{backgroundColor:"#1FE1E9"}}/>
                <p className="perks-content" style={{color:"#1FE1E9"}}>No Fee Cancelation Policy</p>
                <p className="perks-content2">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                </div>
                <div style={{display:"flex",flexDirection:"column",paddingTop:"325px",paddingLeft:"30px"}}>
                <Link to="/Pricing">
                <button className = "perks-tryitnow">TRY IT NOW</button></Link>
                <hr className="line" style={{backgroundColor:"#FFB33F"}}/>
                <p className="perks-content" style={{color:"#FFB33F"}}>Subscription Payment Model</p>
                <p className="perks-content2">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                </div>
            </div>
            
        );
    };
    const Review =()=>{
        return (
            <div className="review-background">
                <div style={{width:"700px"}}>
 
                <img style={{width: "493px*1.5",height: "400px*1.5",marginTop:"100px"}}
                    src={speaker3}></img>
                <img style={{width: "493px*1.5",height: "400px*1.5",marginTop:"-200px" ,marginLeft:"80px"}}
                    src={speaker4}></img>
                </div>
                <div >
                <p className="review-text" style={{marginLeft:"-100px"}}>
                REVIEWS
                </p>
                <p style={{marginLeft:"-100px"}}className="star-review">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</p>
                <p style={{marginLeft:"-100px"}} className="review-small-content">ARTIST</p>
                <p style={{marginLeft:"-100px"}} className="review-small-content2">
                “Love it, it’s the Best.I can’t live without it!”
                </p>
                </div>
                <div style={{marginTop:"305px",marginLeft:"-400px"}} >
                <p className="star-review">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</p>
                <p className="review-small-content">PRODUCER</p>
                <p className="review-small-content2">
                “Love it, it’s the Best.I can’t live without it!”
                </p>
                </div>
                <div >
                <Link to="/Pricing">
                <button style={{marginLeft:"30px"}} className = "btn-review-tryitnow">TRY IT NOW</button></Link>
                <p style={{marginTop:"260px",marginLeft:"30px"}} className="star-review">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</p>
                <p style={{marginLeft:"30px"}} className="review-small-content">MUSIC FAN</p>
                <p style={{marginLeft:"30px"}} className="review-small-content2">
                “Love it, it’s the Best.I can’t live without it!”
                </p>
                </div>

            </div>
            );
    }
    const GetExp =() =>{
        return(
            <div className="get-background">
        <div style={{display:"flex",flexDirection:'row'}}>
            <div>
            <div>
                <p className="get-text">GET EXP|CON NOW</p>
                <p className="get-text2">Purchase and download the app.</p>
                
            </div>

            </div>
        </div>
        <div><Link to="/Pricing">
                <button className = "get-tryitnow">TRY IT NOW</button></Link></div>
            </div>
        )

    }
    return(

        <div>
        
        <Hero/>
        <Red/>
        <Yellow/>
        <Perks/>
        <div className="gap-container"></div>
        <Review/>
        <GetExp/>
        </div>
        
    );
}
export default Home;
