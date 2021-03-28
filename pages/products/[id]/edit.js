import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import { useSnackbar } from 'notistack'
import { useProduct, ActionType } from '../../../services/Product.context'

import AppAppBar from '../../../modules/views/AppAppBar'
import FormProduct from '../../../modules/components/form/FormProduct'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import { getItem, editItem } from '../../../firebase/firebase.config'

const EditProductPage = () => {
  const [productState, productDispatch] = useProduct()
  const classes = useStyles()
  const router = useRouter()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  useEffect(() => {
    const { id } = router.query
    if (router.query.id) {
      getProduct(id)
    }
  }, [router.query])

  const getProduct = (id) => {
    getItem({ collection: 'products', id })
      .then(snapshot => {
        productDispatch({
          type: ActionType.SET_PRODUCT,
          payload: snapshot.data(),
        })
      })
  }

  const updateProduct = (data) => {
    editItem({ collection: 'products', id: router.query.id, data })
      .then(() => {
        enqueueSnackbar('Se ha editado el producto correctamente', { variant: 'success'})
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
            Editar Productos
          </Typography>
          {productState?.product
            ? <FormProduct onSubmit={(data) => updateProduct(data)} product={productState.product}/>
            : null
          }
        </div>
      </Container>
    </React.Fragment>
  )
}

export default EditProductPage

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
