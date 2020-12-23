import React from 'react';
import profilepic from "./images/pic1.jpg"
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
              <a href="#contactPage"><div className="navDivitem ">CONTACT</div></a>
            </div>
          </div>

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

        <div className="item2" id="aboutdivcontent">
          <img src={profilepic} id="mypic" />
          <div id="content">
            <h2 id="heading2">Who Am I ?</h2>
            <p id="paracontent">
              Hi I am <span id="aboutname">Aakrati Goel</span>. I work as a Freelance Front-end Developer and a Wed Development Instructor at the Nucamp Coding Bootcamp( if there is a link to their website- please add it).
              I recently graduated from the University of Washington with a Diploma in Full Stack Web Development.
              I also author the blog <span><a id ="bloglink"href="https://webdevlearning.com" target="_blank">Web Dev Learning</a></span>.
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
              Besides coding, I share a deep love for painting and design.Some of my art work has been used in this Portfolio. 
              <br></br>
              Currently, I'm looking for full-time opportunities, but I am open to fun freelance projects. 
              Please don't hesitate to reach out— I'm happy to chat about work or play!
           </p>
          </div>

        </div>
        {/* <div className="item2" id="profileDiv">
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
        </div> */}
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
                Travel Talk is a website , that makes the life of employees in an organization
                bit eaiser by helping them in creating shift requests for the shifts that
                they will not be able to cover and want some other employee to cover for them.
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
