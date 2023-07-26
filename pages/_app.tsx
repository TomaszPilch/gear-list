import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Box from '@mui/material/Box'
import { AppProps } from 'next/app'
import * as React from 'react'

import Provider from '@/src/Context'
import ResponsiveDrawer from '@/src/ResponsiveDrawer'

const drawerWidth = 270
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Provider>
          <Box aria-label="mailbox folders" component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
            <ResponsiveDrawer />
          </Box>
          <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
            <Component {...pageProps} />
          </Box>
        </Provider>
      </Box>
    </>
  )
}
