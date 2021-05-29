import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Backdrop from '@material-ui/core/Backdrop'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'

import { productTypes, productWaterTypes, productSunTypes } from '../utils/catalog'

import { makeStyles } from '@material-ui/core/styles'

import { connect } from 'react-redux'
import { onAmountAdd } from '../redux/actions/cart'

const ProductItem = ({ product, cart, onAmountAdd }) => {
  const classes = useStyles()
  const [selectedImage, setSelectedImage] = useState('')
  const [fullScreenImage, setFullScreenImage] = useState(false)

  const getCartItems = (product) => {
    const item = cart.items.filter(item => item.id === product.id)
    return item[0]?.amount
  }

  const handleFullSizeImage = (image) => {
    setSelectedImage(image)
    setFullScreenImage(true)
  }

  return(
    <>
      <Backdrop className={classes.backdrop} open={fullScreenImage} onClick={() => setFullScreenImage(false)}>
        <div className={classes.backdropImage}>
          <img className={classes.backdropImageImg} src={selectedImage} />
        </div>
      </Backdrop>
      <Grid item xs={12} lg={+product.cols}>
        <Card className={classes.card}>
          <CardActionArea onClick={() => handleFullSizeImage(product.picture)}>
            <CardMedia
              className={classes.media}
              image={product.picture || '/image-placeholder.png'}
              title={product.name}
            />
            <CardContent>
              <Typography className={classes.price} gutterBottom variant="h5" component="h2">
                ${product.price}
              </Typography>
              <Typography className={classes.name} gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography className={classes.productType} color="textSecondary">
                  {productTypes[product.type]}
                </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {product.description}
              </Typography>
              {product.water
                ? (
                  <div className={classes.instructions}>
                    <img height="20px" src="/water-drop.svg"/>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {productWaterTypes[product.water]}
                    </Typography>
                  </div>
                )
                : null
              }
              {product.sun
                ? (
                  <div className={classes.instructions}>
                    <img height="20px" src="/sun.svg"/>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {productSunTypes[product.sun]}
                    </Typography>
                  </div>
                )
                : null
              }
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" variant="outlined" onClick={() => onAmountAdd(product)}>
              Agregar al carrito
              {
                getCartItems(product)
                ? <Chip className={classes.chip} color="primary" label={getCartItems(product)} />
                : null
              }
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  )
}

const mapStateToProps = ({ cart }) => {
  return { cart }
}

export default connect(mapStateToProps, { onAmountAdd })(ProductItem)

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  backdropImage: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'auto',
  },
  backdropImageImg: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      height: '700px',
      objectFit: 'contain'
    }
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  chip: {
    right: -20,
    top: -20,
    position: 'absolute',
    marginLeft: theme.spacing(2),
  },
  media: {
    height: 140,
  },
  price: {
    float: 'right',
    fontWeight: 700,
  },
  name: {
    width: '70%',
    fontSize: '16px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
    },
    marginBottom: 0,
  },
  productType: {
    fontSize: 12,
    marginBottom: theme.spacing(1),
  },
  instructions: {
    margin: theme.spacing(1, 0),
    display: 'flex',
    alignContent: 'center',
  },
}))