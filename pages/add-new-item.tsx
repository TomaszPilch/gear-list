import { Button } from '@mui/joy'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useContext, useState } from 'react'
import * as React from 'react'

import AppBar from '@/src/AppBar'
import { Context } from '@/src/Context'

const AddNewItem = () => {
  const data = useContext(Context)
  const [title, setNewTitle] = useState('')
  const [category, setNewCategory] = useState('')
  const [weight, setNewWeight] = useState('')
  const [src, setNewSrc] = useState('')

  console.log(data.categories)

  function handleSubmit(e) {
    e.preventDefault()
    data.addItem(title, category, weight, src)

    setNewCategory('')
    setNewTitle('')
    setNewWeight('')
    setNewSrc('')
  }
  return (
    <>
      <AppBar title="Adding new item" />
      <br />
      <br />
      <br />
      <Typography component="div" noWrap style={{ marginRight: 300 }} variant="h6">
        Name of new item:
      </Typography>
      <TextField id="outlined-basic" onChange={(e) => setNewTitle(e.target.value)} value={title} />
      <br />
      <br />
      <Typography component="div" noWrap style={{ marginRight: 300 }} variant="h6">
        Category:
      </Typography>
      <>
        <Autocomplete
          disablePortal
          getOptionLabel={(option) => `${option}`}
          onChange={(event, value) => {
            setNewCategory(value)
            console.log(category)
          }}
          options={data.categories}
          placeholder="Combo box"
          renderInput={(params) => <TextField {...params} />}
          sx={{ width: 300 }}
          value={category}
        />
      </>
      <Typography component="div" noWrap style={{ marginRight: 300 }} variant="h6">
        Haven't found the right category? Add a new one here:&nbsp;&nbsp;&nbsp;
        <TextField id="outlined-basic" onChange={(e) => setNewCategory(e.target.value)} size="small" value={category} />
      </Typography>
      <br />
      <Typography component="div" noWrap style={{ marginRight: 300 }} variant="h6">
        Weight:
      </Typography>
      <TextField id="outlined-basic" onChange={(e) => setNewWeight(e.target.value)} value={weight} />
      <br />
      <br />
      <Typography component="div" noWrap style={{ marginRight: 300 }} variant="h6">
        Src of image:
      </Typography>
      <TextField id="outlined-basic" onChange={(e) => setNewSrc(e.target.value)} value={src} />
      <br />
      <br />
      <Button onClick={handleSubmit}>Save</Button>
    </>
  )
}
export default AddNewItem
