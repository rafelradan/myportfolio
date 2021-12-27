import './StyleApp.scss'
import Myphoto from './img/Fotopefil.png'
import Github from './img/github-50.png'
import Linkedin from './img/linkedin-50.png'

import MyPortfolio from './img/ProjectMyPortfolio01.png'
import Filmaria from './img/ProjectFilmariaRdPortfolio01.png'
import DevMediaTest from './img/ProjectTestDevMediaPortfolio01.png'
import CadUser from './img/ProjectCadUserPortfolio01.png'

import Telefone from './img/phoneContact.png'
import Email from './img/emailContact.png'
import Linkedin02 from './img/linkedinContact.png'

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
              <div className="title">
                <h5>Filmaria</h5>
              </div>
              <div className="content">
                <div className="imgProject">
                  <img src={Filmaria} alt="Filmaria" />
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
            {/* Project 03 */}
            <div className="individual-project">
              <div className="title">
                <h5>DevMedia</h5>
              </div>
              <div className="content">
                <div className="imgProject">
                  <img src={DevMediaTest} alt="DevMediaTest" />
                </div>

                <div className="paragraph">
                  <p>
                    Esse é um projeto apenas Front-end, foi uma prova que a
                    DevMedia lançou, eu vi o vídeo no YouTube, tirei um print da
                    tela e resovi tentar fazer. Esse é o resultado, um Front-end
                    responsivo. Projeto muito bom para treino de HTML e CSS.
                  </p>
                </div>
              </div>

              <button className="btn-acessar">
                <a
                  href="https://devmediatest.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Acessar
                </a>
              </button>
            </div>
            {/* Project 03 end*/}
            {/* Project 04 */}
            <div className="individual-project">
              <div className="title">
                <h5>CadUser</h5>
              </div>
              <div className="content">
                <div className="imgProject">
                  <img src={CadUser} alt="DevMediaTest" />
                </div>

                <div className="paragraph">
                  <p>
                    Esse é um CRUD completo, com Front-end e Back-end
                    desenvolvido com ajuda de um amigo meu{' '}
                    <a
                      href="https://www.linkedin.com/in/gleysonpc/"
                      rel="noreferrer"
                    >
                      Gleyson Carvalo
                    </a>
                    . Foi meu primeiro projeto, foi utilizando formulários,
                    tabelas e listagem para treinar. Nele você pode cadastrar,
                    editar, atualizar e excluir usuários.
                  </p>
                </div>
              </div>

              <button className="btn-acessar">
                <a
                  href="https://pensive-benz-f7f7da.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Acessar
                </a>
              </button>
            </div>
            {/* Project 04 end*/}
          </section>
        </div>

        <div className="contacts">
          <h3>Contacts </h3>

          <div className="links-contacts">
            <div className="img-contact">
              <img src={Telefone} alt="telefone" />
              <p>
                <a href="tel:85996384807"> (85) 99638-4807</a>
              </p>
            </div>

            <div className="img-contact">
              <img src={Email} alt="email" />
              <p>
                <a href="mailto:rafaelradan76@gmail.com">
                  rafaelradan76@gmail.com
                </a>
              </p>
            </div>

            <div className="img-contact">
              <img src={Linkedin02} alt="linkedin" />
              <p>
                <a
                  href="linkedin.com/in/rafael-nascimento-a110a9103"
                  target="_blank"
                >
                  Linkedin
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer>Developed by Rafael Nascimento</footer>
    </div>
  )
}

export default App
