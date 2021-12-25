import './StyleApp.scss'
import Myphoto from './img/Fotopefil.png'
import Github from './img/github-50.png'
import Linkedin from './img/linkedin-50.png'

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="left-side">
          <div className="back-img">
            <img className="myphoto" src={Myphoto} alt="Rafael Nascimento" />
          </div>

          <div className="back-text">
            <div className="name">
              <span className="span1">Rafael</span>
              <span className="span2">Nascimento</span>
            </div>
          </div>
          <div className="description">
            <span>Front-end developer</span>
          </div>
          <div className="links">
            <a
              href="https://github.com/rafelradan"
              target="_blank"
              rel="noreferrer"
            >
              <img className="img" src={Github} alt="Icone Github" />
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-nascimento-a110a9103/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="img" src={Linkedin} alt="Linkedin"></img>
            </a>
          </div>
          <div className="faixa"></div>
          <div className="tecnologias">
            <span> HTML | CSS | Java Scrip | ReactJS</span>
          </div>
        </div>

        <div className="right-side">
          <div className="background"></div>
        </div>
      </div>
    </div>
  )
}

export default App
