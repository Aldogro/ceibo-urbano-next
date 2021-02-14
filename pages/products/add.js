import React from 'react'
import AppAppBar from '../../modules/views/AppAppBar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const AddProductPage = () => {
  return (
    <React.Fragment>
      <AppAppBar />
      <Container maxWidth="sm">
        <Typography paragraph>
          Acá se van a agregar los productos
        </Typography>
      </Container>
    </React.Fragment>
  )
}

export default AddProductPage
