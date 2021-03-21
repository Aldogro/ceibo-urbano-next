import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useAuth } from '../../services/Auth.context'
import { useRouter } from 'next/router'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Dialog from '../../modules/components/Dialog'

import EditIcon from '@material-ui/icons/Edit'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

import AppAppBar from '../../modules/views/AppAppBar'
import app from '../../firebase/firebase.config'
import { useProduct, ActionType } from '../../services/Product.context'

const ListProductPage = () => {
  const classes = useStyles();
  const [auth, authDispatch] = useAuth()
  const [productState, productDispatch] = useProduct()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(null)
  const router = useRouter()
  
  useEffect(() => {
    if (!auth.user.email) {
      router.push('/login')
    }
    app.firestore().collection('products')
    .get()
    .then(snapshot => productDispatch({
      type: ActionType.SET_PRODUCTS,
      payload: snapshot.docs.map(doc => doc.data()),
    }))
  }, [])

  const handleDelete = (id) => {
    setDialogOpen(true)
    setSelectedId(id)
  }
  
  const confirmDelete = () => {
    productDispatch({
      type: ActionType.DELETE_PRODUCT,
      payload: selectedId
    })
    setDialogOpen(false)
    app.firestore().collection('products')
    .get()
    .then(snapshot => productDispatch({
      type: ActionType.SET_PRODUCTS,
      payload: snapshot.docs.map(doc => doc.data()),
    }))
  }

  return (
    <React.Fragment>
      <AppAppBar />
      <Container maxWidth="lg" className={classes.marginTop}>
        {auth.user.email ?
          <div className={classes.root}>
            <Typography className={classes.title} variant="h4">
              Listado de productos
              <Button color="primary" className={classes.floatRight} onClick={() => router.push('/products/add')}>
                Agregar Producto
              </Button>
            </Typography>
            <Dialog
              isOpen={dialogOpen}
              handleConfirm={() => confirmDelete()}
              handleClose={() => setDialogOpen(false)}
              question="¿Seguro querés borrar este producto?"
            />
            <Grid container spacing={2}>
              {productState?.products.map(product => (
                <Grid item xs={12} lg={+product.cols} key={product.id}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={product.picture}
                        title={product.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {product.name}
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
  floatRight: {
    float: 'right',
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
  title: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
}));
