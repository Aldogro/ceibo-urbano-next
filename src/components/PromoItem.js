import React, { useState } from 'react'

import Carousel from './Carousel'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import IconButton from '@material-ui/core/IconButton'

import VisibilityIcon from '@material-ui/icons/Visibility'

import { makeStyles } from '@material-ui/core/styles'

import { connect } from 'react-redux'
import { onAmountAdd } from '../redux/actions/cart'

const PromoItem = ({ promo, cart, onAmountAdd }) => {
  const classes = useStyles()
  
  const [openCarousel, setOpenCarousel] = useState(true)
  const [selectedPromo, setSelectedPromo] = useState(null)

  const getCartItems = (promo) => {
    const item = cart.items.filter(item => item.id === promo.id)
    return item[0]?.amount
  }

  return (
    <>
      {
        selectedPromo
        ? <Carousel open={openCarousel} setOpen={setOpenCarousel} images={selectedPromo.carousel} />
        : ''
      }
      <Grid item xs={12} md={+promo.cols}>
        <div className={classes.imageSrc} style={{ backgroundImage: `url(${promo.picture})`}}>
          <div className={classes.backdrop}></div>
          <div>
            <Typography className={classes.imageTitle} component="h3" variant="h6">
              {promo.name}
            </Typography>
            <Typography className={classes.price} component="h3" variant="h6">
              ${promo.price}
            </Typography>
            {promo.carousel.length
              ?
                <IconButton className={classes.carousel} color="secondary" variant="outlined" onClick={() => {
                  setSelectedPromo(promo)
                  setOpenCarousel(true)
                }}>
                  <VisibilityIcon />
                </IconButton>
              : null
            }
          </div>
          <div className={classes.products}>
            {promo.products.map((product, index) => (
              <Typography key={index} className={classes.product}>
                {product.name} - ${product.price}
              </Typography>
            ))}
          </div>
          <div>
            {
              promo.partialPrice
              ?
                <Typography className={classes.partialPrice}>
                  ¡Ahorrás ${promo.partialPrice - promo.price}!
                </Typography>
              : null
            }
            <Button color="secondary" variant="outlined" onClick={() => onAmountAdd(promo)}>
              Agregar al carrito
              {
                getCartItems(promo)
                ? <Chip className={classes.chip} color="primary" label={getCartItems(promo)} />
                : null
              }
            </Button>
          </div>
        </div>
      </Grid>
    </>
  )
}

const mapStateToProps = ({ cart }) => {
  return { cart }
}

export default connect(mapStateToProps, { onAmountAdd })(PromoItem)

const useStyles = makeStyles((theme) => ({
  backdrop: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00000055',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  imageSrc: {
    width: '100%',
    height: '100%',
    padding: theme.spacing(3, 0),
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    '&:hover': {
      opacity: 0.9,
    },
  },
  imageTitle: {
    position: 'relative',
    color: 'white',
    width: '100%',
    textAlign: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  price: {
    position: 'relative',
    fontSize: '30px',
    color: 'white',
    width: '100%',
    textShadow: '0px 0px 10px black',
    textAlign: 'center',
  },
  carousel: {
    width: '100%',
  },
  discount: {
    fontSize: '25px',
    color: 'white',
    width: '100%',
    textAlign: 'center',
    zIndex: 3,
  },
  products: {
    margin: theme.spacing(2, 0),
    zIndex: 3,
  },
  product: {
    color: 'white',
    zIndex: 3,
  },
  partialPrice: {
    position: 'relative',
    color: 'white',
    marginBottom: theme.spacing(3),
    zIndex: 3,
    textShadow: '0px 0px 10px black',
    textAlign: 'center',
    fontSize: '20px',
  },
  chip: {
    position: 'absolute',
    right: -20,
    top: -20,
    marginLeft: theme.spacing(2),
  }
}))