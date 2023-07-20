import AddIcon from '@mui/icons-material/Add'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import SettingsIcon from '@mui/icons-material/Settings'
import ShareIcon from '@mui/icons-material/Share'
import ViewColumnIcon from '@mui/icons-material/ViewColumn'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useContext } from 'react'

import Provider from '@/src/Context'
import { Context } from '@/src/Context'
import CustomList from '@/src/CustomList'
import GearAutocomplete from '@/src/GearAutocomplete'
import LinkList from '@/src/LinkList'
import Search from '@/src/Search'

const drawerWidth = 270

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props
  const gear = useContext(Context)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Toolbar />
      <Typography>
        {' '}
        <b> LighterPack </b>(beta)
      </Typography>
      <br></br>
      <div>
        <AddIcon></AddIcon>&nbsp;Add new list
      </div>
      <br />

      <Stack>
        <Divider />
        <Stack>
          <Typography direction="row"> Lists</Typography>
        </Stack>
        <Provider>
          <LinkList text="Ireland 2022"></LinkList>
        </Provider>
      </Stack>
      <Divider />
      <Typography component="div" noWrap tvariant="h6">
        Gear
      </Typography>
      <Provider>
        <GearAutocomplete />
      </Provider>
    </div>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <ViewColumnIcon></ViewColumnIcon>
          <Typography component="div" noWrap style={{ marginRight: 500 }} variant="h6">
            &nbsp;Ireland 2022
          </Typography>
          <ShareIcon style={{ marginLeft: 60 }}></ShareIcon>
          <Typography align="right" style={{ marginLeft: 5, marginRight: 20 }}>
            Share
          </Typography>
          <SettingsIcon></SettingsIcon>
          <Typography align="right" style={{ marginLeft: 5, marginRight: 20 }}>
            Settings
          </Typography>
          <Typography align="right">Signed in as davidhotar</Typography>
          <ArrowDropDownIcon></ArrowDropDownIcon>
        </Toolbar>
      </AppBar>

      <Box aria-label="mailbox folders" component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

        <Drawer
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          container={container}
          onClose={handleDrawerToggle}
          open={mobileOpen}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          variant="temporary"
        >
          {drawer}
        </Drawer>
        <Drawer
          open
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          variant="permanent"
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        <img alt="image" className="center" height={450} src="/graph.png" width={1170}></img>
        <br />
        <br />
        <CustomList tmp={gear.items}></CustomList>
      </Box>
    </Box>
  )
}
