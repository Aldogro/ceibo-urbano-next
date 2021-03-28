import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { DropzoneArea } from 'material-ui-dropzone'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { makeStyles } from '@material-ui/core/styles'
import app from '../../../firebase/firebase.config'
import { useRouter } from 'next/router'

const FormProduct = ({ product = {}, onSubmit }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [cols, setCols] = useState('')
  const [picture, setPicture] = useState('')
  const [publish, setPublish] = useState(false)

  const router = useRouter()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      name,
      description,
      price,
      cols,
      picture,
      publish,
    })
  }

  useEffect(() => {
    if (Object.keys(product).length !== 0) {
      setName(product.name)
      setDescription(product.description)
      setPrice(product.price)
      setCols(product.cols)
      setPicture(product.picture)
      setPublish(product.publish)
    }
  }, [product])

  const classes = useStyles()

  const onFileChanges = (files) => {
    if (files.length) {
      app.storage().ref().child('/images').child(files[0].name).put(files[0])
        .then(snapshot => app.storage().ref(snapshot.metadata.fullPath).getDownloadURL())
        .then(url => setPicture(url))
    }
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
                onChange={({ target }) => setPrice(target.value)}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <DropzoneArea
                acceptedFiles={['image/*']}
                filesLimit={1}
                onChange={(files) => onFileChanges(files)}
                onDelete={() => setPicture('')}
              />
            </Grid>
            {picture
              ? <Grid item xs={12} lg={6}>
                <div className={classes.contain}>
                  <img
                    className={classes.fullWidth}
                    src={picture}
                    alt="product image"
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
  }
}))