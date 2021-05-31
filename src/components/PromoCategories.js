import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSnackbar } from 'notistack'

import Skeleton from '@material-ui/lab/Skeleton'
import Grid from '@material-ui/core/Grid'
import PromoItem from './PromoItem'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import { fetchPromos } from '../redux/actions/promos'
import { connect } from 'react-redux'

const PromoCategories = ({ fetchPromos, promos }) => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()

  const skeletons = ['a', 'b', 'c']

  useEffect(() => {
    getPromos()
  }, [])

  const getPromos = async () => {
    try { fetchPromos() }
    catch (error) {enqueueSnackbar('Ocurrió un error al solicitar las promociones', { variant: 'error'})}
  }

  return (
    <Container className={classes.root} component="section">
      <Typography className={classes.title} variant="h4" marked="center" align="center" component="h2">
        Nuestras Promos
      </Typography>
      <Grid container spacing={2}>
        {!promos.promos.length
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
          promos.promos.map((promo, index) => (            
            promo.publish
              ? <PromoItem key={index} promo={promo} />
              : null
          ))
        }
      </Grid>
    </Container>
  )
}

const mapStateToProps = ({ promos }) => {
  return { promos }
}

export default connect(mapStateToProps, { fetchPromos })(PromoCategories)

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
