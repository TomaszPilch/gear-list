import ImageList from '@mui/material/ImageList'
import LinkMui from '@mui/material/Link'
import Link from 'next/Link'
import * as React from 'react'
import { useContext } from 'react'

import { Context } from '@/src/Context'
import CustomImage from '@/src/CustomImage'

export default function Gallery() {
  const gear = useContext(Context)
  const items = gear.items
  return (
    <ImageList>
      {items.map((item) => (
        <LinkMui component={Link} href={item.href} underline="none">
          <CustomImage tmp={item} />
        </LinkMui>
      ))}
    </ImageList>
  )
}
