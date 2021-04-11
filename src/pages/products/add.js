import React from 'react'

import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import { useSnackbar } from 'notistack'

import AppAppBar from '../../components/AppAppBar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import FormProduct from '../../components/form/FormProduct'

import { createItem } from '../../firebase/firebase.config'

const AddProductPage = () => {
  const router = useRouter()
  const classes = useStyles()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const createProduct = async (data) => {
    try {
      await createItem({ collection: 'products', data })
      enqueueSnackbar('Se ha creado el producto correctamente', { variant: 'success'})
      router.push('/products')
    }
    catch (error) { enqueueSnackbar('Ha ocurrido un error al intentar guardar el producto', { variant: 'error'}) }
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
    marginTop: '1rem',
    marginBottom: '1rem',
    fontSize: '18px',
    [theme.breakpoints.up('sm')]: {
      marginTop: '2rem',
      marginBottom: '1rem',
      fontSize: '24px',
    },
  },
}))
