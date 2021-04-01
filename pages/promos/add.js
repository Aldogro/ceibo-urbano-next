import React from 'react'

import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import { useSnackbar } from 'notistack'

import AppAppBar from '../../modules/views/AppAppBar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import FormPromo from '../../modules/components/form/FormPromo'

import { createItem } from '../../firebase/firebase.config'

const AddPromoPage = () => {
  const router = useRouter()
  const classes = useStyles()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const createPromo = (data) => {
    createItem({ collection: 'promos', data })
      .then(() => {
        enqueueSnackbar('Se ha creado la promo correctamente', { variant: 'success'})
        router.push('/promos')
      })
      .catch((error) => enqueueSnackbar('Ha ocurrido un error', { variant: 'error'}))
  }

  return (
    <React.Fragment>
      <AppAppBar />
      <Container maxWidth="lg" className={classes.root}>
        <Typography className={classes.title} variant="h4">
          Agregar Promo
        </Typography>
        <FormPromo onSubmit={(data) => createPromo(data)} />
      </Container>
    </React.Fragment>
  )
}

export default AddPromoPage

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '70px',
    marginBottom: '90px',
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
