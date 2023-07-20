import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import * as React from 'react'
import { useContext } from 'react'

import { Context } from '@/src/Context'

const GearAutocomplete = () => {
  const data = useContext(Context)
  const list = data.items

  return (
    <Autocomplete
      getOptionLabel={(option) => option.title}
      options={list}
      placeholder="Combo box"
      renderInput={(params) => {
        ;<TextField>{option.title}</TextField>
      }}
      sx={{ width: 300 }}
    />
  )
}

export default GearAutocomplete
