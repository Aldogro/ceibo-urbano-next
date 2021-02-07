import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MuiAppBar from '@material-ui/core/AppBar'

function AppBar(props) {
  return <MuiAppBar elevation={0} position="static" {...props} />
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = (theme) => ({
  root: {
    color: theme.palette.common.white,
  },
})

export default withStyles(styles)(AppBar)
