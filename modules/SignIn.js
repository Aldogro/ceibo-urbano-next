import withRoot from './withRoot'
// --- Post bootstrap -----
import React, { useState } from 'react'
import { Field, Form } from 'react-final-form'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Typography from './components/Typography'
import AppForm from './views/AppForm'
import { email, required } from './components/form/validation'
import RFTextField from './components/form/RFTextField'
import FormButton from './components/form/FormButton'
import Snackbar from '@material-ui/core/Snackbar'
import { firebaseAuth } from '../firebase/firebase.config'
import { useRouter } from 'next/router'
import { useAuth } from '../services/Auth.context'

function SignIn() {
  const classes = useStyles()
  const router = useRouter()
  const [sent, setSent] = React.useState(false)
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false)
  const [authState, authDispatch] = useAuth()

  const validate = (values) => {
    const errors = required(['email', 'password'], values)

    if (!errors.email) {
      const emailError = email(values.email, values)
      if (emailError) {
        errors.email = email(values.email, values)
      }
    }

    return errors
  }

  const handleCloseSnackbar = () => {
    setOpenErrorSnackbar(false)
  }

  const onSubmit = ({ email, password}) => {
    firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(response => {
        authDispatch({
          type: 'setAuthDetails',
          payload: {
            user: response.user,
          },
        })
        router.push('/')
      })
      .catch(error => setOpenErrorSnackbar(true))
  }

  return (
    <React.Fragment>
      <AppForm>
        <React.Fragment>
          <Typography variant="h4" gutterBottom marked="center" align="center">
            Ingresar
          </Typography>
        </React.Fragment>
        <Form onSubmit={onSubmit} subscription={{ submitting: true }} validate={validate}>
          {({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="E-mail"
                margin="normal"
                name="email"
                required
                size="small"
              />
              <Field
                fullWidth
                size="small"
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="Contraseña"
                type="password"
                margin="normal"
              />
              <FormButton
                className={classes.button}
                disabled={submitting || sent}
                size="small"
                color="secondary"
                fullWidth
              >
                {submitting || sent ? 'Procesando…' : 'Entrar'}
              </FormButton>
            </form>
          )}
        </Form>
        <Typography align="center">
          <Link underline="always" href="/">
            Volver al inicio
          </Link>
        </Typography>
      </AppForm>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={openErrorSnackbar}
        onClose={handleCloseSnackbar}
        message="El email y/o la contraseña son incorrectos"
      />
    </React.Fragment>
  )
}

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
}))

export default withRoot(SignIn)