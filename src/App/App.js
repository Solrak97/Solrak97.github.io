import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Components */
import Header from '../Components/Header/Header';
import Jumbotron from '../Components/Jumbotron/Jumbotron';

import Building from '../Assets/building.png';


function App() {
  return (
    <>
    <Header />
    <Jumbotron />

    <h1 class="mucho-texto">Pagina en construccion</h1>
    <img src = {Building} />

    <a name="about" class="section">
    <div id="about">
      Seccion 1, About me
    </div>
    </a>

    <a name="interests" class="section">
    <div id="interests">
      Seccion 2, Interests
    </div>
    </a>

    <a name="projects" class="section">
    <div id="projects">
      Seccion 3, Projects
    </div>
    </a>

    <a name="contact" class="section">
    <div id="contact">
      Seccion 4, Contact
    </div>
    </a>

    </>
  );
}

export default App;
