import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSnackbar } from 'notistack'
import { usePromo, ActionType as PromoActionType } from '../services/Promo.context'

import Skeleton from '@material-ui/lab/Skeleton'
import Grid from '@material-ui/core/Grid'
import PromoItem from './PromoItem'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import app from '../firebase/firebase.config'

const PromoCategories = () => {
  const classes = useStyles()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [promoState, promoDispatch] = usePromo()

  const skeletons = ['a', 'b', 'c']

  useEffect(() => {
    getPromos()
  }, [])

  const getPromos = async () => {
    try {
      const snapshot = await app.firestore().collection('promos').get()
      promoDispatch({
        type: PromoActionType.SET_PROMOS,
        payload: snapshot.docs.map(doc => doc.data()),
      })
      promoDispatch({
        type: PromoActionType.GET_MAX_DISCOUNT,
      })
    }
    catch (error) {enqueueSnackbar('Ocurrió un error al solicitar las promociones', { variant: 'error'})}
    
  }

  return (
    <Container className={classes.root} component="section">
      <Typography className={classes.title} variant="h4" marked="center" align="center" component="h2">
        ¡Aprovechá todas nuestras promociones!
      </Typography>
      <Grid container spacing={2}>
        {!promoState.promos.length
          ?
          skeletons.map((skeleton, index) => (
            <Grid item xs={12} lg={4} key={index}>
              <Skeleton variant="rect" width={'100%'} height={118} />
              <Skeleton variant="text" />
              <Skeleton width="60%" />
              <br/>
              <Skeleton />
            </Grid>
          ))
          :
          promoState.promos.map((promo, index) => (
            <PromoItem key={index} promo={promo} />
          ))
        }
      </Grid>
    </Container>
  )
}

export default PromoCategories

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  title: {
    fontSize: '18px',
    fontWeight: 700,
    [theme.breakpoints.up('sm')]: {
      fontSize: '30px',
    },
    marginBottom: theme.spacing(4),
  },
}))
