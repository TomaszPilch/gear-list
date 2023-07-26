import Typography from '@mui/material/Typography'
import React from 'react'

import AppBar from '@/src/AppBar'
import Provider from '@/src/Context'
import SelectTable from '@/src/SelectTable'

const AddNewList = () => {
  return (
    <>
      <AppBar title="Creating new list" />
      <br />
      <br />
      <br />
      <Typography component="div" noWrap style={{ marginRight: 300 }} variant="h6">
        Name of new list:
      </Typography>

      <Provider>
        <SelectTable />
      </Provider>
    </>
  )
}

export default AddNewList
