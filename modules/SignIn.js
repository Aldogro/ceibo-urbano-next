import withRoot from './withRoot'
// --- Post bootstrap -----
import React from 'react'
import { Field, Form } from 'react-final-form'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Typography from './components/Typography'
import AppForm from './views/AppForm'
import { email, required } from './components/form/validation'
import RFTextField from './components/form/RFTextField'
import FormButton from './components/form/FormButton'
import { firebase } from '../firebase/client'
import { useRouter } from 'next/router'

function SignIn() {
  const classes = useStyles()
  const router = useRouter()
  const [sent, setSent] = React.useState(false)

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

  const onSubmit = ({ email, password}) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
      console.log(response)
      router.push('/')
    })
  }

  return (
    <React.Fragment>
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
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
                size="large"
              />
              <Field
                fullWidth
                size="large"
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
                size="large"
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
    </React.Fragment>
  )
}

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}))

export default withRoot(SignIn)