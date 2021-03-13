import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* Components */
import Header from '../Components/Header/Header';
import Jumbotron from '../Components/Jumbotron/Jumbotron';
import About from '../Components/About/About';
import Interests from '../Components/Interests/Interests';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';



function App() {
  return (
    <>
    <Header />
    <Jumbotron />
    <About />
    <Interests />
    <Projects />
    <Contact />

    </>
  );
}

export default App;
