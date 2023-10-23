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
        <p id="aboutme" style={{ margin: '5px' }}>I embarking on my professional journey in NYC, I initially delved into the realm of architecture at Simplex. However, amidst the twists and turns, my true passion for computer sciences emerged as a guiding force. The pivotal moment came at the close of the pandemic when I decided to align my career with my intrinsic calling.</p>
        <p id="aboutme" style={{ margin: '0 5px' }}>Transitioning into the dynamic realm of software development, I began my by immersing myself in diverse programming languages. My journey culminated with comprehensive training as a full-stack developer, unleashing my potential to craft innovative solutions in the digital sphere.</p>
        <p id="aboutme" style={{ margin: '0 5px' }}>Yet, my fervor for growth doesn't halt there. Beyond the confines of the professional arena, I am committed to continuous learning. Whether through enrolling in courses or honing additional skills, my overarching goal is to increase my value both personally and professionally. I aspire to be a perpetual learner, contributing not only to my own advancement but also to the success of the ventures I am a part of.</p>
        <div id="linkscontain">
          <a href="https://github.com/Sergrojas29"><img src={githubLogo} alt={githubLogo} className="icon" /><img /></a>
          <a href="https://www.linkedin.com/in/sergio-rojas-aguilar-2a003a288/"><img src={linkedinLogo} alt={linkedinLogo} className="icon" /><img /></a>
          <a href="https://stackoverflow.com/users/22317888/sergio-r"><img src={stackovverflorLogo} alt={stackovverflorLogo} className="icon" /><img /></a>
        </div>
      </div>
    </main>
  );
}

