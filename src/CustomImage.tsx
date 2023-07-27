import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import * as React from 'react'

export default function CustomImage(props) {
  console.log(props.tmp.src)

  return (
    <Card sx={{ display: 'flex', flexDirection: 'right', align: 'right', height: 151, width: 500 }}>
      <Box sx={{ display: 'flex', flexDirection: 'right', align: 'right' }}>
        <CardContent sx={{ flex: '1 0 auto', align: 'right' }}>
          <Typography component="div" variant="h5">
            {props.tmp.title}
          </Typography>
          <Typography color="text.secondary" component="div" variant="subtitle1">
            {props.tmp.category}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        align="right"
        alt="Live from space album cover"
        component="img"
        image={props.tmp.src}
        sx={{ width: 151 }}
      />
    </Card>
  )
}
