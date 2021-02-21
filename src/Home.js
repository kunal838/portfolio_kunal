import React from 'react'
import logo from "./logo.svg"
import './Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Users from "./Users.js"

AOS.init();

function Home() {
    return (
        <div className="home">
           
            <div className="l">
            <div className="home__header" data-aos="fade-up"
     data-aos-duration="300">
                <div className="center"  data-aos="fade-up"
     data-aos-duration="1000">
                    <h1>HEY,<br/> I AM  KUNAL...</h1>This is my portfolio,In the project section i have <br/>posted some of my project

                    I have command over python and javascript ,<br/> I have done many projects in this . Being a self learner and after deep<br/> introspection I found 
                    out the zeal in me towards programming .<br/>Determination played the role of the wind beneath my wings <br/>,adding on to this factor thar I am also working on  projects like<br/> Home-Automation and other audrino and raspberry pi projects       
                    <h3>THERE ARE THOSE WHO SAY THAT FATE IS SOMETHING BEYOND <br/>OUR COMMAND BUT I BELIEVE MY COMMAND WILL CHNAGE MY FATE......</h3>    

                    <br/><br/>
                    <h4>As Merida said " OUR FATE LIVES WITHIN US U ONLY HAVE TO BE BRAVE ENOUGH TO SEE IT "</h4>       
            </div>


            </div>
            <div className="k" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"><br/><br/><br/><br/><br/><br/>
       
        <img className="hii" src={logo}/>
     </div>
     
                </div>
            
            
            
        </div>
    )
}

export default Home
