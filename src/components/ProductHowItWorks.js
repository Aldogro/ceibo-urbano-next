import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const ProductHowItWorks = () => {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/ceibo-urbano-iso-logo-transp.svg"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <img
                  src="/sun.svg"
                  alt="sun"
                  className={classes.image}
                />
                <Typography variant="h4" marked="center" className={classes.title} component="h2">
                  Exposición al sol
                </Typography>
                <Typography className={classes.description} variant="body1" align="center">
                  <b>Pleno sol:</b> mínimo 6 hs de sol al día<br/>
                  <b>Media sombra:</b> entre 3 y 6 horas de sol al día<br/>
                  <b>Sombra:</b> entre 3 y 0 horas de sol al día.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <img
                  src="/water-drop.svg"
                  alt="water-drop"
                  className={classes.image}
                />
                <Typography variant="h4" marked="center" className={classes.title} component="h2">
                  Riego
                </Typography>
                <Typography className={classes.description} align="center">
                  <b>Abundante:</b> la tierra debe estar húmeda en todo momento.<br/>
                  <b>Moderado:</b> mojar la tierra sin empapar del todo.<br/>
                  <b>Escaso:</b> dejar secar la parte superior del sustrato entre cada riego.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontWeight: 700,
    fontSize: '18px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
    },
  },
  description: {
    textAlign: 'center',
    fontSize: '14px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    height: '100%',
    position: 'absolute',
    opacity: 1,
    [theme.breakpoints.up('sm')]: {
      height: 'auto',
      top: '-100%',
      width: '100%',
    },
  },
  button: {
    marginTop: theme.spacing(8),
  },
}))

export default ProductHowItWorks
