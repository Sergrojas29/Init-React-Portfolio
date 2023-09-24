import projectData from '../assets/ProjectInfo'
import githubLogo from '../assets/LOGOS/GITHUB-LOGO.png'
import linkedinLogo from '../assets/LOGOS/LINKEDIN-LOGO.png'
import websiteLogo from '../assets/LOGOS/WEBSITE-LOGO.png'
import stackovverflorLogo from '../assets/LOGOS/STACKOVERFLOW-LOGO.png'
import { Link } from 'react-router-dom';


export default function ProjectContainer() {
  return (
    <main id='projectMainContainer'>
      <h1 style={{ fontSize: '60px' }} >Projects</h1>
      {projectData.map((project, index) => {
        return (
          <div className="projectContain" key={index}>
            <div id="profileImgContain">
              <img id='profileImg' src={project.keyImage} alt='' />
            </div>
            <div id="infoContain">
              <h1 id="name" style={{ margin: '5px', fontSize: '50px' }} >{project.title}</h1>
              <h2 style={{ margin: '5px' }} id="name">Description:</h2>
              <div id="aboutme" style={{ margin: '5px' }} >{project.description}</div>
              <div id="linkscontain">
                <a id='logo' href={project.repoLink}><img src={githubLogo} alt={githubLogo} className="icon" /><img /></a>
                <a id='logo' href={project.url}><img src={websiteLogo} alt={websiteLogo} className="icon" /><img /></a>
              </div>
            </div>
          </div>
        )

      })}
    </main>
  );
}

