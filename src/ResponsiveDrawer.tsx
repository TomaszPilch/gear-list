import AddIcon from '@mui/icons-material/Add'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import Link from '@mui/material/Link'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useContext } from 'react'

import Provider from '@/src/Context'
import { Context } from '@/src/Context'
import GearAutocomplete from '@/src/GearAutocomplete'
import LinkList from '@/src/LinkList'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
}

const drawerWidth = 270

export default function ResponsiveDrawer(props: Props) {
  const router = useRouter()
  const { window } = props
  const gear = useContext(Context)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Toolbar style={{ color: 'grey' }} />

      <ListItemButton style={{ color: 'grey' }}>
        <Link href="/" underline="none">
          <ListItemText style={{ color: 'black' }}>
            {' '}
            <b> LighterPack </b>(beta)
          </ListItemText>
        </Link>
      </ListItemButton>
      <br></br>
      <div>
        <ListItemButton>
          <Link href="/add-new-list" underline="none">
            <ListItemText style={{ color: 'green' }}>
              {' '}
              <AddIcon></AddIcon>&nbsp;Add new list
            </ListItemText>
          </Link>
        </ListItemButton>
      </div>
      <Divider />
      <ListItemButton>
        <Link href="/offer" underline="none">
          <ListItemText style={{ color: 'black' }}> Our offer</ListItemText>
        </Link>
      </ListItemButton>

      <Stack>
        <Divider />
        <Stack>
          <Typography direction="row"> Lists</Typography>
        </Stack>
        <Provider>
          <LinkList text={router.query.slug}></LinkList>
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
    <>
      <Drawer
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        container={container}
        onClose={handleDrawerToggle}
        open={mobileOpen}
        style={{ color: 'grey' }}
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
        style={{ color: 'grey' }}
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        variant="permanent"
      >
        {drawer}
      </Drawer>
    </>
  )
}
