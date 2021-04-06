import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useAuth } from '../../services/Auth.context'
import { useConfig } from '../../services/Config.context'
import { useSnackbar } from 'notistack'

import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { DropzoneArea } from 'material-ui-dropzone'

import AppAppBar from '../../modules/views/AppAppBar'

import app, { editItem } from '../../firebase/firebase.config'

const ListProductPage = () => {
  const classes = useStyles()
  const [auth, authDispatch] = useAuth()
  const [config, configDispatch] = useConfig()
  const [settings, setSettings] = useState({ mainImage: '', icon: '', phone: '' })
  const [loading, setLoading] = useState({ icon: false })

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  useEffect(() => {
    if (!auth.user.email) {
      router.push('/login')
    }
  }, [])
  
  useEffect(() => {
    setSettings({
      mainImage: config.mainImage,
      icon: config.icon,
      phone: config.phone,
    })
  }, [config])

  const onIconChanges = (files) => {
    if (files.length) {
      setSettings({ ...settings, icon: '' })
      setLoading({ ...loading, icon: true })
      app.storage().ref().child('/images').child(files[0].name).put(files[0])
        .then(snapshot => app.storage().ref(snapshot.metadata.fullPath).getDownloadURL())
        .then(url => {
          setLoading({ ...loading, icon: false })
          setSettings({ ...settings, icon: url })
        })
    }
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    editItem({ collection: 'settings', id: 'settings', data: settings })
      .then(() => {
        localStorage.setItem('ceibo-urbano-settings', JSON.stringify(settings))
        enqueueSnackbar('Se ha editado la configuración', { variant: 'success'})
      })
      .catch((error) => enqueueSnackbar('Ha ocurrido un error', { variant: 'error'}))
  }


  return (
    <React.Fragment>
      <AppAppBar />
      <Container maxWidth="lg" className={classes.marginTop}>
        <form className={classes.stripped} onSubmit={(data) => handleOnSubmit(data)} noValidate autoComplete="off">
          <Grid container spacing={3} cols={1}>
            <Grid item xs={12} lg={9}>
              <TextField
                className={classes.fullWidth}
                id="Teléfono"
                label="Teléfono (sin guiones, 0 ni 15. Ej: 3413216549)"
                value={settings.phone}
                onChange={({ target }) => setSettings({ ...settings, phone: target.value })}
              />
            </Grid>
            <Grid item xs={12} lg={3} className={classes.actions}>
              <Button
                className={classes.fullWidth}
                variant="contained"
                disabled={settings.phone === config.phone || !settings.phone}
                type="submit"
                color="primary"
              >
                Guardar
              </Button>
            </Grid>
          </Grid>
        </form>
        <form className={classes.stripped} onSubmit={(data) => handleOnSubmit(data)} noValidate autoComplete="off">
          <Grid container spacing={3} cols={1}>
            <Grid item xs={12} lg={6}>
              <DropzoneArea
                acceptedFiles={['image/*']}
                filesLimit={1}
                maxFileSize={10000000}
                dropzoneText="Ícono"
                onChange={(files) => onIconChanges(files)}
                onDelete={() => setSettings({ ...settings, icon: ''})}
              />
            </Grid>
            <Grid className={classes.imageContainer} item xs={12} lg={3}>
            {
                !settings.icon && loading.icon
                ? <CircularProgress />
                : <img src={settings.icon} alt="logo" width="100%" />
              }
            </Grid>
            <Grid item xs={12} lg={3} className={classes.actions}>
              <Button
                className={classes.fullWidth}
                variant="contained"
                disabled={settings.icon === config.icon || !settings.icon}
                type="submit"
                color="primary"
              >
                Guardar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  )
}

export default ListProductPage

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
  imageContainer: {
    marginTop: 'auto',
    marginBottom: 'auto',
    textAlign: 'center'
  },
  actions: {
    margin: theme.spacing('20px', 'auto'),
    display: 'flex',
    alignItems: 'flex-end',
  },
}));
