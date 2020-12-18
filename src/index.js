import React from 'react';
import picture from './images/aakrati.jpg';
import picture1 from './images/boat.jpg';
import picture2 from './images/buddha.jpg';
import picture3 from './images/city.jpg';
import picture4 from './images/eiffeltower.jpg';
import picture5 from './images/forest.jpg';
import picture6 from './images/girl.jpg';
import picture7 from './images/girldress.jpg';
import picture8 from './images/girlinparis.jpg';
import picture9 from './images/lovebirds.jpg';
import picture10 from './images/water.jpg';
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
        if(x.style.display == "none")
      {
        x.style.display="block";
      }
      else{
        x.style.display="none";
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
        <div className="item1" id="navbar1" className="verticalnavbar">
            <a href="#mainDiv"> <div className="navDivitem ">HOME</div></a>
            <a href="#secondDiv"><div className="navDivitem ">ABOUT</div></a>
            <a href="#portfoliodiv"> <div className="navDivitem ">PORTFOLIO</div></a>
            <a href="#contactPage"><div className="navDivitem ">CONTACT</div></a>
          </div>
          <div className="item1" id="navbar" className="navDiv">
            <a href="#mainDiv"> <div className="navDivitem ">HOME</div></a>
            <a href="#secondDiv"><div className="navDivitem ">ABOUT</div></a>
            <a href="#portfoliodiv"> <div className="navDivitem ">PORTFOLIO</div></a>
            <a href="#contactPage"><div className="navDivitem ">CONTACT</div></a>
          </div>
          <div id="navbutton" onClick={this.myFunction}>MENU<FontAwesomeIcon icon={faBars} /></div>
          <div className="item2" ></div>
          <div className="item3 leftdivrow">
          </div>
          <div className="item4">
            <div id="clickDiv">
              <div className="item1"></div>
              <div className="item2" id="comeonindiv"><a href="#secondDiv" id="clickMe">COME ON IN !</a></div>
              <div className="item3" ></div>
            </div>
          </div>
          <div className="item5"></div>
        </div>
        <div id="rightDiv">
          <div className="item1">
            <div className="paintingpictures">
              <img className="pic" src={picture1} />
            </div>
          </div>
          <div className="item2">
            <div className="paintingpictures">
              <img className="pic" src={picture2} />
            </div>
          </div>
          <div className="item3">
            <div className="paintingpictures">
              <img className="pic" src={picture3} />
            </div>
          </div>
          <div className="item4 hideimage">
            <div className="paintingpictures">
              <img className="pic" src={picture4} />
            </div>
          </div>
          <div className="item5 hideimage"></div>
          <div className="item6 hideimage">
            <div className="paintingpictures">
              <img className="pic" src={picture5} />
            </div>
          </div>
          <div className="item7 hideimage">
            <div className="paintingpictures">
              <img className="pic" src={picture6} />
            </div>
          </div>
          <div className="item8 hideimage">
            <div className="paintingpictures">
              <img className="pic" src={picture7} />
            </div>
          </div>
          <div className="item9 hideimage"></div>
          <div className="item10 hideimage"></div>
          <div className="item11 hideimage">
            <div className="paintingpictures">
              <img className="pic" src={picture8} />
            </div>
          </div>
          <div className="item12 hideimage">
            <div className="paintingpictures">
              <img className="pic" src={picture9} />
            </div>
          </div>
          <div className="item13 hideimage"></div>
          <div className="item14 hideimage"></div>
          <div className="item15 hideimage"></div>
          <div className="item16 hideimage">
            <div className="paintingpictures">
              <img className="pic" src={picture10} />
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
        <div className="item1" id="aboutdiv">
          <h1>ABOUT ME</h1>
        </div>
        <div className="item2" id="profileDiv">
          <div id="pictureContainer">
            <img id="pp" src={picture} />
            <p id="namepara">AAKRATI GOEL</p>
          </div>
        </div>
        <div className="item3" id="contactdiv">
          <div className="item1"></div>
          <div className="item2" className="logodiv">
            <a href="https://www.linkedin.com/in/aakrati-goel-435094200/" target="_blank"><img className="logoimg" className="l1 cl1" src={logo1} /></a>
            <a href="https://www.instagram.com/goelaakrati/" target="_blank"><img className="logoimg" className="l2 cl1" src={logo2} /></a>
            <a href="https://github.com/Aakratigoel" target="_blank"><img className="logoimg" className="l3" src={logo3} /></a>
          </div>
          <div className="item3"></div>
        </div>
        <div className="item4" id="paraDiv">
          <p id="paracontent">
            I am a creative Web Developer with an IT experience of 3 years. I live in Seattle, WA.I have worked as a Project Engineer back in India.After coming to US,
            I pursued diploma in Full Stack Web Development from University Of Washington and now I am a Web Development Instructor at Nucamp Coding Bootcamp.
            I believe with the blend of Front End Technologies and my creativity, I can develop great websites with modern designs. I have worked on Front End Technologies like: HTML, CSS, JavaScript, BootStrap, jQuery, Node.js, React.js.
            I have a good knowledge of Oracle Database and SQL.
            With the passion for coding , I also like to paint. On the homepage above, you can see the images of my paintings.
            </p>
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
            <div className="projectimagecontainer">
              <img className="projectimage" src={project1} />
              <p className="projectname">SHIFT SCHEDULER</p>
            </div>
            <div className="projectimagecontainer">
              <img className="projectimage" src={project2} />
              <p className="projectname">TRAVEL TALK</p>
            </div>
            <div className="projectimagecontainer">
              <img className="projectimage" src={project3} />
              <p className="projectname">HANGMAN</p>
            </div>
          </div>
          <div className="col_3_3"></div>
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
    <HomePage />
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
