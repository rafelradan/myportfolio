import './StyleApp.scss'
import Myphoto from './img/Fotopefil.png'
import Github from './img/github-50.png'
import Linkedin from './img/linkedin-50.png'

import MyPortfolio from './img/ProjectMyPortfolio01.png'
import Filmaria from './img/ProjectFilmariaRdPortfolio01.png'
/* import DevMediaTest from './img/ProjectTestDevMediaPortfolio01.png'
import CadUser from './img/ProjectCadUserPortfolio01.png' */

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
            <span> HTML | CSS | Java Script | ReactJS</span>
          </div>
        </div>
        {/* Start -> Projects */}
        <div className="projetos">
          <h3>Projects</h3>
          <section className="projects">
            {/* Project 01 */}
            <div className="individual-project">
              <div className="title">
                <h5>Portfólio</h5>
              </div>
              <div className="content">
                <div className="imgProject">
                  <img src={MyPortfolio} alt="MyPortfolio" />
                </div>

                <div className="paragraph">
                  <p>
                    Esse é o meu Portfólio, projeto Front-end criado usando
                    React. Aqui estão alguns dos projetos desenvolvidos por mim.
                    Meu foco principal é Front-end.
                  </p>
                </div>
              </div>

              <button className="btn-acessar">
                <a
                  href="https://rafaelnascimento.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Acessar
                </a>
              </button>
            </div>
            {/* Project 01 end*/}
            {/* Project 02 */}
            <div className="individual-project">
              <div className="content">
                <div className="imgProject">
                  <img src={Filmaria} alt="MyPortfolio" />
                </div>

                <div className="paragraph">
                  <p>
                    Esse é um projeto também desenvolvido em React e totalmente
                    resposivo, nesse caso o projeto consome uma API sobre
                    filmes, acessando Nome, Capa e Sinopse do filme. O site tem
                    três rotas, a Home, Favoritos e uma para pesquisar por
                    filmes no YouTube.
                  </p>
                </div>
              </div>

              <button className="btn-acessar">
                <a
                  href="https://filmariard.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Acessar
                </a>
              </button>
            </div>
            {/* Project 02 end*/}
          </section>
        </div>

        <div className="sobre">
          <h3>Aboute me </h3>
        </div>
      </div>
    </div>
  )
}

export default App
