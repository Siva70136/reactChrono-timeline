// Write your code here

import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const renderItem = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard item={item} key={item.id} />
    }
    return <CourseTimelineCard data={item} key={item.id} />
  }

  const {timelineItemsList} = props
  return (
    <div className="app-container">
      <div>
        <h1>
          MY JOURNEY OF <br />
          CCBP 4.0
        </h1>
      </div>
      <Chrono
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
        theme={{
          secondary: 'white',
        }}
      >
        {timelineItemsList.map(each => renderItem(each))}
      </Chrono>
    </div>
  )
}

export default TimelineView
