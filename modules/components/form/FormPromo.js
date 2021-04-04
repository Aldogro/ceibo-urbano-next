import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { DropzoneArea } from 'material-ui-dropzone'
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear'

import app from '../../../firebase/firebase.config'
import { Typography } from '@material-ui/core'

const FormPromo = ({ promo = {}, onSubmit }) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [partialPrice, setPartialPrice] = useState(0)
  const [cols, setCols] = useState('')
  const [discount, setDiscount] = useState(0)
  const [picture, setPicture] = useState('')
  const [publish, setPublish] = useState(false)
  const [products, setProducts] = useState([])
  const [carousel, setCarousel] = useState([])
  
  const classes = useStyles()
  const router = useRouter()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      name,
      price: +price,
      partialPrice: +partialPrice,
      cols,
      discount: +discount,
      picture,
      publish,
      products,
      carousel,
    })
  }

  useEffect(() => {
    if (Object.keys(promo).length !== 0) {
      setName(promo.name)
      setPrice(+promo.price)
      setPartialPrice(+promo.partialPrice)
      setCols(+promo.cols)
      setDiscount(+promo.discount)
      setPicture(promo.picture)
      setPublish(promo.publish)
      setProducts(promo.products)
      setCarousel(promo.carousel)
    }
  }, [promo])

  useEffect(() => {
    getDiscount()
  }, [price, products])

  const addProduct = () => {
    const product = [{
      name: 'Nombre',
      price: 0,
    }]
    setProducts(products.concat(product))
  }

  const onRemoveProduct = (product) => {
    setProducts(products.filter(_product => _product !== product))
  }

  const onFileChanges = (files, isPrimary = false) => {
    if (files.length) {
      const temp = carousel
      files.forEach(file => {
        app.storage().ref().child('/images').child(file.name).put(file)
          .then(snapshot => app.storage().ref(snapshot.metadata.fullPath).getDownloadURL())
          .then(url => {
            if (isPrimary) {
              setPicture(url)
            } else {
              temp.push(url)
              setCarousel([...carousel])
            }
          })
      })
    }
  }

  const productNameChange = (target, index) => {
    let temp = products
    temp[index].name = target.value
    setProducts(temp)
  }

  const productPriceChange = (target, index) => {
    let temp = products
    temp[index].price = +target.value
    setProducts(temp)
    getDiscount()
  }

  const getDiscount = () => {
    let temp = 0
    products.forEach(product => {
      temp += product.price
    })
    setDiscount(Math.ceil(((price * 100) / temp) - 100))
  }

  const onRemoveCarouselImage = (image) => {
    setCarousel(carousel.filter(_image => _image !== image))
  }

  return (
    <React.Fragment>
        <form className={classes.root} onSubmit={(data) => handleOnSubmit(data)} noValidate autoComplete="off">
          <Grid container spacing={3} cols={1}>
            <Grid item xs={12} lg={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={publish}
                    onChange={({ target }) => setPublish(target.checked)}
                    color="primary"
                  />
                }
                label="Publicar"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                className={classes.fullWidth}
                id="Name"
                label="Nombre"
                value={name}
                required
                onChange={({ target }) => setName(target.value)}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                className={classes.fullWidth}
                id="cols"
                label="Columnas"
                type="number"
                value={cols}
                onChange={({ target }) => setCols(target.value)}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                className={classes.fullWidth}
                id="discount"
                label={`${discount ? discount : 'Descuento'} % - Automático`}
                disabled
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                className={classes.fullWidth}
                id="Price"
                label="Precio"
                value={price}
                type="number"
                onChange={({ target}) => setPrice(+target.value)}
              />
            </Grid>
            <Grid item xs={12} md={12} className={classes.products}>
              <Typography>Productos</Typography>
              {products.map((product, index) => (
                <Grid className={classes.productContainer} container spacing={1} cols={1} key={index}>
                  <Grid item xs={12} md={7}>
                    <TextField
                      className={classes.fullWidth}
                      id="Name"
                      label={product.name || 'Nombre'}
                      required
                      onChange={({target}) => productNameChange(target, index)}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      className={classes.fullWidth}
                      id="Price"
                      label={product.price || 'Precio $'}
                      type="number"
                      onChange={({target}) => productPriceChange(target, index)}
                    />
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <IconButton className={classes.removeProduct} onClick={() => onRemoveProduct(product)}>
                      <ClearIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              ))}
              <Button className={classes.addProduct} color="primary" onClick={addProduct}>Agregar Producto</Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <DropzoneArea
                acceptedFiles={['image/*']}
                filesLimit={1}
                maxFileSize={10000000}
                dropzoneText="Imagen principal"
                onChange={(files) => onFileChanges(files, true)}
                onDelete={() => setPicture('')}
              />
            </Grid>
            {picture
              ? <Grid item xs={6}>
                <div className={classes.contain}>
                  <img
                    className={classes.fullWidth}
                    src={picture}
                    alt="promo image"
                  />
                </div>
              </Grid>
              : <div />
            }
            <Grid item xs={12} md={12}>
              <DropzoneArea
                acceptedFiles={['image/*']}
                filesLimit={10}
                maxFileSize={10000000}
                dropzoneText="Imágenes para el carrusel"
                onChange={(files) => onFileChanges(files)}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography>Imágenes del carrusel</Typography>
              {
                carousel
                ? carousel.map(image => (
                    <div key={image} className={classes.carouselImageContainer}>
                      <IconButton className={classes.removeCarouselImage} onClick={() => onRemoveCarouselImage(image)}>
                        <ClearIcon />
                      </IconButton>
                      <img className={classes.carouselImage} src={image} />
                    </div>
                  ))
                : null
              }
            </Grid>
          </Grid>

          <Grid item xs={12} className={classes.actions}>
            <Button
              className={classes.floatRight}
              variant="contained"
              type="submit"
              color="primary"
            >
              Guardar
            </Button>
            <Button
              className={classes.floatRight}
              variant="contained"
              color="secondary"
              onClick={() => router.push('/promos')}
            >
              Cancelar
            </Button>
          </Grid>
        </form>
    </React.Fragment>
  )
}

export default FormPromo

const useStyles = makeStyles((theme) => ({
  actions: {
    margin: theme.spacing('20px', 0),
  },
  contain: {
    maxHeight: '250px',
    width: '100%',
    display: 'flex',
  },
  fullWidth: {
    width: '100%',
    maxHeigth: '100%',
    objectFit: 'contain',
  },
  floatRight: {
    minWidth: 120,
    float: 'right',
    marginLeft: 16,
  },
  productContainer: {
    padding: theme.spacing(0, 2),
    '&:nth-child(even)': {
      background: theme.palette.lightGreen.main,
    },
  },
  addProduct: {
    marginTop: theme.spacing(2),
    float: 'right',
  },
  removeProduct: {
    color: theme.palette.error.light,
    float: 'right',
    paddingRight: 0,
    [theme.breakpoints.up('sm')]: {
      paddingRight: 1,
    },
  },
  carouselImageContainer: {
    height: '100px',
    display: 'inline-block',
    position: 'relative',
  },
  carouselImage: {
    padding: theme.spacing(2),
    height: '100px',
  },
  removeCarouselImage: {
    color: theme.palette.error.main,
    position: 'absolute',
    top: 5,
    right: 5,
  },
}))