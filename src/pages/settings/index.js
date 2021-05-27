import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import MainLayout from '../../components/MainLayout'

import app, { editItem } from '../../firebase/firebase.config'
import { useAuthState } from 'react-firebase-hooks/auth'

import { connect } from 'react-redux'
import { setSettings } from '../../redux/actions/settings'

const ListProductPage = ({ settings, setSettings }) => {
  const classes = useStyles()
  const router = useRouter()
  const [user] = useAuthState(app.auth())
  const [phone, setPhone] = useState()

  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [])
  
  useEffect(() => {
    getSettings()
  }, [])
  
  const getSettings = () => {
    try {
      setSettings()
      setPhone(settings.settings.phone)
    }
    catch(error) { enqueueSnackbar('Ocurrió un error al intentar obtener las configuraciones', { variant: 'error'}) }
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault()
    try {
      await editItem({ collection: 'settings', id: 'settings', data: { phone } })
      enqueueSnackbar('Se ha editado la configuración', { variant: 'success'})
      getSettings()
      setPhone(phone)
    }
    catch (error) { enqueueSnackbar('Ha ocurrido un error', { variant: 'error'}) }
  }

  return (
    <React.Fragment>
      <MainLayout>
        <Container maxWidth="lg" className={classes.marginTop}>
          <Typography className={classes.title} variant="h4">
            Configuraciones
          </Typography>
          { user
            ? <form className={classes.stripped} onSubmit={(data) => handleOnSubmit(data)} noValidate autoComplete="off">
              <Grid container spacing={3} cols={1}>
                <Grid item xs={12} lg={9}>
                  <TextField
                    className={classes.fullWidth}
                    error={!settings?.settings?.phone?.length}
                    id="Teléfono"
                    helperText="(sin guiones, 0 ni 15. Ej: 3413216549)"
                    label="Teléfono"
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}
                  />
                </Grid>
                <Grid item xs={12} lg={3} className={classes.actions}>
                  <Button
                    className={classes.fullWidth}
                    variant="contained"
                    type="submit"
                    color="primary"
                  >
                    Guardar
                  </Button>
                </Grid>
              </Grid>
            </form>
            : null
          }
        </Container>
      </MainLayout>
    </React.Fragment>
  )
}

const mapStateToProps = ({ settings }) => {
  return { settings }
}

export default connect(mapStateToProps, { setSettings })(ListProductPage)

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  marginTop: {
    margin: theme.spacing('70px', 'auto'),
    display: 'grid',
    gap: theme.spacing(4),
    flexDirection: 'column',
  },
  stripped: {
    padding: theme.spacing(3),
    '&:nth-child(odd)': {
      background: theme.palette.lightGreen.main,
    },
  },
  fullWidth: {
    width: '100%',
    maxHeigth: '100%',
    objectFit: 'contain',
  },
  actions: {
    margin: theme.spacing('20px', 'auto'),
    display: 'flex',
    alignItems: 'flex-end',
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
