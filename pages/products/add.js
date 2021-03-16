import React from 'react'
import { useRouter } from 'next/router'
import AppAppBar from '../../modules/views/AppAppBar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import FormProduct from '../../modules/components/form/FormProduct'
import { makeStyles } from '@material-ui/core/styles'
import { useProduct, ActionType } from '../../services/Product.context'

const AddProductPage = () => {
  const router = useRouter()
  const [productState, productDispatch] = useProduct('')
  const classes = useStyles()

  const createProduct = (data) => {
    productDispatch({
      type: ActionType.CREATE_PRODUCT,
      payload: data
    })
    router.push('/products')
  }

  return (
    <React.Fragment>
      <AppAppBar />
      <Container maxWidth="lg">
        <Typography className={classes.title} variant="h4">
          Agregar producto
        </Typography>
        <FormProduct onSubmit={(data) => createProduct(data)} />
      </Container>
    </React.Fragment>
  )
}

export default AddProductPage

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
}))
