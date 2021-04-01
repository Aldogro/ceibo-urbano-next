import React, { useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { usePromo, ActionType as PromoActionType } from '../../services/Promo.context'
import { useCart, ActionType as CartActionType } from '../../services/Cart.context'

import Skeleton from '@material-ui/lab/Skeleton'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Typography from '../components/Typography'
import Chip from '@material-ui/core/Chip'
import PropTypes from 'prop-types'
import app from '../../firebase/firebase.config'

function PromoCategories(props) {
  const { classes } = props
  const [promoState, promoDispatch] = usePromo()
  const [cartState, cartDispatch] = useCart()

  const skeletons = ['a', 'b', 'c']

  useEffect(() => {
    app.firestore().collection('promos')
    .get()
    .then(snapshot => promoDispatch({
      type: PromoActionType.SET_PROMOS,
      payload: snapshot.docs.map(doc => doc.data()),
    }))
  }, [])

  const handleOnAddToCart = (promo) => {
    cartDispatch({
      type: CartActionType.ADD_ITEM,
      payload: promo,
    })
  }

  const getCartItems = (promo) => {
    const item = cartState.items.filter(item => item.id === promo.id)
    return item[0]?.amount
  }

  return (
    <Container className={classes.root} component="section">
      <Typography className={classes.title} variant="h4" marked="center" align="center" component="h2">
        ¡Aprovechá todas nuestras promociones!
      </Typography>
      <Grid container>
        {!promoState.promos.length
          ?
          skeletons.map((skeleton) => (
            <Grid item xs={12} lg={4} key={skeleton}>
              <Skeleton variant="rect" width={'100%'} height={118} />
              <Skeleton variant="text" />
              <Skeleton width="60%" />
              <br/>
              <Skeleton />
            </Grid>
          ))
          :
          promoState.promos.map((promo) => (
            <Grid key={promo.name} item xs={12} md={promo.cols}>
              <div className={classes.imageSrc} style={{ backgroundImage: `url(${promo.picture})`}}>
                <div className={classes.backdrop}></div>
                <Typography component="h3" variant="h6" color="inherit" className={classes.imageTitle} >
                  {promo.name}
                </Typography>
                <Typography className={classes.price} component="h3" variant="h6" color="inherit">
                  ${promo.price}
                </Typography>
                <Typography className={classes.discount}>
                  {promo.discount}% OFF
                </Typography>
                <div className={classes.products}>
                  {promo.products.map((product) => (
                    <Typography className={classes.product}>
                      {product.name} - ${product.price}
                    </Typography>
                  ))}
                  {
                    promo.partialPrice
                    ?
                      <Typography className={classes.partialPrice}>
                        ¡Ahorrás {promo.partialPrice - promo.price}!
                      </Typography>
                    : null
                  }
                </div>
                <Button color="secondary" variant="outlined" onClick={() => handleOnAddToCart(promo)}>
                  Agregar al carrito
                  {
                    getCartItems(promo)
                    ? <Chip className={classes.chip} color="primary" label={getCartItems(promo)} />
                    : null
                  }
                </Button>
              </div>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}

PromoCategories.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  title: {
    fontSize: '18px',
    fontWeight: 700,
    [theme.breakpoints.up('sm')]: {
      fontSize: '30px',
    },
    marginBottom: theme.spacing(4),
  },
  backdrop: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00000055',
    position: 'absolute',
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
    justifyContent: 'center',
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
    fontSize: '30px',
    color: 'white',
    width: '100%',
    textAlign: 'center',
    zIndex: 3,
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
    color: 'white',
    marginTop: theme.spacing(3),
    zIndex: 3,
    textAlign: 'center',
    fontSize: '20px',
  },
  chip: {
    position: 'absolute',
    right: -20,
    top: -20,
    marginLeft: theme.spacing(2),
  }
})


export default withStyles(styles)(PromoCategories)
