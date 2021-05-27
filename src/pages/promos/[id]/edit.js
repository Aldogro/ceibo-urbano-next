import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import { useSnackbar } from 'notistack'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import MainLayout from '../../../components/MainLayout'
import FormPromo from '../../../components/form/FormPromo'
import { editItem } from '../../../firebase/firebase.config'

import { connect } from 'react-redux'
import { fetchPromo } from '../../../redux/actions/promos'

const EditPromoPage = ({ promos, fetchPromo }) => {
  const classes = useStyles()
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    const { id } = router.query
    if (router.query.id) getPromo(id)
  }, [router.query])

  const getPromo = (id) => {
    try { fetchPromo(id) }
    catch(error) { enqueueSnackbar('Ha ocurrido un error', { variant: 'error'}) }
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
          {promos?.promo
            ? <FormPromo onSubmit={(data) => updatePromo(data)} promo={promos.promo}/>
            : null
          }
        </Container>
      </MainLayout>
    </React.Fragment>
  )
}

const mapStateToProps = ({ promos }) => {
  return { promos }
}

export default connect(mapStateToProps, { fetchPromo })(EditPromoPage)

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
