import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { DropzoneArea } from 'material-ui-dropzone'
import { makeStyles } from '@material-ui/core/styles'
import { firestorage } from '../../../firebase/firebase.config'
import { useRouter } from 'next/router'

const FormProduct = ({ product = {}, onSubmit }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [cols, setCols] = useState('')
  const [picture, setPicture] = useState('')

  const handleNameChange = ({ target }) => setName(target.value)
  const handleDescriptionChange = ({ target }) => setDescription(target.value)
  const handlePriceChange = ({ target }) => setPrice(target.value)
  const handleColsChange = ({ target }) => setCols(target.value)

  const router = useRouter()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      name,
      description,
      price,
      cols,
      picture,
    })
  }

  useEffect(() => {
    if (Object.keys(product).length !== 0) {
      setName(product.name)
      setDescription(product.description)
      setPrice(product.price)
      setCols(product.cols)
      setPicture(product.picture)
    }
  }, [product])

  const classes = useStyles()

  const onFileChanges = (files) => {
    if (files.length) {
      firestorage.ref().child('/images').child(files[0].name).put(files[0])
        .then(snapshot => firestorage.ref(snapshot.metadata.fullPath).getDownloadURL())
        .then(url => setPicture(url))
    }
  }

  return (
    <React.Fragment>
        <form className={classes.root} onSubmit={(data) => handleOnSubmit(data)} noValidate autoComplete="off">
          <Grid container spacing={3} cols={1}>
            <Grid item xs={6}>
              <TextField
                className={classes.fullWidth}
                id="Name"
                label="Nombre"
                value={name}
                required
                onChange={handleNameChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.fullWidth}
                id="Price"
                label="Precio"
                type="number"
                value={price}
                onChange={handlePriceChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.fullWidth}
                id="cols"
                label="Columnas"
                type="number"
                value={cols}
                onChange={handleColsChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.fullWidth}
                id="Description"
                label="Descripción"
                value={description}
                onChange={handleDescriptionChange}
              />
            </Grid>
            <Grid item xs={6}>
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
                    alt="product image"
                  />
                </div>
              </Grid>
              : <div />
            }
          </Grid>

          <Grid item xs={12}>
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
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
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