import React, { useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { usePromo, ActionType as PromoActionType } from '../../services/Promo.context'

import Skeleton from '@material-ui/lab/Skeleton'
import Grid from '@material-ui/core/Grid'
import PromoItem from '../views/PromoItem'
import Container from '@material-ui/core/Container'
import Typography from '../components/Typography'

import PropTypes from 'prop-types'
import app from '../../firebase/firebase.config'

function PromoCategories(props) {
  const { classes } = props
  const [promoState, promoDispatch] = usePromo()

  const skeletons = ['a', 'b', 'c']

  useEffect(() => {
    app.firestore().collection('promos')
    .get()
    .then(snapshot => {
      promoDispatch({
        type: PromoActionType.SET_PROMOS,
        payload: snapshot.docs.map(doc => doc.data()),
      })
      promoDispatch({
        type: PromoActionType.GET_MAX_DISCOUNT,
      })
    })
  }, [])

  return (
    <Container className={classes.root} component="section">
      <Typography className={classes.title} variant="h4" marked="center" align="center" component="h2">
        ¡Aprovechá todas nuestras promociones!
      </Typography>
      <Grid container spacing={2}>
        {!promoState.promos.length
          ?
          skeletons.map((skeleton) => (
            <Grid item xs={12} lg={4} key={skeleton}>
              <Skeleton variant="rect" width={'100%'} height={118} />
              <Skeleton variant="text" />
              <Skeleton width="60%" />
              <br/>
              <Skeleton />
            </Grid>
          ))
          :
          promoState.promos.map((promo) => (
            <PromoItem promo={promo} key={promo.id}/>
          ))
        }
      </Grid>
    </Container>
  )
}

PromoCategories.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = (theme) => ({
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
})


export default withStyles(styles)(PromoCategories)
