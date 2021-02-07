import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Typography from '../components/Typography'
import TextField from '../components/TextField'

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://material-ui.com/">
        Ceibo Urbano
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  )
}

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
]

export default function AppFooter() {
  const classes = useStyles()

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Grid
              container
              direction="column"
              justify="center"
              align="center"
              className={classes.iconsWrapper}
            >
              <Grid
                container
                className={classes.icons}
                justify="center"
                align="center"
              >
                <a href="https://www.facebook.com/ceibourbano/" target="_blank" rel="noopener noreferrer" className={classes.icon}>
                  <img src="/facebook.svg" alt="Facebook" />
                </a>
                <a href="https://twitter.com/MaterialUI" target="_blank" rel="noopener noreferrer" className={classes.icon}>
                  <img src="/twitter.svg" alt="Twitter" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=+5493416871302" target="_blank" rel="noopener noreferrer" className={classes.icon}>
                  <img src="/whatsapp.svg" alt="Whatsapp" />
                </a>
                <a href="https://www.instagram.com/ceibourbano/" target="_blank" rel="noopener noreferrer" className={classes.icon}>
                  <img src="/instagram.svg" alt="Instagram" />
                </a>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
    marginBottom: theme.spacing(3)
  },
  icon: {
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    '&:hover': {
      opacity: 0.8,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}))