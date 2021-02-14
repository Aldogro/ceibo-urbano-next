import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const FormProduct = () => {
  const classes = useStyles()

  const onSubmit = (form) => {
    form.preventDefault()
    console.log(form)
  }

  return (
    <React.Fragment>
        <form className={classes.root} onSubmit={onSubmit} noValidate autoComplete="off">
          <Grid container spacing={3} cols={2}>
            <Grid item xs={12}>
              <TextField className={classes.fullWidth} id="standard-basic" label="Standard" />
            </Grid>
            <Grid item xs={6}>
              <TextField className={classes.fullWidth} id="standard-basic" label="Standard" />
            </Grid>
            <Grid item xs={6}>
              <TextField className={classes.fullWidth} id="standard-basic" label="Standard" />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button className={classes.floatRight} variant="contained" type="submit" color="primary">
              Guardar
            </Button>
            <Button className={classes.floatRight} variant="contained" color="secondary">
              Cancelar
            </Button>
          </Grid>
        </form>
    </React.Fragment>
  )
}

export default FormProduct

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  fullWidth: {
    width: '100%',
  },
  floatRight: {
    minWidth: 120,
    float: 'right',
    marginLeft: 16,
  }
}))