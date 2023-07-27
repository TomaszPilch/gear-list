import DeleteIcon from '@mui/icons-material/Delete'
import StarIcon from '@mui/icons-material/Star'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import { Button } from '@mui/joy'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import * as React from 'react'
import { useContext, useState } from 'react'

import { Context } from '@/src/Context'

export default function CustomList({ id, tmp }) {
  const data = useContext(Context)
  const [item, setNewItem] = useState(null)

  function handleSubmit(currentItem) {
    setNewItem(currentItem)
    data.removeItemFromList(id, currentItem)
    setNewItem(null)
  }

  function handleAddToFav(currentItem) {
    setNewItem(currentItem)
    console.log(tmp)
    console.log(currentItem)
    data.addToFav(id, currentItem)
    console.log(data.lists)
    setNewItem(null)
  }

  function handleRemoveFromFav(currentItem) {
    setNewItem(currentItem)
    data.removeFromFav(id, currentItem)
    setNewItem(null)
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" sx={{ minWidth: 1150 }}>
        <TableHead>
          <TableRow>
            <TableCell align="left"></TableCell>
            <TableCell>Oblečení</TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left">Weight</TableCell>
            <TableCell align="left">qty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tmp.map((row) => (
            <TableRow key={row.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                <IconButton aria-label="delete" onClick={() => handleSubmit(row)} size="small" value={row}>
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">
                {row.fav ? (
                  <IconButton onClick={() => handleRemoveFromFav(row)} value={row}>
                    <StarIcon style={{ color: 'yellow' }} />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => handleAddToFav(row)} value={row}>
                    <StarOutlineIcon />
                  </IconButton>
                )}
              </TableCell>

              <TableCell align="left">{parseInt(row.weight) * parseInt(row.qty)}g</TableCell>
              <TableCell align="left">{parseInt(row.qty)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
