import { Button } from '@mui/joy'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Link from 'next/link'
import * as React from 'react'
import { useContext, useState } from 'react'

import { Context } from '@/src/Context'

const GearAutocomplete = ({ id }) => {
  const data = useContext(Context)
  const list = data.items
  const [item, setNewItem] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    data.addItemToList(id, item)

    setNewItem(null)
  }

  return (
    <>
      <Autocomplete
        disablePortal
        getOptionLabel={(option) => `${option.category} ${option.title}  ${option.weight}g`}
        onChange={(event, value) => {
          setNewItem(value)
        }}
        options={list}
        placeholder="Combo box"
        renderInput={(params) => (
          <TextField {...params}>
            <Link href={params.href} />
          </TextField>
        )}
        sx={{ width: 300 }}
        value={item}
      />
      <Button onClick={handleSubmit}>Add to this list</Button>
    </>
  )
}

export default GearAutocomplete
