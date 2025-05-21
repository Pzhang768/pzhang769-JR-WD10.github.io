import { useState, useEffect } from 'react'
import { CircularProgress } from '@mui/material';
import LecturerCard from '../components/LecturerList';
import { Outlet } from 'react-router-dom'
import axios from 'axios'

function Home() {
  const [lecturers, setLecturers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  useEffect(() => {
    const fetchLecturerData = async () => {
      try {
        //const fetchedLecturers = await fetch('https://my-json-server.typicode.com/JustinHu8/courseCardMock/lecturers');
        //if (!fetchedLecturers.ok) {
        //  throw new Error('Response is not okay')
        //}
        //const jsonLecturers = await fetchedLecturers.json()
        //console.log(jsonLecturers)
        //setLecturers(jsonLecturers)
        const fetchedLecturers = await axios.get('https://my-json-server.typicode.com/JustinHu8/courseCardMock/lecturers');
        
        setLecturers(fetchedLecturers.data)
      } catch (e) {
        console.log('Error occured:', e)
        setErrorMessage(e)
      } finally {
        setIsLoading(false)
      }
    }
    fetchLecturerData()
  }, [])

  if (isLoading) {
    return (
      <div className='container'>
        <CircularProgress />
      </div>
    )
  }

  if (lecturers.length > 0 && !isLoading) {
    return (
      <>
        <div className='container'>
          {lecturers.map((lecturer) => (
            <LecturerCard key={lecturer.id} lecturer={lecturer} />
          ))}
        </div>

        <Outlet />
      </>
    )
  }

  if (lecturers.length === 0 && !errorMessage) {
    <>
      <p>No Lectuers found, come back later </p>
      <Outlet />
    </>
  }

}

export default Home
