import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './components/NavBar'
import NotFound from './Pages/NotFound'

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
