import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import digitization from "./Images/digitization.jpg"
import about from "./Images/about.jpg"
import computer from "./Images/computer.jpg";
import { makeStyles } from '@material-ui/core/styles';
import "./App.css";
import {Button} from '@material-ui/core';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
import ImageRoundedIcon from '@material-ui/icons/ImageRounded';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import BubbleChartRoundedIcon from '@material-ui/icons/BubbleChartRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import ClassRoundedIcon from '@material-ui/icons/ClassRounded';
import ShutterSpeedRoundedIcon from '@material-ui/icons/ShutterSpeedRounded';
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';
import QueueRoundedIcon from '@material-ui/icons/QueueRounded';
import OfflinePinRoundedIcon from '@material-ui/icons/OfflinePinRounded';




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));




const App =()=> {

  const classes = useStyles();

  return (

    <div className="main">

     <div className="header">
        <MenuItem >Home</MenuItem>
        <MenuItem >About Us</MenuItem>
        <MenuItem >Services</MenuItem>
        <MenuItem >Why Us</MenuItem>
        <MenuItem >Contact Us</MenuItem>   
    </div>

    <div className="container" style={{backgroundImage:"digitization "}}>

            <div className="text-container"><h1>Digital Transformation<br/>
             of the Physical World</h1><br/>

             <div className={classes.root}>
             <Button  style={{ border:"1px solid white",width:"180px", height:"60px" ,fontSize:"18px", backgroundColor:"#808080", color:"white"}}>Get Started</Button>
             <Button  style={{border:"1px solid white", width:"180px", height:"60px" ,fontSize:"18px", backgroundColor:"#808080", color:"white"}}>Our Services</Button>
             </div>
             </div>

             <div className="image-container">
                <img src={digitization}  alt="digitalone"/>
                <div className="fading-effect"></div>
             </div>
    </div>

    <div className="aboutus">
    <header style={{marginTop:"50px"}}><h1 style={{ fontSize:"40px", color:"#004d00"}}>About Us</h1></header>

              <div className="we_contain">
              <div>
              <p style={{fontSize:"15px", }}>We solve complex software problems with technology.<br/>
               We connect strategy and execution, helping our client to strengthen their core technology,
                scale with flexibility and create seamless digital experiences. We partner with our client 
                to continuously evolve their tech and enable an adaptive mindset to meet their business goals. </p><br/>
              </div>
              
              
              <div className="point">
              <Button  style={{borderRadius:"50%", width:"60px", height:"60px", float:"left",  boxShadow: "5px 5px #888888" }} > 
              <BusinessCenterRoundedIcon style={{borderRadius:"50%", width:"40px", height:"40px", color:"rgb(241, 138, 181)"}}>
              </BusinessCenterRoundedIcon></Button> 
              
              <h4 style={{color:"#4d4d4d", fontSize:"18px"}}> Engineering Culture, Delivering Product</h4>
              <p style={{fontSize:"14px"}}>As pioneers of agile, our practices are always evolving. Modern approach to 
              engineering excellence,ensuring fast, frequent and high-quality value delivery.</p><br/>
              </div>
              

              <div className="point">
              <Button  style={{borderRadius:"50%", width:"60px", height:"60px", float:"left", boxShadow: "5px 5px #888888"}} > 
              <ImageRoundedIcon style={{borderRadius:"50%", width:"40px", height:"40px", color:"rgb(241, 138, 181)"}}>
              </ImageRoundedIcon></Button> 
              <h4 style={{color:"#4d4d4d", fontSize:"18px"}}> IoT-Driven Decision Making</h4>
              <p style={{fontSize:"14px"}}>Truly data-driven actions, understanding the value of data insights to 
              fuel exceptional IoT impact data handling and decision making.</p><br/>
              </div>

              <div className="point">
              <Button  style={{borderRadius:"50%", width:"60px", height:"60px", float:"left", boxShadow: "5px 5px #888888"}} > 
              <BarChartRoundedIcon style={{borderRadius:"50%", width:"40px", height:"40px", color:"rgb(241, 138, 181)"}}>
              </BarChartRoundedIcon></Button> 
              <h4 style={{color:"#4d4d4d", fontSize:"18px"}}>Trust and personal responsibility in all relationships</h4>
              <p style={{fontSize:"14px"}}>We belive that most successful organizations are those that understand
               trust and personal responsibility.</p>
               </div>
              </div>
              <div className="we_contain_image"><img src={about} alt="digitalone"/></div>
      </div>

    <div className="usabout">
      <div className="usabout_detail_image"><img src={computer} style={{width:"400px", height:"350px"}} alt="digitalone"/></div>

      <div className="usabout_detail">

      <h4 style={{color:" #333333", fontSize:"20px"}}>Building Evolutionary Architectures.</h4><br/>
     
      <p  style={{fontSize:"14px"}}>The first principle of evolutionary architecture is to enable incremental change
       in an architecture over time. The software development
       ecosystem is constantly changing, with a constant stream of innovation in tools, frameworks and techniques.<br/><br/>

     Over the past few years, incremental developments in core engineering practices for 
    software development have paved the way to rethink how architecture might change over time, as well as how important
       architectural characteristics can be protected as it evolves.</p></div>
    </div>

    <div className="service">             
    <header style={{marginTop:"80px"}}><h1 style={{ fontSize:"40px", color:"#004d00"}}>Services</h1></header>
    <header ><p style={{marginTop:"10px", fontColor:"#cccccc", fontFamily:" 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Our expertise in data strategy and insights, artificial
     intelligence and machine<br/>
     learning, combined with software engineering excellence.</p></header>
   <div className="grid">
   <div className="div one">
   <Button  style={{borderRadius:"50%", width:"40px", height:"60px", float:"left", marginTop:"15px", boxShadow: "2px 2px 2px 2px #888888" }} > 
              <BubbleChartRoundedIcon style={{borderRadius:"50%", width:"30px", height:"50px", color:"#99e600"}}>
              </BubbleChartRoundedIcon></Button> 
              
              <h4 style={{color:"#4d4d4d", fontSize:"20px", marginTop:"10px"}}> Machine Learning</h4><br/>
              <p style={{fontSize:"14px"}}>Leverage machine learning to take autonomous 
              <br/>actions from data insights</p><br/>
   </div>
   <div className="bg"></div>

   <div className="div two">
   <Button  style={{borderRadius:"50%", width:"40px", height:"60px", float:"left", marginTop:"15px", boxShadow: "2px 2px 2px 2px #888888" }} > 
              <ChatRoundedIcon style={{borderRadius:"50%", width:"30px", height:"50px", color:"#99e600"}}>
              </ChatRoundedIcon></Button> 
              
              <h4 style={{color:"#4d4d4d", fontSize:"20px", marginTop:"10px"}}> Data Insights</h4><br/>
              <p style={{fontSize:"14px"}}>Access insights to support decision making <br/>
              forecasting and process automation</p><br/>
   </div>
   <div className="div three">
   <Button  style={{borderRadius:"50%", width:"40px", height:"60px", float:"left", marginTop:"15px", boxShadow: "2px 2px 2px 2px #888888" }} > 
              <ClassRoundedIcon style={{borderRadius:"50%", width:"30px", height:"50px", color:"#99e600"}}>
              </ClassRoundedIcon></Button> 
              
              <h4 style={{color:"#4d4d4d", fontSize:"20px", marginTop:"10px"}}> Data Platform Engineering</h4><br/>
              <p style={{fontSize:"14px"}}>Ability to design and build data platforms, collect, <br/>
              stream and manage enterprise-wide data</p><br/>
   </div>
   <div className="div four" style={{marginRight:"5px"}}>
             <Button  style={{borderRadius:"50%", width:"40px", height:"60px", float:"left", marginTop:"15px", boxShadow: "2px 2px 2px 2px #888888" }} > 
              <ShutterSpeedRoundedIcon style={{borderRadius:"50%", width:"30px", height:"50px", color:"#99e600"}}>
              </ShutterSpeedRoundedIcon></Button> 
              
              <h4 style={{color:"#4d4d4d", fontSize:"20px", marginTop:"10px"}}> Data Stratergy</h4><br/>
              <p style={{fontSize:"14px"}}>Leverage machine learning to take autonomous<br/>
             actions from data insights</p><br/>

     
   </div>
   </div>

    </div>

    <div className="whyus">

    <header style={{marginTop:"50px"}}><h1 style={{ fontSize:"40px", color:"#cc0088"}}>Why Choose Us?</h1></header>
    <header ><p style={{marginTop:"10px", fontColor:"#cccccc", fontFamily:" 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>
    We help you to leverage your data assets, creating the infrastructure, data <br/>culture and technology
     ecosystems required to unlock
     new sources of value,<br/> new products and better decision making in real-time..</p></header>

   <div className="our_info">

   <div className=" see_infoone" style={{borderRadius:"50%", width:"300px", height:"300px",marginRight:"10px"}}>
   
              <OfflinePinRoundedIcon style={{borderRadius:"50%", width:"50px", height:"50px", color:"rgb(241, 138, 181)"}}>
              </OfflinePinRoundedIcon>
              
              <h4 style={{color:"#4d4d4d", fontSize:"25px", marginTop:"15px"}}> Double Diamond</h4><br/>
              <p style={{fontSize:"14px"}}>Structured design approach to tackle <br/>challenges in four phases: Discover<br/>
    /Research— insight into the problem, Define/Synthesis — the area to focus<br/> upon, Develop/ 
   Ideation— potential <br/>solutions, Deliver /Implementation—<br/> solutions that work.
              </p><br/>
   </div>
    
   <div className=" see_infotwo" style={{borderRadius:"50%", width:"300px", height:"300px"}}>
   
   <QueueRoundedIcon style={{borderRadius:"50%", width:"50px", height:"50px", color:"rgb(241, 138, 181)"}}>
   </QueueRoundedIcon>
   
   <h4 style={{color:"#4d4d4d", fontSize:"25px", marginTop:"20px"}}> Platform Strategy</h4><br/>
   <p style={{fontSize:"14px"}}>Promote re-use of core assets, <br/>adopt emerging technology more <br/>readily and make 
   technology updates <br/>and changes with minimal impact <br/> to other parts of the business.
   </p><br/>
</div>
 <div className=" see_infothree" style={{borderRadius:"50%", width:"300px", height:"300px", marginRight:"10px"}}>
   
   <StorageRoundedIcon style={{borderRadius:"50%", width:"50px", height:"50px", color:"rgb(241, 138, 181)"}}>
   </StorageRoundedIcon>
   
   <h4 style={{color:"#4d4d4d", fontSize:"25px", marginTop:"20px"}}>Frictionless Model</h4><br/>
   <p style={{fontSize:"14px"}}>The art of aligning all the moving <br/>parts: Adadaptive leadership and <br/>organizational
    design that  are <br/>prioritized to maximize transformation<br/> goals,
    minimize risk and deliver <br/>value from the start.</p><br/>
</div>
     

   </div>

   <div className="contactus">
   <header style={{marginTop:"50px"}}><h1 style={{ fontSize:"40px", color:"#006622"}}>Contact Us</h1></header>

   <div className="login-box">
  <div className="left">
    <h1 style={{color:"#8c8c8c"}}>Sign up</h1>
    
    <input type="text" name="username" placeholder="Username" />
    <input type="text" name="email" placeholder="E-mail" />
    <input type="password" name="password" placeholder="Password" />
    <input type="password" name="password2" placeholder="Retype password" />
    
    <input type="submit" name="signup_submit" value="Sign me up" />
  </div>
  
  <div className="right">
    <span className="loginwith" style={{color:"#8c8c8c"}}>Sign in with<br />social network</span>
    
    <button className="social-signin facebook">Log in with facebook</button>
    <button className="social-signin twitter">Log in with Twitter</button>
    <button className="social-signin google">Log in with Google+</button>
  </div>
  
</div>

<header style={{width:"100%", height:"50px", backgroundColor:" rgb(230, 231, 231)", marginTop:"70px"}}> <p  >© Copyright 2021.</p></header>
</div>

   
    </div>
    </div>
  
  );
};

export default App;
