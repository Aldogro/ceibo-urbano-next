import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useCart, ActionType as CartActionType } from '../../services/Cart.context'

import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Chip from '@material-ui/core/Chip'

import Cart from '../components/Cart'

import HomeIcon from '@material-ui/icons/Home'
import ListIcon from '@material-ui/icons/List'
import LoyaltyIcon from '@material-ui/icons/Loyalty'
import ClearIcon from '@material-ui/icons/Clear'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import app from '../../firebase/firebase.config'
import { useAuth } from '../../services/Auth.context'

export default function PersistentDrawerLeft({ children }) {
  const classes = useStyles()
  const theme = useTheme()
  const [auth, authDispatch] = useAuth()
  const [cartState, cartDispatch] = useCart()
  const [open, setOpen] = React.useState(false)
  const [openCart, setOpenCart] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleCartOpen = () => {
    setOpenCart(true)
  }
  
  const handleCartClose = () => {
    setOpenCart(false)
  }

  const handleLogout = () => {
    app.auth().signOut()
    authDispatch({ type: 'removeAuthDetails' })
  }

  const getCartItems = () => {
    let temp = 0
    cartState.items.forEach(item => temp += item.amount)
    return temp
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.bg}>
          {
            auth.user.email
            ?
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            :
            null
          }
          <img src="/ceibo-urbano-iso-logo.svg" height="40" alt="logo" />
          <Typography className={classes.brand} variant="h6" noWrap>
            Ceibo Urbano
          </Typography>
          { auth.user.email
            ?
            <div className={classes.user}>
              <Typography noWrap className={classes.userName}>
                {auth.user.email}
              </Typography>
              <IconButton className={classes.logout} onClick={handleLogout}>
                <ClearIcon />
              </IconButton>
            </ div>
            :
            null
          }
          <IconButton className={classes.cartButton} aria-label="open drawer" onClick={handleCartOpen}>
            <div className={classes.cartIcon}>
              <Chip color="primary" label={getCartItems()} />
              <ShoppingCartIcon />
            </div>
          </IconButton>
        </Toolbar>
      </AppBar>
      {
        auth.user.email
        ?
        <Drawer
          className={classes.drawer}
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerClose}
        >
          <div className={classes.drawerHeader}>
            <img className={classes.drawerBrand} src="/ceibo-urbano-logo-horizontal.svg" />
            <IconButton onClick={handleDrawerClose}>
              <ClearIcon />
            </IconButton>
          </div>
          <List>
            <ListItem className={classes.listItem} component="a" href="/">
              <ListItemIcon><HomeIcon className={classes.listItem} /></ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItem>
            <ListItem className={classes.listItem} component="a" href="/products">
              <ListItemIcon><ListIcon className={classes.listItem} /></ListItemIcon>
              <ListItemText primary="Productos" />
            </ListItem>
            <ListItem className={classes.listItem} component="a" href="/promos">
              <ListItemIcon><LoyaltyIcon className={classes.listItem} /></ListItemIcon>
              <ListItemText primary="Promos" />
            </ListItem>
          </List>
        </Drawer>
        : null
      }
      <Drawer
          className={classes.cart}
          anchor="right"
          open={openCart}
          classes={{
            paper: classes.cart,
          }}
          onClose={handleCartClose}
        >
          <div className={classes.cartHeader}>
            <IconButton onClick={handleCartClose}>
              <ClearIcon />
            </IconButton>
            <div className={classes.cartHeaderTitle}>
              Carrito de compras
              <ShoppingCartIcon />
            </div>
          </div>
          <div className={classes.cartBody}>
            <Cart />
          </div>
        </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  )
}

const drawerWidth = 300

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: theme.palette.secondary.main,
    height: 100,
    marginBottom: 0,
  },
  brand: {
    marginLeft: 16,
    color: theme.palette.primary.main,
  },
  mainColor: {
    color: theme.palette.primary.main,
  },
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
    },
    flexShrink: 0,
  },
  drawerBrand: {
    height: 40,
    textAlign: 'center',
    marginLeft: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      height: 40,
    },
  },
  drawerPaper: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
    },
  },
  cartIcon: {
    position: 'relative',
  },
  cart: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '500px',
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    minHeight: '100px',
    justifyContent: 'space-between',
  },
  cartHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  cartHeaderTitle: {
    color: theme.palette.primary.main,
    fontSize: '1.3rem',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
  },
  cartBody: {
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    paddingTop: 0,
    paddingBottom: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  gotoLogin: {
    marginLeft: 'auto',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main,
  },
  cartButton: {
    color: theme.palette.primary.main,
    marginLeft: 'auto',
  },
  listItem: {
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main,
    margin: theme.spacing(0, 'auto'),
  },
  userName: {
    fontSize: 10,
  }
}))
