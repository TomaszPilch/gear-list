import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import Drawer from '@mui/material/Drawer'

import Provider from '@/src/Context'
import ResponsiveDrawer from '@/src/ResponsiveDrawer'

export default function App() {
  return (
    <>
      <Provider>
        <ResponsiveDrawer />
      </Provider>
    </>
  )
}
