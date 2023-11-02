import styled from '@emotion/styled';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const BurgerMenu = styled.div`

    #logoContainer{
        display: flex;
        justify-content: center;
        align-items:center;
        margin: 10px;
        z-index: 1099;
        background-color: #640300;
        position:fixed;
        right:0;        
        width: 60px;
        height: 60px;
        border-radius: 100%;

    }
    #logo{
        width:30px;
        object-fit:contain;
        height: 100%;
    }

    #MobNavContianer{
        background-color: #b2b2b2c1;
        height: 100%;
        width:100%;
        z-index: 999;
        display: flex;
        flex-direction: column;
        position:fixed;
        font-size: 18pt;
        gap: 18pt;
        padding-top: 40pt;

    }

    .linkMobile{
        padding: 10px;
        border-bottom: 1pt solid black

    }

`

function MobileNav() {
    const [open, setOpen] = useState(false)



    return (
        <BurgerMenu className='burgerMenu'>
            <div id="logoContainer" onClick={() => { setOpen(!open) }}>
                <img src='/logoSra.png' alt='logoSra' id="logo"></img>
            </div>
            {open &&
                <ul id="MobNavContianer">
                    <Link style={{ textDecoration: 'none' }} onClick={() => { setOpen(!open) }} className="linkMobile" to="/">
                        <a className="linkMobile" >HOME</a>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} onClick={() => { setOpen(!open) }} className="linkMobile" to="/project">
                        <a className="linkMobile" >PROJECTS</a>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} onClick={() => { setOpen(!open) }} className="linkMobile" to="/aboutme">
                        <a className="linkMobile" >ABOUT ME</a>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} onClick={() => { setOpen(!open) }} className="linkMobile" to="/contactme">
                        <a className="linkMobile" >CONTACT ME</a>
                    </Link>
                </ul>
            }

        </BurgerMenu>
    )

}

export default MobileNav