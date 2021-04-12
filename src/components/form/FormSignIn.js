import React, { useEffect, useState } from 'react'
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
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'

function FormSignIn() {
  const classes = useStyles()
  const router = useRouter()
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(app.auth())

  useEffect(() => {
    if (localStorage.getItem('cu-user-info')) router.push('/')
  }, [])

  useEffect(() => {
    if (user) {
      localStorage.setItem('cu-user-info', JSON.stringify(user))
      router.push('/')
    }
  }, [user])

  useEffect(() => {
    if (error) setOpenErrorSnackbar(true)
  }, [error])

  const handleCloseSnackbar = () => {
    setOpenErrorSnackbar(false)
  }

  const handleOnSubmit = () => {
    signInWithEmailAndPassword(email, password)
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
                <form className={classes.form} noValidate>
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
                    className={classes.button}
                    size="small"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={loading}
                    onClick={() => handleOnSubmit()}
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