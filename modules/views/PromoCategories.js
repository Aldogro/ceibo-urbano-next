import React, { useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { usePromo, ActionType as PromoActionType } from '../../services/Promo.context'
import { useCart, ActionType as CartActionType } from '../../services/Cart.context'
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
      <Typography variant="h4" marked="center" align="center" component="h2">
        ¡Aprovechá todas nuestras promociones!
      </Typography>
      <div className={classes.images}>
        {promoState.promos.map((promo) => (
          <div
            key={promo.name}
            className={classes.imageWrapper}
            style={{
              width: '33.333%',
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${promo.picture})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {promo.name}
                <div className={classes.imageMarked} />
              </Typography>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
              >
                ${promo.price}
              </Typography>
              <Typography>
                <div className={classes.description}>{promo.description}</div>
              </Typography>
              <Button color="secondary" onClick={() => handleOnAddToCart(promo)}>
                Agregar al carrito
                {
                  getCartItems(promo)
                  ? <Chip className={classes.chip} color="primary" label={getCartItems(promo)} />
                  : null
                }
              </Button>
            </div>
          </div>
        ))}
      </div>
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
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
    marginBottom: '12px'
  },
  description: {
    padding: theme.spacing(0, 2),
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  chip: {
    marginLeft: theme.spacing(2),
  }
})


export default withStyles(styles)(PromoCategories)
