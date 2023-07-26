import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import SettingsIcon from '@mui/icons-material/Settings'
import ShareIcon from '@mui/icons-material/Share'
import ViewColumnIcon from '@mui/icons-material/ViewColumn'
import AppBarMui from '@mui/material/AppBar'
import Link from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'

const drawerWidth = 270
const AppBar = (props) => {
  return (
    <AppBarMui
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <ViewColumnIcon></ViewColumnIcon>
        <Typography component="div" noWrap style={{ marginRight: 350 }} variant="h6">
          &nbsp;{props.title}
        </Typography>
        <ShareIcon style={{ marginLeft: 70 }}></ShareIcon>
        <Typography align="right" style={{ marginLeft: 5, marginRight: 20 }}>
          Share
        </Typography>
        <SettingsIcon></SettingsIcon>
        <Link href="/settings" style={{ color: 'white' }} underline="none">
          <Typography align="right" style={{ marginLeft: 5, marginRight: 20 }}>
            Settings
          </Typography>
        </Link>
        <Typography align="right">Signed in as davidhotar</Typography>
        <ArrowDropDownIcon></ArrowDropDownIcon>
      </Toolbar>
    </AppBarMui>
  )
}

export default AppBar
