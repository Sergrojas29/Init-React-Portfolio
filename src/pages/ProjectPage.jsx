import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL
import { useParams, Link } from 'react-router-dom';
import ProjectContainer from '../components/ProjectContainer';


export default function ProfilePage() {

  return (
    <div className="pageMain">  
      <ProjectContainer />
    </div>
  );
}
