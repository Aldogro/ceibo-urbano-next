import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core/styles'
import { Backdrop } from '@material-ui/core'

import IconButton from '@material-ui/core/IconButton'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const ImageCarousel = ({ open, setOpen, images }) => {
  const classes = useStyles()

  return (
    <Backdrop className={classes.backdrop} open={open}>
      <IconButton className={classes.closeBackdrop} onClick={() => setOpen(false)} >
        <HighlightOffIcon />
      </IconButton>
      <Carousel className={classes.carousel} navButtonsAlwaysVisible>
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
  closeBackdrop: {
    position: 'absolute',
    color: 'white',
    top: theme.spacing(3),
    right: theme.spacing(3),
  },
  carousel: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '70%',
      height: '700px',
    },
  },
  image: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      height: '700px',
      objectFit: 'contain'
    },
  }
}))