import styled from '@emotion/styled';
import { Link } from 'react-router-dom';


const BurgerMenu = styled.div`
    
    background: red;

`

function MobileNav() {
    return (
        <BurgerMenu className='burgerMenu'>
            <div id="logoContainer">
                <img src='/logoSra.png' alt='logoSra' id="logo"></img>
            </div>
            <ul id="MobNavContianer">
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
            </ul>

        </BurgerMenu>
    )

}

export default MobileNav