import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { usePromo, ActionType } from '../../../services/Promo.context'
import { makeStyles } from '@material-ui/core/styles'
import { useSnackbar } from 'notistack'

import AppAppBar from '../../../modules/views/AppAppBar'
import FormPromo from '../../../modules/components/form/FormPromo'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import { getItem, editItem } from '../../../firebase/firebase.config'

const EditPromoPage = () => {
  const [promoState, promoDispatch] = usePromo()
  const classes = useStyles()
  const router = useRouter()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  useEffect(() => {
    const { id } = router.query
    if (router.query.id) {
      getPromo(id)
    }
  }, [router.query])

  const getPromo = (id) => {
    getItem({ collection: 'promos', id })
      .then(snapshot => {
        promoDispatch({
          type: ActionType.SET_PROMO,
          payload: snapshot.data(),
        })
      })
  }

  const updatePromo = (data) => {
    editItem({ collection: 'promos', id: router.query.id, data })
    .then(() => {
      enqueueSnackbar('Se ha editado la promo correctamente', { variant: 'success'})
      router.push('/promos')
    })
    .catch((error) => enqueueSnackbar('Ha ocurrido un error', { variant: 'error'}))
  }

  return (
    <React.Fragment>
      <AppAppBar />
      <Container className={classes.container}>
        <Typography className={classes.title} variant="h4">
          Editar Promos
        </Typography>
        {promoState?.promo
          ? <FormPromo onSubmit={(data) => updatePromo(data)} promo={promoState.promo}/>
          : null
        }
      </Container>
    </React.Fragment>
  )
}

export default EditPromoPage

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing('70px', 'auto'),
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
