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

const FormPromo = ({ promo = {}, onSubmit }) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [cols, setCols] = useState('')
  const [discount, setDiscount] = useState('')
  const [picture, setPicture] = useState('')
  const [publish, setPublish] = useState(false)
  const [products, setProducts] = useState([])

  const router = useRouter()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      name,
      price,
      cols,
      discount,
      picture,
      publish,
      products,
    })
  }

  useEffect(() => {
    if (Object.keys(promo).length !== 0) {
      setName(promo.name)
      setPrice(promo.price)
      setCols(promo.cols)
      setDiscount(promo.discount)
      setPicture(promo.picture)
      setPublish(promo.publish)
      setProducts(promo.products)
    }
  }, [promo])

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

  const classes = useStyles()

  const onFileChanges = (files) => {
    if (files.length) {
      app.storage().ref().child('/images').child(files[0].name).put(files[0])
        .then(snapshot => app.storage().ref(snapshot.metadata.fullPath).getDownloadURL())
        .then(url => setPicture(url))
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
    getTotalPrice()
  }

  const getTotalPrice = () => {
    let temp = 0
    products.forEach(product => {
      temp += product.price
    })
    setPrice(Math.ceil(temp - ((discount * temp) / 100)))
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
                label="Descuento %"
                type="number"
                value={discount}
                onChange={({ target }) => {
                  setDiscount(target.value)
                  getTotalPrice()
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                className={classes.fullWidth}
                id="Price"
                label={`$${price} - automático`}
                disabled
                type="number"
              />
            </Grid>
            <Grid item xs={12} md={12} className={classes.products}>
              {products.map((product, index) => (
                <Grid container spacing={3} cols={1} key={index}>
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
                    <IconButton onClick={() => onRemoveProduct(product)}>
                      <ClearIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              ))}
              <Button onClick={addProduct}>Agregar Producto</Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <DropzoneArea
                acceptedFiles={['image/*']}
                filesLimit={1}
                onChange={(files) => onFileChanges(files)}
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
}))