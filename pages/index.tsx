import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Inter } from 'next/font/google'

import AppBar from '@/src/AppBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <AppBar title="" />
      <Toolbar />
      <Typography component="div" noWrap style={{ marginRight: 350 }} variant="h5">
        Welcome to LighterPack!
      </Typography>
      <br />
      <Typography component="div" noWrap style={{ marginRight: 350 }} variant="h6">
        <KeyboardBackspaceIcon /> You can add a new gear list.
      </Typography>
      <br />
      <Typography component="div" noWrap style={{ marginRight: 350 }} variant="h6">
        <KeyboardBackspaceIcon /> Check out your items.
      </Typography>
      <br />
      <Typography component="div" noWrap style={{ marginRight: 350 }} variant="h6">
        <KeyboardBackspaceIcon /> Check out your gear lists.
      </Typography>
      <br />
    </main>
  )
}
