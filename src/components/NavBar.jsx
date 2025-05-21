import {AppBar, Toolbar, Typography, Button} from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' sx={{flexGrow: 1}}>
          <Button color='inherit' component={Link} to='/xxx'>Courses</Button>
        </Typography>
        <Button color='inherit' component={Link} to='/'>Home</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar