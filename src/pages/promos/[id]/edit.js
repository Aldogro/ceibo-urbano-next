import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { usePromo, ActionType } from '../../../services/Promo.context'
import { makeStyles } from '@material-ui/core/styles'
import { useSnackbar } from 'notistack'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import MainLayout from '../../../components/MainLayout'
import FormPromo from '../../../components/form/FormPromo'
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

  const getPromo = async (id) => {
    try {
      const snapshot = await getItem({ collection: 'promos', id })
      promoDispatch({
        type: ActionType.SET_PROMO,
        payload: snapshot.data(),
      })
    }
    catch (error) { enqueueSnackbar('Ha ocurrido un error al obtener la promo', { variant: 'error'}) }
  }

  const updatePromo = async (data) => {
    try {
      await editItem({ collection: 'promos', id: router.query.id, data })
      enqueueSnackbar('Se ha editado la promo correctamente', { variant: 'success'})
      router.push('/promos')
    }
    catch (error) { enqueueSnackbar('Ha ocurrido un error', { variant: 'error'}) }
  }

  return (
    <React.Fragment>
      <MainLayout>
        <Container className={classes.container}>
          <Typography className={classes.title} variant="h4">
            Editar Promos
          </Typography>
          {promoState?.promo
            ? <FormPromo onSubmit={(data) => updatePromo(data)} promo={promoState.promo}/>
            : null
          }
        </Container>
      </MainLayout>
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
