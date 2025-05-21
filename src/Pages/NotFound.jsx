import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='container'>
      <div style={{background: 'white', borderRadius: '12px', padding: '20px 35px'}}>
        <p>Page Not Found</p>
        <p>Maybe it's under construction</p>
        <Link to="/" >Go Back To Home</Link>
      </div>
    </div>
  )
}

export default NotFound