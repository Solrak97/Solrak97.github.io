import './Header.css';

const Header = () => {
    return (
        <div class="header">
        <a href="#default" class="logo">LUIS CARLOS QUESADA</a>
        <div class="header-right">
          <a href="#about">ABOUT ME</a>
          <a href="#interests">INTERESTS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </div>
      </div> 
    );
}

export default Header;