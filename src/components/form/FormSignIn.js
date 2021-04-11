import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Snackbar from '@material-ui/core/Snackbar'
import app from '../../firebase/firebase.config'
import { useRouter } from 'next/router'
import { useAuth } from '../../services/Auth.context'

function FormSignIn() {
  const classes = useStyles()
  const router = useRouter()
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [authState, authDispatch] = useAuth()

  const handleCloseSnackbar = () => {
    setOpenErrorSnackbar(false)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      email,
      password,
    })
    
  }
  const onSubmit = async ({ email, password}) => {
    try {
      const response = await app.auth().signInWithEmailAndPassword(email, password)
      authDispatch({
        type: 'setAuthDetails',
        payload: {
          user: response.user,
        },
      })
      router.push('/')
    }
    catch (error) {setOpenErrorSnackbar(true)}
  }

  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.container}>
        <Grid className={classes.container} container justify="center" alignItems="center">
          <Grid item xs={12} md={6} >
            <Paper className={classes.paper}>
              <Typography variant="h4" gutterBottom marked="center" align="center">
                Ingresar
              </Typography>
                <form onSubmit={data => handleOnSubmit(data)} className={classes.form} noValidate>
                  <TextField
                    fullWidth
                    label="E-mail"
                    margin="normal"
                    name="email"
                    required
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                  />
                  <TextField
                    fullWidth
                    required
                    name="password"
                    label="Contraseña"
                    type="password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                  />
                  <Button
                    type="submit"
                    className={classes.button}
                    size="small"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Entrar
                  </Button>
                </form>
              <Typography align="center">
                <Link underline="always" href="/">
                  Volver al inicio
                </Link>
              </Typography>
              <Snackbar
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openErrorSnackbar}
                onClose={handleCloseSnackbar}
                message="El email y/o la contraseña son incorrectos"
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
  },
  paper: {
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(3, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3, 10),
    },
  },
  form: {
    marginTop: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
}))

export default FormSignIn