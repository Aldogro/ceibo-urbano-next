import React, { useEffect } from 'react'
import AppAppBar from '../../modules/views/AppAppBar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import FormProduct from '../../modules/components/form/FormProduct'
import { makeStyles } from '@material-ui/core/styles'
import { useProduct } from '../../services/Product.context'

const AddProductPage = () => {
  const [productState, productDispatch] = useProduct()
  const classes = useStyles()

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
    console.log(productState)
  }, [])

  return (
    <React.Fragment>
      <AppAppBar />
      <Container maxWidth="lg">
        <Typography className={classes.title} variant="h4">
          Agregar producto
        </Typography>
        <FormProduct product={productState.product}/>
      </Container>
    </React.Fragment>
  )
}

export default AddProductPage

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '2rem',
  },
}))
