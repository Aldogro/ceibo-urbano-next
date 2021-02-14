import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from '../../services/Auth.context'
import { useRouter } from 'next/router'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import AppAppBar from '../../modules/views/AppAppBar'
import Container from '@material-ui/core/Container'

const items = [
  {
    id: 1,
    name: 'Planta 1',
    description: 'planta para interiores muy linda',
    picture: '/plant-1.jpg',
    price: 123,
    cols: 2,
  },
  {
    id: 2,
    name: 'Planta 1',
    description: 'planta para interiores muy linda',
    picture: '/plant-2.jpg',
    price: 123,
  },
  {
    id: 3,
    name: 'Planta 1',
    description: 'planta para interiores muy linda',
    picture: '/plant-3.jpg',
    price: 123,
  },
  {
    id: 4,
    name: 'Planta 1',
    description: 'planta para interiores muy linda',
    picture: '/plant-4.jpg',
    price: 123,
  },
  {
    id: 5,
    name: 'Planta 1',
    description: 'planta para interiores muy linda',
    picture: '/plant-5.jpg',
    price: 123,
  },
  {
    id: 6,
    name: 'Planta 1',
    description: 'planta para interiores muy linda',
    picture: '/plant-5.jpg',
    price: 123,
  },
  {
    id: 7,
    name: 'Planta 1',
    description: 'planta para interiores muy linda',
    picture: '/plant-5.jpg',
    price: 123,
  },
  {
    id: 8,
    name: 'Planta 1',
    description: 'planta para interiores muy linda',
    picture: '/plant-5.jpg',
    price: 123,
  },
  {
    id: 9,
    name: 'Planta 1',
    description: 'planta para interiores muy linda',
    picture: '/plant-5.jpg',
    price: 123,
    cols: 2,
  },
  {
    id: 10,
    name: 'Planta 1',
    description: 'planta para interiores muy linda',
    picture: '/plant-5.jpg',
    price: 123,
  },
  {
    id: 11,
    name: 'Planta 1',
    description: 'planta para interiores muy linda',
    picture: '/plant-5.jpg',
    price: 123,
  },
]

const ListProductPage = () => {
  const classes = useStyles();
  const [auth, authDispatch] = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!auth.user.email) {
      router.push('/login')
    }
  }, [])

  return (
    <React.Fragment>
      <AppAppBar />
      <Container maxWidth="lg">
        {auth.user.email ?
          <div className={classes.root}>
            <GridList cellHeight={200} className={classes.gridList} cols={3}>
              <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
                <ListSubheader component="div">Listado de productos</ListSubheader>
              </GridListTile>
              {items.map((tile) => (
                <GridListTile key={tile.id} cols={tile.cols}>
                  <img src={tile.picture} alt={tile.name} />
                  <GridListTileBar
                    title={`${tile.name} - $${tile.price}`}
                    subtitle={<span>{tile.description}</span>}
                    actionIcon={
                      <IconButton
                        aria-label={`info about ${tile.title}`}
                        className={classes.icon}
                        onClick={() => { router.push(`/products/${tile.id}/edit`) }}
                      >
                        <EditIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
          : <div />
        }
      </Container>
    </React.Fragment>
  )
}

export default ListProductPage

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1200,
    height: 'auto',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));