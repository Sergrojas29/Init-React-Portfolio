import logo from '../assets/logoSra.svg'
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';

function Navbar() {
  return (
<>
    <header>
      <div id="logoContainer">
        <img src={logo} alt={logo} id="logo"></img>
      </div>
      <div id="btnContainer">
        <Link style={{ textDecoration: 'none' }} className="btnHeader" to="/">
          <a className="btnHeader" >HOME</a>
        </Link>
        <Link style={{ textDecoration: 'none' }} className="btnHeader" to="/project">
          <a className="btnHeader" >PROJECTS</a>
        </Link>
        <Link style={{ textDecoration: 'none' }} className="btnHeader" to="/aboutme">
          <a className="btnHeader" >ABOUT ME</a>
        </Link>
        <Link style={{ textDecoration: 'none' }} className="btnHeader" to="/contactme">
          <a className="btnHeader" >CONTACT ME</a>
        </Link>
      </div>
    </header>
    <MobileNav/>
</>
  );
}

export default Navbar;
