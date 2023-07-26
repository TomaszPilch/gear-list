import StarIcon from '@mui/icons-material/Star'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import * as React from 'react'

export default function CustomList(props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" sx={{ minWidth: 1150 }}>
        <TableHead>
          <TableRow>
            <TableCell>Oblečení</TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left">Weight</TableCell>
            <TableCell align="left">qty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tmp.map((row) => (
            <TableRow key={row.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.category}
              </TableCell>
              <TableCell align="left">{row.qty > 0 ? row.title : ' '}</TableCell>
              <TableCell align="left">{row.qty > 0 ? <StarIcon style={{ color: 'yellow' }} /> : ' '}</TableCell>
              <TableCell align="left">{row.weight * row.qty}g</TableCell>
              <TableCell align="left">{row.qty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
