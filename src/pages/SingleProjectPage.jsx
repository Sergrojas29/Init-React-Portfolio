import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL
import { useParams, Link } from 'react-router-dom';
import projectData from '../assets/ProjectInfo';


export default function ProfilePage() {
  const { projectNumber } = useParams();
  const project = projectData[projectNumber]
  const technology = project.used
  const [image, setImage] = useState(1)

  function Description() {
    const data = project
    return (
      <div className="descriptionContain">
        <p className="summery">{data?.longDescription} </p>
        <div className="pointsContain">
          <ol>{project?.keyPoints && project.keyPoints.map(element => {
            return (
              <>
                <div className='keyTitle'> {element.title}</div>
                <ul>
                  {element.key.map((point, index) => {
                    return (
                      <li className='bullet' key={index}> {point}</li>
                    )
                  })}
                </ul>
              </>
            )
          })}</ol>
        </div>
      </div>
    )

  }


  function ImageCarasel() {
    const data = project
    return (
      <section className="containerParent">
        <div className="mainImageContain">
          <img className='projectImg' src={`/projects/${project.title}/${image}.png`} alt={project.title} />
        </div>
        <div className="imageCaraselContain">
          {data.imageLinks.map((number, index) => {
            // console.log(number == image)
            let redBorder = number == image ? 'solid 2pt blue' : 'none'
            console.log(redBorder)
            return(
              <img
              style={{ border: redBorder }}
              className='imgCarousel'
              id={number}
              key={index}
              src={`/projects/${project.title}/${number}.png`}
              alt={project.title}
              onClick={(e) => imageSelection(e)}
            />
            ) 
          })}

        </div>
      </section>

    )
  }

  function imageSelection(event) {
    const selected = event.target.id
    setImage(selected)
  }



  return (
    <div className="projectMain">
      <div className="singleprojectContain">
        <h1 id='title' >{project.title}</h1>
        {project.imageLinks.length != 0 && <ImageCarasel/> }
        {/* <ImageCarasel /> */}

        <div className="markText"> DESCRIPTION:</div>

        <Description />
        <div className="markText"> TECHNOLOGY USED:</div>

        <div className="logoContain">
          {technology.map((name, index) => {
            return (<img className='logoTech' key={index} src={`/LOGOS/${name}-LOGO.png`} alt="" />)
          })}

        </div>

      </div>


    </div>
  );
}
