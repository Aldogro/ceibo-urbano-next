import React from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Stepper from '../components/Stepper'

const ProductSmokingHero = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root} component="section">
      <Button className={classes.button}>
        <Typography className={classes.buttonText} variant="h4" component="span">
          ¿Cómo comprar?
        </Typography>
      </Button>
      <Typography variant="subtitle1" className={classes.link}>
        No necesitás crear una cuenta, registrarte, o ingresar datos personales.
      </Typography>
      <Stepper />
    </Container>
  )
}

export default ProductSmokingHero

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),
    backgroundImage: '/ceibo-urbano-iso-logo-transp.svg',
  },
  button: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5),
  },
  buttonText: {
    fontSize: '14px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    fontSize: '14px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '25px',
    },
    color: theme.palette.primary.main,
  },
  colorIcon: {
    width: 60,
  },
}))
