import logo from '../assets/logoSra.svg'
import { Link } from 'react-router-dom';

function Navbar() {
  return (

    <header>
      <div id="logoContainer">
        <img src={logo} alt={logo} id="logo"></img>
      </div>
      <div id="btnContainer">
        <Link className="btnHeader" to="/">
          <a className="btnHeader" href='/'>HOME</a>
        </Link>
        <Link className="btnHeader" to="/project">
          <a className="btnHeader" href='/'>PROJECTS</a>
        </Link>
        <Link className="btnHeader" to="/aboutme">
          <a className="btnHeader" href='/' >ABOUT ME</a>
        </Link>
        {/* <a className="btnHeader" href='/contactme'>CONTACT ME</a> */}
      </div>
    </header>
  );
}

export default Navbar;
