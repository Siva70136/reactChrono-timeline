// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {item} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = item
  console.log(item)
  return (
    <div className="">
      <img src={imageUrl} alt="PROJECT" className="project-img" />
      <div className="course-container">
        <h1>{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar color="#171f46" />
          <p>{duration}</p>
        </div>
      </div>
      <p className="">{description}</p>
      <a href={projectUrl} className="url">
        visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
