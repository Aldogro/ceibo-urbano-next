import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core/styles'
import { Backdrop } from '@material-ui/core'

const ImageCarousel = ({ open, setOpen, images }) => {
  const classes = useStyles()

  return (
    <Backdrop className={classes.backdrop} open={open} onClick={() => setOpen(false)}>
      <Carousel className={classes.carousel}>
        {images
          ?
          images.map(image => (
            <img className={classes.image} src={image} />
          ))
          : null
        }
      </Carousel>
    </Backdrop>
  )
}

export default ImageCarousel

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  carousel: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '60%',
      height: '400px',
    },
  },
  image: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      height: '400px',
      objectFit: 'contain'
    },
  }
}))