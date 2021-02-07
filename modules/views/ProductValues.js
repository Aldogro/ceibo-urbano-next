import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '../components/Typography'

function ProductValues(props) {
  const { classes } = props

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/color-icon.svg"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/cactus.svg"
                alt="cactus"
              />
              <Typography variant="h6" className={classes.title}>
                Semillas
              </Typography>
              <Typography variant="h5">
                Sabemos lo importante que es tener semillas de buena calidad
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/plant-leaf.svg"
                alt="plant-leaf"
              />
              <Typography variant="h6" className={classes.title}>
                Fertilizantes naturales
              </Typography>
              <Typography variant="h5">
                No utilizamos productos químicos industriales. Todos nuestros fertilizantes son orgánicos
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/sprout-seed.svg"
                alt="sprout-seed"
              />
              <Typography variant="h6" className={classes.title}>
                Herbicidas y plaguicidas
              </Typography>
              <Typography variant="h5">
                Todo en nuestra huerta es orgánico. Incluso los plaguicidas y herbicidas.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
})

export default withStyles(styles)(ProductValues)
