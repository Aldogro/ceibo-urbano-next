import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '../components/Button'
import Typography from '../components/Typography'
import ProductHeroLayout from './ProductHeroLayout'
import Collapse from '@material-ui/core/Collapse'
import { usePromo, ActionType } from '../../services/Promo.context'

function ProductHero(props) {
  const { classes } = props
  const [promoState, promoDispatch] = usePromo()

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <Typography color="inherit" align="center" variant="h2" marked="center" className={classes.h2}>
        ¡Embellecé tu jardín!
      </Typography>
      <Collapse in={!!promoState.maxDiscount}>
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
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
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
    marginTop: '30px',
    fontSize: '30px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '50px',
    },
  },
  h5: {
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
})

export default withStyles(styles)(ProductHero)
