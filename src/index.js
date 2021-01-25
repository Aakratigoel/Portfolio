import React from 'react';
import profilepic from "./images/pic1.jpg"
import picture from './images/aakrati.jpg';
import logo1 from "./images/linkedin.png";
import logo2 from "./images/insta.png";
import logo3 from "./images/github.png";
import project1 from "./images/shiftScheduler.png";
import project2 from "./images/traveltalk.png";
import project3 from "./images/hangman.png";
import project4 from "./images/game_of_memory.png"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { ReactComponent } from '*.svg';

class HomePage extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

  }
  handleScroll = () => {
    if (window.scrollY > 20) {
      document.getElementById("navbar").style.background = "black";
    }
  };
  myFunction = () => {
    let x = document.getElementById("navbar1");
    if (x.style.display == "none") {
      x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }
    // if (x.className == "navDiv") {
    //   console.log(x);
    //   x.className = "verticalnavbar";
    // }
    // else if(x.className=="verticalnavbar"){

    // }

  }
  render() {
    return (
      <div id="mainDiv" onScroll="this.handleScroll">
        <div id="leftDiv">
          <div className="item1" id="navbar" className="navDiv">
            <a href="#mainDiv"> <div className="navDivitem ">HOME</div></a>
            <a href="#secondDiv"><div className="navDivitem ">ABOUT</div></a>
            <a href="#portfoliodiv"> <div className="navDivitem ">PORTFOLIO</div></a>
            <a href="https://webdevlearning.com/" target="_blank"> <div className="navDivitem ">BLOG</div></a>
            <a href="#contactPage"><div className="navDivitem ">CONTACT</div></a>
          </div>
          <div id="verticalnavbardiv">
            <div id="navbutton" onClick={this.myFunction}>MENU<FontAwesomeIcon icon={faBars} /></div>
            <div className="item1" id="navbar1" className="verticalnavbar">
              <a href="#mainDiv"> <div className="navDivitem ">HOME</div></a>
              <a href="#secondDiv"><div className="navDivitem ">ABOUT</div></a>
              <a href="#portfoliodiv"> <div className="navDivitem ">PORTFOLIO</div></a>
              <a href="https://webdevlearning.com/" target="_blank"> <div className="navDivitem ">BLOG</div></a>
              <a href="#contactPage"><div className="navDivitem ">CONTACT</div></a>
            </div>
          </div>
        </div>
       
        {/* <div className="introDiv">
          <div id="designation">Web Developer</div>
          <br></br>
          <br></br>
          <div><span id="entryButton">COME ON IN</span></div>
        </div> */}
      </div>
    );
  }


}
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
      </div>
    );
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
          <div className="col_3_1"></div>
          <div className="col_3_2" id="col_row">
            <div className="projectimagecontainer" id="shiftscheduler">
              <img className="projectimage" src={project1} />
              <p className="projectname">SHIFT SCHEDULER</p>
            </div>
            <div id="shiftschedulercontent">
              <p id="p1">
                Shift Scheduler is a website , that makes the life of employees in an organization
                bit eaiser by helping them in creating shift requests for the shifts that
                they will not be able to cover and want some other employee to cover for them.
            </p>
              <div id="b1" class="buttons"> <a href="https://fast-brook-71257.herokuapp.com/" target="_blank" class="githublinks">Web Link</a></div>
            </div>
            <div className="projectimagecontainer" id="traveltalk">
              <img className="projectimage" src={project2} />
              <p className="projectname">TRAVEL TALK</p>
            </div>
            <div id="traveltalkcontent">
              <p id="p2">
                Travel Talk is a website , where .
            </p>
              <div id="b2" class="buttons"><a href="https://kylanchilders.github.io/traveltalk/" target="_blank" class="githublinks">Web Link</a></div>
            </div>
            <div className="projectimagecontainer" id="hangman">
              <img className="projectimage" src={project3} />
              <p className="projectname">HANGMAN</p>
            </div>
            <div id="hangmancontent">
              <p id="p3">
                Hangman is a website , that makes the life of employees in an organization
                bit eaiser by helping them in creating shift requests for the shifts that
                they will not be able to cover and want some other employee to cover for them.
            </p>
              <div id="b3" class="buttons"><a href="https://aakratigoel.github.io/Word_Guess_Game/" target="_blank" class="githublinks">Web Link</a></div>
            </div>
          </div>
          <div className="row4 col_3_3"></div>
        </div>

      </div>
    );
  }
}
class Contact extends React.Component {
  render() {
    return (
      <div id="contactPage">
        <div id="aboutheading">
          <h1>CONTACT</h1>
        </div>
        <div id="contactinfo">
          <div></div>
          <div id="contactdetails">
            <div id="contactdiv1">
              <p className="contactparagraph">Aakrati Goel</p>
              <br></br>
              <p className="contactparagraph">aakratigoel@gmail.com</p>
              <br></br>
              <p className="contactparagraph">Seattle, WA</p>
              <br></br>
              <br></br>
              <div id="contactlogo">
                <a href="https://www.linkedin.com/in/aakrati-goel-435094200/" target="_blank"><img className="logoimg" className="l1 cl1" src={logo1} /></a>
                <a href="https://www.instagram.com/goelaakrati/" target="_blank"><img className="logoimg" className="l2 cl1" src={logo2} /></a>
                <a href="https://github.com/Aakratigoel" target="_blank"><img className="logoimg" className="l3" src={logo3} /></a>
              </div>
            </div>
            <div id="contactdiv2"></div>
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
    {/* <HomePage /> */}
    <About />
    <Portfolio />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
