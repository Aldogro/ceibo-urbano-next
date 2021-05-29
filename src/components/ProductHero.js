import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Collapse from '@material-ui/core/Collapse'

import { connect } from 'react-redux'

const ProductHero = ({ promos }) => {
  const classes = useStyles()

  const getMaxDiscount = () => {
    let temp = 0
    promos.promos.forEach(promo => {
      if (promo.discount < temp) { temp = promo.discount }
    })
    return temp * - 1
  }

  return (
    <div className={classes.background}>
      <div className={classes.backdrop}></div>
      <Container className={classes.container}>
        <Typography color="inherit" align="center" variant="h2" marked="center" className={classes.h2}>
          Colores y Aromas para vos
        </Typography>
        <Collapse className={classes.collapse} in={!!getMaxDiscount()}>
          <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
            ¡Aprovecha nuestras promos!
            {/* {getMaxDiscount() > 0 ? `Disfrutá de nuestras ofertas ahorrando hasta un ${getMaxDiscount()}%` : ''} */}
          </Typography>
        </Collapse>
      </Container>
    </div>
  )
}

const backgroundImageDesktop = '/greenhouse-desktop.jpeg'
const backgroundImageMobile = '/greenhouse-mobile.jpeg'

const mapStateToProps = ({ promos }) => {
  return { promos }
}

export default connect(mapStateToProps)(ProductHero)

const useStyles = makeStyles((theme) => ({
  background: {
    position: 'relative',
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundImage: `url(${backgroundImageMobile})`,
    backgroundPosition: 'center -30px',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    [theme.breakpoints.up('sm')]: {
      backgroundImage: `url(${backgroundImageDesktop})`,
      backgroundPosition: 'center 80px',
      backgroundSize: 'cover',
    },
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
    padding: theme.spacing(10, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(20, 0),
    },
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
