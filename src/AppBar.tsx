import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import LogoutIcon from '@mui/icons-material/Logout'
import SettingsIcon from '@mui/icons-material/Settings'
import ShareIcon from '@mui/icons-material/Share'
import ViewColumnIcon from '@mui/icons-material/ViewColumn'
import AppBarMui from '@mui/material/AppBar'
import LinkMui from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from 'next/Link'
import { useContext } from 'react'

import { Context } from '@/src/Context'

const drawerWidth = 270
const AppBar = (props) => {
  const data = useContext(Context)
  function showMessage(e) {
    const url = window.location.href
    alert(`share this page with link: ${url}`)
  }

  function handleSignIn(e) {
    e.preventDefault()
    data.changeSignedInStatus()
  }
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
        <ShareIcon style={{ marginLeft: 20 }}></ShareIcon>
        <Typography align="right" style={{ marginLeft: 5, marginRight: 20 }}>
          <button onClick={showMessage}>Share</button>
        </Typography>
        <SettingsIcon></SettingsIcon>
        <LinkMui component={Link} href="/settings" style={{ color: 'white' }} underline="none">
          <Typography align="right" style={{ marginLeft: 5, marginRight: 20 }}>
            Settings
          </Typography>
        </LinkMui>

        <>
          {data.signedInStatus ? (
            <>
              <Typography align="right">Signed in as {data.user}</Typography>
              <ArrowDropDownIcon></ArrowDropDownIcon>
              <LinkMui
                component={Link}
                href="/sign-in"
                onClick={handleSignIn}
                style={{ color: 'white' }}
                underline="none"
              >
                <Typography align="right" style={{ marginLeft: 5 }}>
                  Log out&nbsp;
                </Typography>
                <LogoutIcon />
              </LinkMui>
            </>
          ) : (
            <>
              <LinkMui component={Link} href="/sign-in" style={{ color: 'white' }} underline="none">
                <Typography align="right">Sign in </Typography>
              </LinkMui>
            </>
          )}
        </>
      </Toolbar>
    </AppBarMui>
  )
}

export default AppBar
