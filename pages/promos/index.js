import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useAuth } from '../../services/Auth.context'
import { useRouter } from 'next/router'
import { usePromo, ActionType } from '../../services/Promo.context'
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
import Dialog from '../../modules/components/Dialog'

import EditIcon from '@material-ui/icons/Edit'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

import AppAppBar from '../../modules/views/AppAppBar'
import { getCollection, publishItem, deleteItem } from '../../firebase/firebase.config'

const ListPromoPage = () => {
  const classes = useStyles()
  const [auth, authDispatch] = useAuth()
  const [promoState, promoDispatch] = usePromo()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(null)
  const router = useRouter()

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  
  useEffect(() => {
    if (!auth.user.email) {
      router.push('/login')
    }
    getPromos()
  }, [])

  const getPromos = () => {
    getCollection('promos')
    .then(snapshot => promoDispatch({
      type: ActionType.SET_PROMOS,
      payload: snapshot.docs.map(doc => doc.data()),
    }))
  }

  const handlePublish = ({ id, publish }) => {
    publishItem({ id, publish, collection: 'promos' })
      .then(() => {
        enqueueSnackbar('Se actualizó el estado correctamente', { variant: 'success'})
        getPromos()
      })
      .catch(() => enqueueSnackbar('Ha sucedido un error', { variant: 'error'}))
  }

  const handleDelete = (id) => {
    setDialogOpen(true)
    setSelectedId(id)
  }
  
  const confirmDelete = () => {
    deleteItem({ selectedId, collection: 'promos' })
      .then(() => {
        enqueueSnackbar('Se eliminó la promo correctamente', { variant: 'success'})
        setDialogOpen(false)
        getPromos()
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
              {promoState?.promos.map(promo => (
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
    </React.Fragment>
  )
}

export default ListPromoPage

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
