import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import { useSnackbar } from 'notistack'

import { fetchProduct } from '../../../actions/products'
import { connect } from 'react-redux'

import MainLayout from '../../../components/MainLayout'
import FormProduct from '../../../components/form/FormProduct'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import { getItem, editItem } from '../../../firebase/firebase.config'

const EditProductPage = ({ fetchProduct, products }) => {
  const classes = useStyles()
  const router = useRouter()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  useEffect(() => {
    const { id } = router.query
    if (router.query.id) {
      fetchProduct(id)
    }
  }, [router.query])

  const updateProduct = async (data) => {
    try {
      await editItem({ collection: 'products', id: router.query.id, data })
      enqueueSnackbar('Se ha editado el producto correctamente', { variant: 'success'})
      router.push('/products')

    }
    catch (error) { enqueueSnackbar('Ha ocurrido un error al intentar editar', { variant: 'error'}) }
  }

  return (
    <React.Fragment>
      <MainLayout>
        <Container maxWidth="lg" className={classes.container}>
          <div className={classes.root}>
            <Typography className={classes.title} variant="h4">
              Editar Productos
            </Typography>
            {products?.product
              ? <FormProduct onSubmit={(data) => updateProduct(data)} product={products.product}/>
              : null
            }
          </div>
        </Container>
      </MainLayout>
    </React.Fragment>
  )
}

const mapStateToProps = ({ products }) => {
  return { products }
}

export default connect(mapStateToProps, { fetchProduct })(EditProductPage)

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
