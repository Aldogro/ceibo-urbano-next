import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Collapse from '@material-ui/core/Collapse'
import { usePromo, ActionType } from '../services/Promo.context'

const ProductHero = () => {
  const classes = useStyles()
  const [promoState, promoDispatch] = usePromo()

  return (
    <div className={classes.background}>
      <div className={classes.backdrop}></div>
      <Container className={classes.container}>
        <Typography color="inherit" align="center" variant="h2" marked="center" className={classes.h2}>
          ¡Embellecé tu jardín!
        </Typography>
        <Collapse className={classes.collapse} in={!!promoState.maxDiscount}>
          <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
            {promoState.maxDiscount > 0 ? `Disfrutá de nuestras ofertas ahorrando hasta un ${promoState.maxDiscount}%` : ''}
          </Typography>
        </Collapse>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          component="a"
          href="#footer-ceibo"
        >
          Comunicate con nosotros
        </Button>
      </Container>
    </div>
  )
}

const backgroundImage = '/greenhouse.jpg'

export default ProductHero

const useStyles = makeStyles((theme) => ({
  background: {
    position: 'relative',
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  backdrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: '0.5',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(20, 0),
  },
  button: {
    minWidth: 200,
    textAlign: 'center',
    fontSize: '12px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },
  },
  h2: {
    zIndex: 1,
    color: 'white',
    fontSize: '30px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '50px',
    },
  },
  collapse: {
    zIndex: 1,
  },
  h5: {
    color: 'white',
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    fontSize: '20px',
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
      fontSize: '35px',
    },
  },
  more: {
    marginTop: theme.spacing(5),
  },
}))
