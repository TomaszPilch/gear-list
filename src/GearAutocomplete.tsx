import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Link from 'next/link'
import * as React from 'react'
import { useContext } from 'react'

import { Context } from '@/src/Context'

const GearAutocomplete = () => {
  const data = useContext(Context)
  const list = data.items

  return (
    <Autocomplete
      disablePortal
      getOptionLabel={(option) => `${option.category} ${option.title}  ${option.weight}g`}
      options={list}
      placeholder="Combo box"
      renderInput={(params) => (
        <TextField {...params} title="gear">
          <Link href={params.href} />
        </TextField>
      )}
      sx={{ width: 300 }}
    />
  )
}

export default GearAutocomplete
