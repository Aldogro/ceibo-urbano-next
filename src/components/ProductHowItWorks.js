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
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          Calidad
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <img
                  src="/plant-leaf.svg"
                  alt="plant-leaf"
                  className={classes.image}
                />
                <Typography className={classes.description} variant="h5" align="center">
                  Macetas coloridas y resistentes
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <img
                  src="/sprout-seed.svg"
                  alt="sprout-seed"
                  className={classes.image}
                />
                <Typography className={classes.description} variant="h5" align="center">
                  Envíos a domicilio.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <img
                  src="/cactus.svg"
                  alt="cactus"
                  className={classes.image}
                />
                <Typography className={classes.description} variant="h5" align="center">
                  Materias primas de primera calidad
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
    fontSize: '18px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
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
