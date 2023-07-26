import ImageList from '@mui/material/ImageList'
import Link from '@mui/material/Link'
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
        <Link href={item.href} underline="none">
          <CustomImage tmp={item} />
        </Link>
      ))}
    </ImageList>
  )
}
