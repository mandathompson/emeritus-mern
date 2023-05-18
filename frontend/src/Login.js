import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';



const Login = () => {
    const [userName, setUserName] = useState("")
    const [pw, setPw] = useState("")

    const handlePwChange = (event) => {
        setPw(event.target.value)
    }

  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    >
   <div>
        <TextField
          error={userName === ""}
          required
          id="userName"
          label="UserName"
          variant="standard"
          value={userName}
        />
        <TextField
          error={pw === ""}
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          value={pw}
          onChange={handlePwChange}
        />
      </div>
      </Box>
  )
}

export default Login