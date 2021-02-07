import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '../components/Button'
import Typography from '../components/Typography'
import ProductHeroLayout from './ProductHeroLayout'
import { firebase } from '../../firebase/client'

function ProductHero(props) {
  const { classes } = props

  const handleLogin = () => {
    // firebase.auth().signInWithEmailAndPassword('email', 'password').then(response => console.log(response))
  }

  const checkLogin = () => {
    console.log(firebase.auth().currentUser)
  }

  const handleLogout = () => {
    firebase.auth().signOut()
  }

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        ¡Embellecé tu jardín!
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Disfrutá de nuestras ofertas ahorrando hasta un 50%
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        onClick={handleLogin}
      >
        Comunicate con nosotros
      </Button>

      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        onClick={checkLogin}
      >
        chequear que está logueado
      </Button>

      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </ProductHeroLayout>
  )
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
}

const backgroundImage = '/greenhouse.jpg'

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
})

export default withStyles(styles)(ProductHero)
