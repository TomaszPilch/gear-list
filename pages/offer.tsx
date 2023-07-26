import Typography from '@mui/material/Typography'
import React from 'react'

import AppBar from '@/src/AppBar'
import Provider from '@/src/Context'
import Gallery from '@/src/Gallery'

const Offer = () => {
  return (
    <>
      <AppBar title="Offer" />
      <br />
      <br />
      <br />
      <Typography component="div" noWrap style={{ marginRight: 300 }} variant="h6">
        Our offer:
      </Typography>

      <Provider>
        <Gallery />
      </Provider>
    </>
  )
}

export default Offer
