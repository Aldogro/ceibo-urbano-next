import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import AppAppBar from '../../../modules/views/AppAppBar'
import FormProduct from '../../../modules/components/form/FormProduct'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useProduct } from '../../../services/Product.context'

const EditProductPage = () => {
  const [productState, productDispatch] = useProduct()
  const classes = useStyles()
  const router = useRouter()

  useEffect(() => {
    productDispatch({
      type: 'SetProduct',
      payload: {
        product: {
          name: 'begonia',
          price: 34,
          description: 'sasd'
        }
      }
    })
  }, [])

  return (
    <React.Fragment>
      <AppAppBar />
      <Container maxWidth="lg">
        <Typography className={classes.title} variant="h4">
          Editar Productos
        </Typography>
        <FormProduct product={productState.product}/>
      </Container>
    </React.Fragment>
  )
}

export default EditProductPage

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '2rem',
  },
}))
