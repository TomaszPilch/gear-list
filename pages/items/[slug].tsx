import { Button } from '@mui/joy'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import LinkMui from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { useRouter } from 'next/router'

import AppBar from '@/src/AppBar'
import { useItem } from '@/src/Context'
import CustomImage from '@/src/CustomImage'

export default function Page() {
  const router = useRouter()
  const currentItem = useItem(parseInt(router.query.slug))
  if (!currentItem) {
    return null
  }
  return (
    <>
      <AppBar title={currentItem.title} />
      <br />
      <br />

      <Typography component="div" noWrap style={{ marginRight: 350 }} variant="h6">
        Weight: {currentItem.weight} g
      </Typography>
      <br />

      <CustomImage tmp={currentItem} />
      <br />
      <Button>
        <LinkMui color="white" component={Link} href="/my-gear" underline="none">
          Back to my gear
        </LinkMui>
      </Button>
      {/*<img*/}
      {/*  alt={currentItem.title}*/}
      {/*  loading="lazy"*/}
      {/*  src={`${currentItem.src}?w=248&fit=crop&auto=format`}*/}
      {/*  srcSet={`${currentItem.src}?w=248&fit=crop&auto=format&dpr=2 2x`}*/}
      {/*/>*/}
      {/*<ImageListItemBar*/}
      {/*  position="below"*/}
      {/*  subtitle={<span>category: {currentItem.category}</span>}*/}
      {/*  title={currentItem.title}*/}
      {/*/>*/}
    </>
  )
}
