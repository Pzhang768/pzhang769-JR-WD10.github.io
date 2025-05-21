import styles from './CourseCard.module.scss'

const CourseCard = ({course}) => {
  const { courseTitle, lessons} = course
  return (
    <div className={styles['course-container']}>
      <h4>{courseTitle}</h4>
      <p>Successful courses in the past {lessons}</p>
    </div>
  )
}

export default CourseCard