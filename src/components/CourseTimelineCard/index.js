import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {data} = props
  const {courseTitle, description, duration, tagsList} = data

  return (
    <>
      <div className="course-container">
        <h1>{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p>{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="concepts-container">
        {tagsList.map(eachTag => (
          <li key={eachTag.id} className="item">
            <p className="button">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
