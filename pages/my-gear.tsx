import { Button } from '@mui/joy'
import LinkMui from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Link from 'next/Link'

import AppBar from '@/src/AppBar'
import Gallery from '@/src/Gallery'

const MyGear = () => {
  return (
    <>
      <AppBar title="My Gear" />
      <br />
      <br />
      <br />
      <Typography component="div" noWrap style={{ marginRight: 300 }} variant="h6">
        My gear
      </Typography>
      <br />
      <Button>
        <LinkMui color="white" component={Link} href="/add-new-item" underline="none">
          Add new item
        </LinkMui>
      </Button>
      <Gallery />
    </>
  )
}

export default MyGear
