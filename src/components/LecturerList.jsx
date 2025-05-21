import styles from './LecturerList.module.scss'
import CourseCard from './CourseCard'
const LecturerCard = ({lecturer}) => {
  const {name, title, biography, coursesTaught} = lecturer
  return (
    <div className={styles['lecturer-container']}>
      <h4 className={styles['name']}>{name}</h4>
      <p>{title}</p>
      <p>{biography}</p>
      {coursesTaught.map((course, index)=>(
        <CourseCard key={`${course.id}-${index}`} course={course}/>
      ))}
    </div>
  )
}

export default LecturerCard