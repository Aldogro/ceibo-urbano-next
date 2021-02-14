import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { DropzoneArea } from 'material-ui-dropzone'
import { makeStyles } from '@material-ui/core/styles'

const FormProduct = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [files, setFiles] = useState('')

  const handleNameChange = ({ target }) => setName(target.value)
  const handleDescriptionChange = ({ target }) => setDescription(target.value)
  const handlePriceChange = ({ target }) => setPrice(target.value)

  const classes = useStyles()

  const onSubmit = (form) => {
    form.preventDefault()
    const formValue = {
      name,
      description,
      price,
      files,
    }
    console.log(formValue)
  }

  return (
    <React.Fragment>
        <form className={classes.root} onSubmit={onSubmit} noValidate autoComplete="off">
          <Grid container spacing={3} cols={2}>
            <Grid item xs={6}>
              <TextField className={classes.fullWidth} id="Name" label="Nombre" value={name} onChange={handleNameChange} />
            </Grid>
            <Grid item xs={6}>
              <TextField className={classes.fullWidth} id="Price" label="Precio" value={price} onChange={handlePriceChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField className={classes.fullWidth} id="Description" label="Descripción" value={description} onChange={handleDescriptionChange} />
            </Grid>
            <Grid item xs={12}>
              <DropzoneArea onChange={(files) => setFiles(files)} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button className={classes.floatRight} variant="contained" type="submit" color="primary">
              Guardar
            </Button>
            <Button className={classes.floatRight} variant="contained" color="secondary">
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
  fullWidth: {
    width: '100%',
  },
  floatRight: {
    minWidth: 120,
    float: 'right',
    marginLeft: 16,
  }
}))