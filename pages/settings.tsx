import Typography from '@mui/material/Typography'
import React from 'react'

import AppBar from '@/src/AppBar'

const Settings = () => {
  return (
    <>
      <AppBar title="Settings" />
      <br />
      <br />
      <br />
      <Typography component="div" noWrap style={{ marginRight: 300 }} variant="h6">
        Change your settings here:
      </Typography>
    </>
  )
}

export default Settings
