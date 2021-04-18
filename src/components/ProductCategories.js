import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Skeleton from '@material-ui/lab/Skeleton'

import Grid from '@material-ui/core/Grid'
import ProductItem from './ProductItem'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

import { connect } from 'react-redux'
import { fetchProducts } from '../actions/products'

import { orderByOptions, productTypeOptions } from '../utils/catalog'

const ProductCategories = ({ fetchProducts, products }) => {
  const classes = useStyles()
  const [type, setType] = useState('all')
  const [orderBy, setOrderBy] = useState(['price', 'asc'])

  const skeletons = ['a', 'b', 'c']

  useEffect(() => {
    fetchProducts(orderBy)
  }, [orderBy])

  return (
    <Container className={classes.root} component="section">
      <Typography className={classes.title} variant="h4" marked="center" align="center" component="h2">
        ¡Aprovechá todos nuestros productos!
      </Typography>
      <Grid container className={classes.filters} spacing={3} cols={1}>
        <Grid item xs={12} lg={4}>
          <InputLabel id="label-filter-by-type" className={classes.filterLabel}>Filtrar por tipo</InputLabel>
          <Select
            className={classes.fullWidth}
            labelId="label-filter-by-type"
            id="filter-by-type-select"
            value={type}
            onChange={({ target }) => setType(target.value)}
          >
            {productTypeOptions.map((type, index) => (
              <MenuItem key={index} value={type.key}>
                {type.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} lg={4}>
          <InputLabel id="label-order-by" className={classes.filterLabel}>Ordenar por</InputLabel>
          <Select
            className={classes.fullWidth}
            labelId="label-order-by"
            id="order-by-select"
            value={orderBy}
            onChange={({ target}) => setOrderBy(target.value.split(','))}
          >
            {orderByOptions.map((orderBy, index) => (
              <MenuItem key={index} value={orderBy.key}>
                {orderBy.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {!products.products.length
          ?
          skeletons.map((skeleton, index) => (
            <Grid item xs={12} lg={4} key={index}>
              <Skeleton variant="rect" width={'100%'} height={118} />
              <Skeleton variant="text" />
              <Skeleton width="60%" />
              <br/>
              <Skeleton />
            </Grid>
          ))
          :
          products.products.map((product) => (
            product.publish && (type !== 'all' ? product.type === type : true)
              ?
              <ProductItem product={product} key={product.id} />
              : null
          ))
        }
        
      </Grid>
    </Container>
  )
}

const mapStateToProps = ({ products }) => {
  return { products }
}

export default connect(mapStateToProps, { fetchProducts })(ProductCategories)

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  fullWidth: {
    width: '100%',
  },
  title: {
    fontSize: '18px',
    fontWeight: 700,
    [theme.breakpoints.up('sm')]: {
      fontSize: '30px',
    },
    marginBottom: theme.spacing(4),
  },
  filters: {
    margin: theme.spacing(2, 0),
  },
  filterLabel: {
    marginBottom: theme.spacing(1),
  }
}))
