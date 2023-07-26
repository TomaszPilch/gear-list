import { Button } from '@mui/joy'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import * as React from 'react'
import { useContext } from 'react'
import { useState } from 'react'

import { Context } from '@/src/Context'

const columns: GridColDef[] = [
  { field: 'category', headerName: 'Category', width: 400 },
  { field: 'title', headerName: 'Description', width: 400 },
  { field: 'weight', headerName: 'Weight (g)', width: 200 },
]

export default function DataTable() {
  const [newTitle, setNewTitle] = useState('')
  const gear = useContext(Context)
  const rows = gear.items

  function handleSubmit(e) {
    e.preventDefault()
    if (newTitle === '') return
    setNewTitle('')
  }

  return (
    <>
      <TextField id="outlined-basic" />
      <br />
      <br />
      <br />
      <Typography component="div" noWrap style={{ marginRight: 300 }} variant="h6">
        Add items to your list:
      </Typography>
      <div style={{ height: 370, width: '100%' }}>
        <DataGrid
          checkboxSelection
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          rows={rows}
        />
      </div>
      <br />
      <Button>Save</Button>
    </>
  )
}
