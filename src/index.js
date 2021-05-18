import React from 'react';
import profilepic from "./images/pic1.jpg";
import picture from './images/aak2.jpg';
import logo1 from "./images/linkedin.png";
import logo2 from "./images/insta.png";
import logo3 from "./images/github.png";
import project1 from "./images/shiftScheduler.png";
import project2 from "./images/traveltalk.png";
import project3 from "./images/hangman.png";
import project4 from "./images/game_of_memory.png"
import backgroundImage from "./images/bg1.jpg"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

class About extends React.Component {
  render() {
    return (
      <div id="secondDiv">
        <div className="item2" id="aboutdivcontent">
          {/* <img src={profilepic} id="mypic" /> */}
          <div id="content">
            {/* <h2 id="heading2">Who Am I ?</h2> */}
            <h1 id="introheading">Web Developer</h1>
            <h1 id="introname"> AAKRATI GOEL</h1>
          </div>

        </div>
        <footer id="footer">
          Learn more about me
            <div><a id="arrowlink" href="#myprofilediv"><span>&#x25BE;</span></a></div>
        </footer>
      </div>

    );
  }
}
class MyProfile extends React.Component {
  render() {
    return (
      <div id="myprofilediv">
        <div className="item1"></div>
        <div className="item2" id="profilecontent">
          <h2 id="profileheading">Hi, I am Aakrati. Nice to meet you.</h2>
          <br></br>
          <p id="mepara">
            I work as a Freelance Front-end Developer and a Wed Development Instructor at the Nucamp Coding Bootcamp.
            I recently graduated from the University of Washington with a Diploma in Full Stack Web Development.
              I also author the blog <span><a id="bloglink" href="https://webdevlearning.com" target="_blank">Web Dev Learning</a></span>.
              <br></br>
            <br></br>
              With a passion for coding and an eye for design, I believe being challenged is what drives me.
               I love to work at the intersection of development and design. I specialize in front-end languages - HTML, CSS, JavaScript, BootStrap, jQuery, Node.js, React.js.
               In all of my projects I strive for Fast, Intuitive, Responsive and Dynamic Designs.
              <br></br>
            <br></br>
              Prior to moving to Seattle, I worked as Project Engineer for Wipro Technologies India
               where my work involved Andriod app development using Java.
              <br></br>
              Coming from India and having lived and worked across countries, I love connecting with people from various backgrounds.
               I love to collaborate and work together in multicultural and diverse environments.
              <br></br>
            <br></br>
              Besides coding, I share a deep love for painting and design..
              <br></br>
              Currently, I'm looking for full-time opportunities, but I am open to fun freelance projects.
              Please don't hesitate to reach out— I'm happy to chat about work.

          </p>
        </div>
        <footer id="footer2">
          <div id="arrowdiv"> 
          {/* My Project Work<br></br> */}
          <a id="arrowlink" href="#portfoliodiv"><span>&#x25BE;</span></a></div>
        </footer>
      </div>
    )
  }
}
class Portfolio extends React.Component {
  render() {
    return (
      <div id="portfoliodiv">
        <div className="item1">
        </div>
        <div className="item2" id="portfolioheading">
          <h1>PORTFOLIO</h1>
        </div>
        <div className="item3" id="firstrowofproject">
          <div className="col_3_2" id="col_row">
            <div className="projectimagecontainer" id="traveltalk">
              <img className="projectimage" src={project2} />
              <div className="projectimagediv">
                <div className="projectdescription">
                  <p >Find Events around you with your travel buddy</p>
                  <br></br>
                  <br></br>
                  <br></br>
                  <a href="https://kylanchilders.github.io/traveltalk/" className="sitelink" target="_blank">Vist Website</a>
                </div>
                <p class="projectname">TravelTalk </p>
              
              </div>
            </div>
            <div className="projectimagecontainer" id="shiftscheduler">

              <img className="projectimage" src={project1} />
              <div className="projectimagediv">
                <div className="projectdescription">
                  <p >Request your shifts to be covered by your colleagues</p>
                  <br></br>
                  <br></br>
                  <br></br>
                  <a href="https://fast-brook-71257.herokuapp.com/" className="sitelink" target="_blank">Vist Website</a>
                </div>
                <p class="projectname">ShiftScheduler</p>
                
              </div>

            </div>
            
            <div className="projectimagecontainer" id="hangman">
              <img className="projectimage" src={project3} />
              <div className="projectimagediv">
                <div className="projectdescription">
                  <p >Play the guessing game. <br></br>Have Fun</p>
                  <br></br>
                  <br></br>
                  <br></br>
                  <a href="https://aakratigoel.github.io/Word_Guess_Game/" className="sitelink" target="_blank">Vist Website</a>
                </div>
                <p class="projectname">Hangman</p>
              </div>
            </div>
           
          </div>
         
        </div>
        <div id="projectarrowdiv">
        <a id="projectarrow" href="#portfoliodiv"><span>&#x2192;</span></a>
        </div>
        <footer id="footer3">
          <div id="arrowdiv1"><a id="arrowlink" href="#contactPage"><span>&#x25BE;</span></a></div>
        </footer>
      </div>
    );
  }
}
class Contact extends React.Component {
  render() {
    return (
      <div id="contactPage">
        <div id="contactheading">
          <h1>CONTACT</h1>
        </div>
        <div id="contactinfo">
          <div></div>
          <div id="contactdetails">
            <div id="contactdiv1">
            <img id="contactimage"src={picture} />
              <p className="contactparagraph">aakratigoel@gmail.com</p>
              <br></br>
              <p className="contactparagraph">Seattle, WA</p>
              <br></br>
              <br></br>
              <div id="contactlogo">
                <a href="https://www.linkedin.com/in/aakrati-goel-435094200/" target="_blank"><img className="logoimg" className="l1 cl1" src={logo1} /></a>
                <a href="https://github.com/Aakratigoel" target="_blank"><img className="logoimg" className="l3" src={logo3} /></a>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>

    );
  }
}
ReactDOM.render(
  <React.StrictMode>
   
    <About />
    <MyProfile />
    <Portfolio />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
