import projectData from '../assets/ProjectInfo'
import githubLogo from '../assets/LOGOS/GITHUB-LOGO.png'
import linkedinLogo from '../assets/LOGOS/LINKEDIN-LOGO.png'
import websiteLogo from '../assets/LOGOS/WEBSITE-LOGO.png'
import stackovverflorLogo from '../assets/LOGOS/STACKOVERFLOW-LOGO.png'
import { Link } from 'react-router-dom';


export default function AboutMe() {
  return (
    <main className="infoProfileContainer">
    <div id="profileImgContain">
      <img id='profileImg' src="https://avatars.githubusercontent.com/u/128770839?v=4" alt="GithubProfile" />
    </div>
    <div id="infoContain">
      <h1 id="name" style={{ margin: '5px' }}>Sergio Rojas-Aguilar</h1>
      <h2 style={{ margin: '5px' }} id="name">About Me:</h2>
      <div id="aboutme" style={{ margin: '5px' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat temporibus a eius sint nobis alias. Ipsum optio molestias, deleniti ipsam voluptatibus rem ratione perspiciatis eos quos.</div>
      <div id="aboutme" style={{ margin: '5px' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat temporibus a eius sint nobis alias. Ipsum optio molestias, deleniti ipsam voluptatibus rem ratione perspiciatis eos quos.</div>
      <div id="linkscontain">
        <a href="https://github.com/Sergrojas29"><img src={githubLogo} alt={githubLogo} className="icon" /><img /></a>
        <a href="https://www.linkedin.com/in/sergio-rojas-aguilar-2a003a288/"><img src={linkedinLogo} alt={linkedinLogo} className="icon" /><img /></a>
        <a href="https://stackoverflow.com/users/22317888/sergio-r"><img src={stackovverflorLogo} alt={stackovverflorLogo} className="icon" /><img /></a>
      </div>
    </div>
  </main>
  );
}

