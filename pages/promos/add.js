import React from 'react'
import { useRouter } from 'next/router'
import AppAppBar from '../../modules/views/AppAppBar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import FormPromo from '../../modules/components/form/FormPromo'
import { makeStyles } from '@material-ui/core/styles'
import { usePromo, ActionType } from '../../services/Promo.context'

const AddPromoPage = () => {
  const router = useRouter()
  const [promoState, promoDispatch] = usePromo('')
  const classes = useStyles()

  const createPromo = (data) => {
    promoDispatch({
      type: ActionType.CREATE_PROMO,
      payload: data
    })
    router.push('/promos')
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
    marginTop: '2rem',
    marginBottom: '2rem',
  },
}))
