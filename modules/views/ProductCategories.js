import React, { useEffect, useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { useProduct, ActionType as ProductActionType } from '../../services/Product.context'
import { useCart, ActionType as CartActionType } from '../../services/Cart.context'
import Skeleton from '@material-ui/lab/Skeleton'

import Grid from '@material-ui/core/Grid'
import Backdrop from '@material-ui/core/Backdrop'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Container from '@material-ui/core/Container'
import Typography from '../components/Typography'
import Chip from '@material-ui/core/Chip'
import PropTypes from 'prop-types'
import app from '../../firebase/firebase.config'

function ProductCategories(props) {
  const { classes } = props
  const [productState, productDispatch] = useProduct()
  const [cartState, cartDispatch] = useCart()
  const [fullScreenImage, setFullScreenImage] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  const skeletons = ['a', 'b', 'c']

  useEffect(() => {
    getProducts()
  }, [])

  const handleFullSizeImage = (image) => {
    setSelectedImage(image)
    setFullScreenImage(true)
  }

  const getProducts = () => {
    app.firestore().collection('products')
    .get()
    .then(snapshot => productDispatch({
      type: ProductActionType.SET_PRODUCTS,
      payload: snapshot.docs.map(doc => doc.data()),
    }))
  }

  const handleOnAddToCart = (product) => {
    cartDispatch({
      type: CartActionType.ADD_ITEM,
      payload: product,
    })
  }

  const getCartItems = (product) => {
    const item = cartState.items.filter(item => item.id === product.id)
    return item[0]?.amount
  }

  return (
    <Container className={classes.root} component="section">
      <Typography className={classes.title} variant="h4" marked="center" align="center" component="h2">
        ¡Aprovechá todos nuestros productos!
      </Typography>
      <Backdrop className={classes.backdrop} open={fullScreenImage} onClick={() => setFullScreenImage(false)}>
        <img src={selectedImage} />
      </Backdrop>
      <Grid container spacing={2}>
        {!productState.products.length
          ?
          skeletons.map((skeleton) => (
            <Grid item xs={12} lg={4}>
              <Skeleton variant="rect" key={skeleton} width={'100%'} height={118} />
              <Skeleton variant="text" />
              <Skeleton width="60%" />
              <br/>
              <Skeleton />
            </Grid>
          ))
          :
          productState.products.map((product) => (
            product.publish
            ?
            <Grid item xs={12} lg={+product.cols} key={product.id}>
              <Card>
                <CardActionArea onClick={() => handleFullSizeImage(product.picture)}>
                  <CardMedia
                    className={classes.media}
                    image={product.picture}
                    title={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      ${product.price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {product.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => handleOnAddToCart(product)}>
                    Agregar al carrito
                    <AddCircleIcon color="primary" className={classes.chip} />
                  </Button>
                  {
                    getCartItems(product)
                    ? <Chip className={classes.chip} color="primary" label={getCartItems(product)} />
                    : null
                  }
                </CardActions>
              </Card>
            </Grid>
            : null
          ))
        }
        
      </Grid>
    </Container>
  )
}

ProductCategories.propTypes = {
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
    padding: 0,
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
  },
  media: {
    height: 140,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  title: {
    marginBottom: theme.spacing(4),
  }
})


export default withStyles(styles)(ProductCategories)
