import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/core/styles'
import Typography from '../components/Typography'
import Stepper from '../components/Stepper'

function ProductSmokingHero(props) {
  const { classes } = props

  return (
    <Container className={classes.root} component="section">
      <Button className={classes.button}>
        <Typography className={classes.buttonText} variant="h4" component="span">
          ¿Cómo comprar?
        </Typography>
      </Button>
      <Typography variant="subtitle1" className={classes.link}>
        No necesitás crear una cuenta, ni registrarte, o ingresar datos personales.
      </Typography>
      <Stepper />
    </Container>
  )
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = (theme) => ({
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
    fontSize: '20px',
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    fontSize: '25px',
    color: theme.palette.primary.main,
  },
  colorIcon: {
    width: 60,
  },
})

export default withStyles(styles)(ProductSmokingHero)
