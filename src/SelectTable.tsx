import { Button } from '@mui/joy'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import * as React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import { Context } from '@/src/Context'

const columns: GridColDef[] = [
  { field: 'category', headerName: 'Category', width: 400 },
  { field: 'title', headerName: 'Description', width: 400 },
  { field: 'weight', headerName: 'Weight (g)', width: 200 },
]

export default function DataTable() {
  const [newTitle, setNewTitle] = useState('')
  const [selectedRows, setSelectedRows] = useState([])
  const gear = useContext(Context)

  const rows = gear.items

  useEffect(() => {}, [selectedRows])

  function handleSubmit(e) {
    e.preventDefault()
    if (newTitle === '') return

    const selectedItems = selectedRows.map((row) => rows[row - 1])

    gear.addList(newTitle, selectedItems)

    setNewTitle('')
    setSelectedRows([])
  }

  return (
    <>
      <TextField id="outlined-basic" onChange={(e) => setNewTitle(e.target.value)} value={newTitle} />
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
          onRowSelectionModelChange={(newSelection) => {
            setSelectedRows(newSelection)
          }}
          pageSizeOptions={[5, 10]}
          rowSelectionModel={selectedRows}
          rows={rows}
        />
      </div>
      <br />
      <Button onClick={handleSubmit}>Save</Button>
    </>
  )
}
