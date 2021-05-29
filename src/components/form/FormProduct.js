import React, { useEffect, useState } from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Switch from '@material-ui/core/Switch'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import { DropzoneArea } from 'material-ui-dropzone'

import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'

import { productTypeOptions, productSunOptions, productWaterOptions } from '../../utils/catalog'
import app from '../../firebase/firebase.config'

const FormProduct = ({ product = {}, onSubmit }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [cols, setCols] = useState('')
  const [picture, setPicture] = useState('')
  const [publish, setPublish] = useState(false)
  const [type, setType] = useState('all')
  const [sun, setSun] = useState('')
  const [water, setWater] = useState('')
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    if (Object.keys(product).length !== 0) {
      setName(product.name)
      setDescription(product.description)
      setPrice(+product.price)
      setCols(product.cols)
      setPicture(product.picture)
      setPublish(product.publish)
      setType(product.type)
      setSun(product.sun)
      setWater(product.water)
    }
  }, [product])

  const handleOnSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      name,
      description,
      price: +price,
      cols,
      picture,
      publish,
      type,
      sun,
      water,
    })
  }

  const classes = useStyles()

  const onFileChanges = async (files) => {
    if (files.length) {
      setLoading(true)
      setPicture('')
      const snapshot = await app.storage().ref().child('/images').child(files[0].name).put(files[0])
      const url = await app.storage().ref(snapshot.metadata.fullPath).getDownloadURL()
      setPicture(url)
      setLoading(false)
    }
  }

  const isValid = () => {
    return picture.length > 0
  }

  return (
    <React.Fragment>
        <form onSubmit={(data) => handleOnSubmit(data)} noValidate autoComplete="off">
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
            <Grid item xs={12} lg={5}>
              <TextField
                className={classes.fullWidth}
                id="Name"
                label="Nombre"
                value={name}
                required
                onChange={({ target }) => setName(target.value)}
              />
            </Grid>
            <Grid item xs={12} lg={7}>
              <TextField
                className={classes.fullWidth}
                id="Description"
                label="Descripción"
                value={description}
                onChange={({ target }) => setDescription(target.value)}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <TextField
                className={classes.fullWidth}
                id="cols"
                label="Columnas"
                type="number"
                value={cols}
                onChange={({ target }) => setCols(target.value)}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <TextField
                className={classes.fullWidth}
                id="Price"
                label="Precio"
                type="number"
                value={price}
                onChange={({ target }) => setPrice(+target.value)}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
              <Select
                className={classes.fullWidth}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                onChange={({ target }) => setType(target.value)}
              >
                {productTypeOptions.map(type => (
                  <MenuItem key={type.key} value={type.key}>
                    {type.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} lg={4}>
              <InputLabel id="demo-simple-select-label">Sol</InputLabel>
              <Select
                className={classes.fullWidth}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sun}
                onChange={({ target }) => setSun(target.value)}
              >
                {productSunOptions.map(sun => (
                  <MenuItem key={sun.key} value={sun.key}>
                    {sun.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} lg={4}>
              <InputLabel id="demo-simple-select-label">Riego</InputLabel>
              <Select
                className={classes.fullWidth}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={water}
                onChange={({ target }) => setWater(target.value)}
              >
                {productWaterOptions.map(water => (
                  <MenuItem key={water.key} value={water.key}>
                    {water.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} lg={6}>
              <DropzoneArea
                acceptedFiles={['image/*']}
                filesLimit={1}
                maxFileSize={10000000}
                dropzoneText="Imagen principal"
                onChange={(files) => onFileChanges(files)}
                onDelete={() => setPicture('')}
              />
            </Grid>
            <Grid item xs={12} lg={6} className={classes.contain}>
              {!picture && loading
                ? <CircularProgress />
                : <img className={classes.image} src={picture} alt="product image" height="100%" />
              }
            </Grid>
          </Grid>

          <Grid item xs={12} className={classes.actions}>
            <Button
              className={classes.floatRight}
              disabled={!isValid()}
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
              onClick={() => router.push('/products')}
            >
              Cancelar
            </Button>
          </Grid>
        </form>
    </React.Fragment>
  )
}

export default FormProduct

const useStyles = makeStyles((theme) => ({
  actions: {
    margin: theme.spacing('20px', 'auto'),
  },
  contain: {
    marginTop: 'auto',
    marginBottom: 'auto',
    textAlign: 'center',
  },
  image: {
    maxHeight: '250px'
  },
  fullWidth: {
    width: '100%',
  },
  floatRight: {
    minWidth: 120,
    float: 'right',
    marginLeft: 16,
  }
}))