import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { useContext } from 'react'
import * as React from 'react'

import { Context } from '@/src/Context'

const LinkList = (props) => {
  const data = useContext(Context)
  const lists = data.lists.map((item) => {
    return (
      <ListItem disablePadding key={item.text}>
        <ListItemButton>
          <ListItemText primary={item.text} style={{ color: item.text === props.text ? 'red' : 'black' }} />
          <Link href={item.href} />
        </ListItemButton>
      </ListItem>
    )
  })
  return (
    <>
      <List>{lists}</List>
    </>
  )
}

export default LinkList
