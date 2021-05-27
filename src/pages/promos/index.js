import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'

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
import Dialog from '../../components/Dialog'

import EditIcon from '@material-ui/icons/Edit'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

import MainLayout from '../../components/MainLayout'
import app, { publishItem, deleteItem } from '../../firebase/firebase.config'
import { useAuthState } from 'react-firebase-hooks/auth'

import { connect } from 'react-redux'
import { fetchPromos } from '../../redux/actions/promos'

const ListPromoPage = ({ fetchPromos, promos }) => {
  const classes = useStyles()
  const [user, loading, error] = useAuthState(app.auth())
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(null)
  const router = useRouter()

  const { enqueueSnackbar } = useSnackbar()
  
  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
    getPromos()
  }, [])

  const getPromos = () => {
    try { fetchPromos() }
    catch(error) { enqueueSnackbar('Ha sucedido un error', { variant: 'error'}) }
  }

  const handlePublish = async ({ id, publish }) => {
    try {
      await publishItem({ id, publish, collection: 'promos' })
      enqueueSnackbar('Se actualizó el estado correctamente', { variant: 'success'})
      getPromos()
    }
    catch (error) { enqueueSnackbar('Ha sucedido un error', { variant: 'error'}) }
  }

  const handleDelete = (id) => {
    setDialogOpen(true)
    setSelectedId(id)
  }
  
  const confirmDelete = async () => {
    try {
      await deleteItem({ selectedId, collection: 'promos' })
      enqueueSnackbar('Se eliminó la promo correctamente', { variant: 'success'})
      setDialogOpen(false)
      getPromos()
    }
    catch (error) { enqueueSnackbar('Ha sucedido un error', { variant: 'error'}) }
  }

  return (
    <React.Fragment>
      <MainLayout>
        <Container maxWidth="lg" className={classes.marginTop}>
          {user ?
            <div className={classes.root}>
              <Typography className={classes.title} variant="h4">
                Listado de promos
              </Typography>
              <Button color="primary" className={classes.addButton} onClick={() => router.push('/promos/add')}>
                Agregar Promo
              </Button>
              <Dialog
                isOpen={dialogOpen}
                handleConfirm={() => confirmDelete()}
                handleClose={() => setDialogOpen(false)}
                question="¿Seguro querés borrar esta promo?"
              />
              <Grid container spacing={2}>
                {promos?.promos.map(promo => (
                  <Grid item xs={12} lg={+promo.cols} key={promo.id}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={promo.picture}
                          title={promo.name}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {promo.name}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            {promo.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <IconButton size="small" color="primary" onClick={() => router.push(`/promos/${promo.id}/edit`)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton size="small" color="primary" onClick={() => handleDelete(promo.id)}>
                          <DeleteForeverIcon />
                        </IconButton>
                        <IconButton size="small" color="primary" onClick={() => handlePublish(promo)}>
                          {promo.publish ? <VisibilityIcon /> : <VisibilityOffIcon />}
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
      </MainLayout>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return { promos: state.promos }
}

export default connect(mapStateToProps, { fetchPromos })(ListPromoPage)

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  marginTop: {
    margin: theme.spacing('70px', 'auto'),
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
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
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
}));
