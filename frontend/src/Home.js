import { useState } from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Login from './Login';


const Home = () => {
    const [login, setLogin] = useState(false)

    const handleSetLogin = () => {
        setLogin(prevLogin => !prevLogin)
    }

    const buttonText = {
        loggedOut: "Sign Out",
        loggedIn: "Log In"
    }

  return (
    <>
    <Typography variant="h3" gutterBottom>
        Home
      </Typography>
      <Typography variant="h5" gutterBottom>
        Click Here to Login
      </Typography>
      <Button 
        variant="contained"
        onClick={handleSetLogin}
      >
        {login ? buttonText.loggedIn : buttonText.loggedOut}
      </Button>
      { login && (
        <>
        <Typography variant="h5" gutterBottom>
            Login
        </Typography>
        <Login/>
        </>
      )}
    </>
  )
}

export default Home