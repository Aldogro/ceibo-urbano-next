import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import AppAppBar from '../../../modules/views/AppAppBar'
import FormPromo from '../../../modules/components/form/FormPromo'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { usePromo, ActionType } from '../../../services/Promo.context'
import app from '../../../firebase/firebase.config'

const EditPromoPage = () => {
  const [promoState, promoDispatch] = usePromo()
  const classes = useStyles()
  const router = useRouter()

  useEffect(() => {
    const { id } = router.query
    if (router.query.id) {
      app.firestore().collection('promos').doc(id).get()
        .then(snapshot => {
          promoDispatch({
            type: ActionType.SET_PROMO,
            payload: snapshot.data(),
          })
        })
    }
  }, [router.query])

  const updatePromo = (data) => {
    app.firestore().collection('promos').doc(router.query.id).update(data)
      .then(() => router.push('/promos')) // FIX ME agregar toast que avise que se editó correctamente
      .catch(error => console.log(error)) // toast que avise que algo salió mal
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
    marginTop: '2rem',
    marginBottom: '2rem',
  },
}))
