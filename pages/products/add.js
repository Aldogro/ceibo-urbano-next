import React from 'react'

import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import { useSnackbar } from 'notistack'

import AppAppBar from '../../modules/views/AppAppBar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import FormProduct from '../../modules/components/form/FormProduct'

import { createItem } from '../../firebase/firebase.config'

const AddProductPage = () => {
  const router = useRouter()
  const classes = useStyles()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const createProduct = (data) => {
    createItem({ collection: 'products', data })
      .then(() => {
        enqueueSnackbar('Se ha creado el producto correctamente', { variant: 'success'})
        router.push('/products')
      })
      .catch((error) => enqueueSnackbar('Ha ocurrido un error', { variant: 'error'}))
  }

  return (
    <React.Fragment>
      <AppAppBar />
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.root}>
          <Typography className={classes.title} variant="h4">
            Agregar producto
          </Typography>
          <FormProduct onSubmit={(data) => createProduct(data)} />
        </div>
      </Container>
    </React.Fragment>
  )
}

export default AddProductPage

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    margin: theme.spacing('70px', 'auto'),
  },
  title: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
}))
