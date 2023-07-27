import { Button } from '@mui/joy'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useContext, useState } from 'react'

import AppBar from '@/src/AppBar'
import { Context } from '@/src/Context'

const SignIn = () => {
  const data = useContext(Context)
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  function handleSignIn(e) {
    e.preventDefault()
    if (password === '') return
    if (username === '') return

    if (!data.users.some((user) => user.username === username && user.password.includes(password))) {
      alert('the username or password was incorrect.')
    } else {
      data.changeSignedInStatus(username)
    }
    setPassword('')
    setUsername('')
  }

  return (
    <>
      <AppBar title="Sign in" />
      <br />
      <br />
      <br />
      {data.signedInStatus ? (
        <Typography component="div" noWrap style={{ marginRight: 300 }} variant="h6">
          Welcome, {data.user}!
        </Typography>
      ) : (
        <>
          <Typography component="div" noWrap style={{ marginRight: 300 }} variant="h6">
            username:
          </Typography>
          <TextField id="outlined-basic" onChange={(e) => setUsername(e.target.value)} value={username} />
          <Typography component="div" noWrap style={{ marginRight: 300 }} variant="h6">
            password:
          </Typography>
          <TextField
            id="outlined-password-input"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
          />
          <br />
          <br />
          <Button onClick={handleSignIn}>Sign in</Button>
        </>
      )}
    </>
  )
}

export default SignIn
