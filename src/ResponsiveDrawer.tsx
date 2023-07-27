import AddIcon from '@mui/icons-material/Add'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import LinkMui from '@mui/material/Link'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from 'next/Link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useContext } from 'react'

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
  const title = router.query.slug
  const { window } = props

  const isItinLists = router.pathname.startsWith('/lists')

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Toolbar style={{ color: 'grey' }} />

      <ListItemButton style={{ color: 'grey' }}>
        <LinkMui component={Link} href="/" underline="none">
          <ListItemText style={{ color: 'black' }}>
            {' '}
            <b> LighterPack </b>(beta)
          </ListItemText>
        </LinkMui>
      </ListItemButton>
      <br></br>
      <div>
        <ListItemButton>
          <LinkMui component={Link} href="/add-new-list" underline="none">
            <ListItemText style={{ color: 'green' }}>
              {' '}
              <AddIcon></AddIcon>&nbsp;Add new list
            </ListItemText>
          </LinkMui>
        </ListItemButton>
      </div>
      <Divider />
      <ListItemButton>
        <LinkMui component={Link} href="/my-gear" underline="none">
          <ListItemText style={{ color: 'black' }}> My gear</ListItemText>
        </LinkMui>
      </ListItemButton>

      <Stack>
        <Divider />
        <Stack>
          <Typography direction="row"> Lists</Typography>
        </Stack>

        <LinkList text={router.query.slug}></LinkList>
      </Stack>
      <Divider />
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
        {isItinLists ? (
          <>
            <Divider />
            <Stack>
              <Typography direction="row"> Gear</Typography>
            </Stack>
            <GearAutocomplete id={title} />
          </>
        ) : null}
      </Drawer>
    </>
  )
}
