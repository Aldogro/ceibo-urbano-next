import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useAuth } from '../../services/Auth.context'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import { useProduct, ActionType } from '../../services/Product.context'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Dialog from '../../modules/components/Dialog'

import EditIcon from '@material-ui/icons/Edit'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

import AppAppBar from '../../modules/views/AppAppBar'
import { getCollection, publishItem, deleteItem } from '../../firebase/firebase.config'
import { productTypes } from '../../utils/catalog'

const ListProductPage = () => {
  const classes = useStyles()
  const [auth, authDispatch] = useAuth()
  const [productState, productDispatch] = useProduct()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(null)

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const router = useRouter()
  
  useEffect(() => {
    if (!auth.user.email) {
      router.push('/login')
    }
    getProducts()
  }, [])

  const getProducts = () => {
    getCollection('products')
    .then(snapshot => productDispatch({
      type: ActionType.SET_PRODUCTS,
      payload: snapshot.docs.map(doc => doc.data()),
    }))
  }

  const handlePublish = ({ id, publish }) => {
    publishItem({ id, publish, collection: 'products' })
      .then(() => {
        enqueueSnackbar('Se actualizó el estado correctamente', { variant: 'success'})
        getProducts()
      })
      .catch(() => enqueueSnackbar('Ha sucedido un error', { variant: 'error'}))
  }

  const handleDelete = (id) => {
    setDialogOpen(true)
    setSelectedId(id)
  }
  
  const confirmDelete = () => {
    deleteItem({ selectedId, collection: 'products' })
      .then(() => {
        enqueueSnackbar('El producto se eliminó correctamente', { variant: 'success'})
        setDialogOpen(false)
        getProducts()
      })
      .catch((error) => enqueueSnackbar('Ha sucedido un error', { variant: 'error'}))
  }

  return (
    <React.Fragment>
      <AppAppBar />
      <Container maxWidth="lg" className={classes.marginTop}>
        {auth.user.email ?
          <div className={classes.root}>
            <Typography className={classes.title} variant="h4">
              Listado de productos
            </Typography>
            <Button color="primary" className={classes.addButton} onClick={() => router.push('/products/add')}>
              Agregar Producto
            </Button>
            <Dialog
              isOpen={dialogOpen}
              handleConfirm={() => confirmDelete()}
              handleClose={() => setDialogOpen(false)}
              question="¿Seguro querés borrar este producto?"
            />
            <Grid container spacing={2}>
              {productState?.products.map(product => (
                <Grid item xs={12} lg={+product.cols} key={product.name}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={product.picture}
                        title={product.name}
                      />
                      <CardContent>
                        <Typography className={classes.productPrice} gutterBottom variant="h4" component="h2">
                          ${product.price}
                        </Typography>
                        <Typography className={classes.productName} gutterBottom variant="h5" component="h2">
                          {product.name}
                        </Typography>
                        <Typography className={classes.productType} color="textSecondary">
                          {productTypes[product.type]}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {product.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <IconButton size="small" color="primary" onClick={() => router.push(`/products/${product.id}/edit`)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton size="small" color="primary" onClick={() => handleDelete(product.id)}>
                        <DeleteForeverIcon />
                      </IconButton>
                      <IconButton size="small" color="primary" onClick={() => handlePublish(product)}>
                        {product.publish ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
          : <div></div>
        }
      </Container>
    </React.Fragment>
  )
}

export default ListProductPage

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  addButton: {
    marginBottom: '2rem',
  },
  gridList: {
    width: 1200,
    height: 'auto',
  },
  media: {
    height: 140,
  },
  marginTop: {
    margin: theme.spacing('70px', 'auto'),
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
  productName: {
    display: 'inline-block',
    width: '70%',
    marginBottom: 0,
  },
  productType: {
    fontSize: 12,
    marginBottom: theme.spacing(1),
  },
  productPrice: {
    display: 'inline-block',
    float: 'right',
  },
  alert: {
    position: 'fixed',
    left: theme.spacing(2),
    bottom: theme.spacing(2),
    zIndex: theme.zIndex.drawer + 1
  },
}));
