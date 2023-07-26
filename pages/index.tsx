import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Inter } from 'next/font/google'
import React from 'react'

import AppBar from '@/src/AppBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <AppBar title="" />
      <Toolbar />
      <Typography component="div" noWrap style={{ marginRight: 350 }} variant="h6">
        Welcome to LighterPack!
      </Typography>
      <br />
      <br />
    </main>
  )
}
