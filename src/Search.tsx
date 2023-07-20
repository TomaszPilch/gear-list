import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import * as React from 'react'
import { useContext } from 'react'

import { Context } from '@/src/Context'

export default function Search({ children }) {
  const data = useContext(Context)
  const options = data.categories.map((option) => {
    const firstLetter = option[0].toUpperCase()
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      title: option,
    }
  })

  return (
    <>
      <Autocomplete
        getOptionLabel={(option) => option.title}
        groupBy={(option) => option.firstLetter}
        id="grouped-demo"
        options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
        renderInput={(params) => <TextField {...params} label="search" />}
        sx={{ width: 300 }}
      />
    </>
  )
}
