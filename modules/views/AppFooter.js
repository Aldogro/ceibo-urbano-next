import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Typography from '../components/Typography'

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function Copyright() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div className={classes.subtitle}>
        {'© '}
        <Link href="/">
          Ceibo Urbano
        </Link>{' '}
        {new Date().getFullYear()}
      </div>
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
            <Grid className={classes.textCenter}  item>
              <img height="70" src="/ceibo-urbano-iso-logo.svg" alt="footer logo" />
              <p className={classes.title}>CEIBO URBANO</p>
              <p className={classes.subtitle}>Vivero</p>
            </Grid>
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
                  <FacebookIcon className={classes.icon} />
                </a>
                <a href="https://api.whatsapp.com/send?phone=+5493416871302" target="_blank" rel="noopener noreferrer" className={classes.icon}>
                  <WhatsAppIcon className={classes.icon} />
                </a>
                <a href="https://www.instagram.com/ceibourbano/" target="_blank" rel="noopener noreferrer" className={classes.icon}>
                  <InstagramIcon className={classes.icon} />
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
    color: theme.palette.primary.main,
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
  subtitle: {
    fontSize: 16,
    color: theme.palette.primary.main,
    marginTop: 0,
  },
  textCenter: {
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    color: theme.palette.primary.main,
    marginBottom: 0,
  }
}))