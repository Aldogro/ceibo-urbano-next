import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import AppAppBar from '../../../modules/views/AppAppBar'
import FormProduct from '../../../modules/components/form/FormProduct'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useProduct, ActionType } from '../../../services/Product.context'
import { db } from '../../../firebase/firebase.config'

const EditProductPage = () => {
  const [productState, productDispatch] = useProduct()
  const classes = useStyles()
  const router = useRouter()

  useEffect(() => {
    const { id } = router.query
    if (router.query.id) {
      db.collection('products').doc(id).get()
        .then(snapshot => {
          productDispatch({
            type: ActionType.SET_PRODUCT,
            payload: snapshot.data(),
          })
        })
    }
  }, [router.query])

  const updateProduct = (data) => {
    db.collection('products').doc(router.query.id).update(data)
      .then(() => router.push('/products')) // FIX ME agregar toast que avise que se editó correctamente
      .catch(error => console.log(error)) // toast que avise que algo salió mal
  }

  return (
    <React.Fragment>
      <AppAppBar />
      <Container maxWidth="lg">
        <Typography className={classes.title} variant="h4">
          Editar Productos
        </Typography>
        {productState?.product
          ? <FormProduct onSubmit={(data) => updateProduct(data)} product={productState.product}/>
          : null
        }
      </Container>
    </React.Fragment>
  )
}

export default EditProductPage

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
}))
