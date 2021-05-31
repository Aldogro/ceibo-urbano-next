import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'

import { fetchProducts } from '../../redux/actions/products'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Container from '@material-ui/core/Container'
import Dialog from '../../components/Dialog'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'

import EditIcon from '@material-ui/icons/Edit'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

import MainLayout from '../../components/MainLayout'
import app, { publishItem, deleteItem } from '../../firebase/firebase.config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { productTypes, orderByOptions, productTypeOptions } from '../../utils/catalog'

const ListProductPage = ({ fetchProducts, products }) => {
  const classes = useStyles()
  const [user, loading, error] = useAuthState(app.auth())
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(null)
  const [type, setType] = useState('all')
  const [orderBy, setOrderBy] = useState(['price', 'asc'])

  const { enqueueSnackbar } = useSnackbar()

  const router = useRouter()
  
  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    fetchProducts(orderBy)
  }, [orderBy])

  const getProducts = () => {
    try { fetchProducts() }
    catch(error) { enqueueSnackbar('Ha sucedido un error al intentar obtener los productos', { variant: 'error'}) }
  }

  const handlePublish = async ({ id, publish }) => {
    try {
      await publishItem({ id, publish, collection: 'products' })
      enqueueSnackbar('Se actualizó el estado correctamente', { variant: 'success'})
      getProducts()
    }
    catch (error) { enqueueSnackbar('Ha sucedido un error al intentar cambiar el estado de la publicación', { variant: 'error'}) }
  }

  const handleDelete = (id) => {
    setDialogOpen(true)
    setSelectedId(id)
  }
  
  const confirmDelete = async () => {
    try {
      await deleteItem({ selectedId, collection: 'products' })
      enqueueSnackbar('El producto se eliminó correctamente', { variant: 'success'})
      setDialogOpen(false)
      getProducts()
    }
    catch (error) { enqueueSnackbar('Ha sucedido un error al intentar eliminar el producto', { variant: 'error'}) }
  }

  return (
    <React.Fragment>
      <MainLayout>
        <Container maxWidth="lg" className={classes.marginTop}>
          {user ?
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

              <Grid container className={classes.filters} cols={1}>
                <Grid item xs={12} lg={4} className={classes.filterLabel}>
                  <InputLabel id="label-filter-by-type">Filtrar por tipo</InputLabel>
                  <Select
                    className={classes.fullWidth}
                    labelId="label-filter-by-type"
                    id="filter-by-type-select"
                    value={type}
                    onChange={({ target }) => setType(target.value)}
                  >
                    {productTypeOptions.map((type, index) => (
                      <MenuItem key={index} value={type.key}>
                        {type.label}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} lg={4} className={classes.filterLabel}>
                  <InputLabel id="label-order-by">Ordenar por</InputLabel>
                  <Select
                    className={classes.fullWidth}
                    labelId="label-order-by"
                    id="order-by-select"
                    value={orderBy}
                    onChange={({ target}) => setOrderBy(target.value.split(','))}
                  >
                    {orderByOptions.map((orderBy, index) => (
                      <MenuItem key={index} value={orderBy.key}>
                        {orderBy.label}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                {products.products.map(product => (
                  product.type === type ?
                  <Grid item xs={12} lg={+product.cols} key={product.name}>
                    {console.log(product.type)}
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
                  : null
                ))}
              </Grid>
            </div>
            : <div></div>
          }
        </Container>
      </MainLayout>
    </React.Fragment>
  )
}

const mapStateToProps = ({ products }) => {
  return { products }
}

export default connect(mapStateToProps, { fetchProducts })(ListProductPage)

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
  filters: {
    margin: theme.spacing(2, 0),
  },
  filterLabel: {
    margin: theme.spacing(3, 2, 0),
  },
  fullWidth: {
    width: '100%',
  },
}));
