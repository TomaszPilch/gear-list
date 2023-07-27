import LinkMui from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Link from 'next/Link'
import { useContext } from 'react'
import * as React from 'react'

import { Context, useDataContext } from '@/src/Context'

const LinkList = (props) => {
  const { lists, categories, items } = useDataContext()

  const myList = lists.map((item) => {
    return (
      <ListItem disablePadding key={item.text}>
        <ListItemButton>
          <LinkMui component={Link} href={item.href} underline="none">
            <ListItemText primary={item.text} style={{ color: item.id === props.text ? 'red' : 'black' }} />
          </LinkMui>
        </ListItemButton>
      </ListItem>
    )
  })
  return (
    <>
      <List>{myList}</List>
    </>
  )
}

export default LinkList
