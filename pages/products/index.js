import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useAuth } from '../../services/Auth.context'
import { useRouter } from 'next/router'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import AppAppBar from '../../modules/views/AppAppBar'
import { db } from '../../firebase/firebase.config'
import { useProduct, ActionType } from '../../services/Product.context'

const ListProductPage = () => {
  const classes = useStyles();
  const [auth, authDispatch] = useAuth()
  const [productState, productDispatch] = useProduct()
  const router = useRouter()
  
  useEffect(() => {
    if (!auth.user.email) {
      router.push('/login')
    }
    db.collection('products')
    .get()
    .then(snapshot => productDispatch({
      type: ActionType.SET_PRODUCTS,
      payload: snapshot.docs.map(doc => doc.data()),
    }))
  }, [productState])

  const handleDelete = (id) => {
    productDispatch({
      type: ActionType.DELETE_PRODUCT,
      payload: id
    })
  }

  return (
    <React.Fragment>
      <AppAppBar />
      <Container maxWidth="lg">
        {auth.user.email ?
          <div className={classes.root}>
            <Typography className={classes.title} variant="h4">
              Listado de productos
              <Button color="primary" className={classes.floatRight} onClick={() => router.push('/products/add')}>
                Agregar Producto
              </Button>
            </Typography>
            <Grid container spacing={2}>
              {productState?.products.map(product => (
                <Grid item xs={+product.cols} key={product.id}>
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
                      <Button size="small" color="primary" onClick={() => router.push(`/products/${product.id}/edit`)}>
                        Editar
                      </Button>
                      <Button size="small" color="primary" onClick={() => handleDelete(product.id)}>
                        Borrar
                      </Button>
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
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  title: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
}));
