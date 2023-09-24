import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
import projectData from '../assets/ProjectInfo'
import githubLogo from '../assets/LOGOS/GITHUB-LOGO.png'
import linkedinLogo from '../assets/LOGOS/LINKEDIN-LOGO.png'
import websiteLogo from '../assets/LOGOS/WEBSITE-LOGO.png'
import stackovverflorLogo from '../assets/LOGOS/STACKOVERFLOW-LOGO.png'
import ProjectContainer from '../components/ProjectContainer';
import AboutMe from '../components/AboutMe';


export default function HomePage() {


  return (
    <>
      <div className="pageMain">
      <AboutMe/>
      <ProjectContainer/>
      </div>
    </>
  );
}
