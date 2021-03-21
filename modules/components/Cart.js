import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useCart, ActionType } from '../../services/Cart.context'
import Button from '@material-ui/core/Button'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import Typography from '../components/Typography'

const Cart = () => {
  const classes = useStyles();
  const [cartState, cartDispatch] = useCart()
  return (
    <div className={classes.alignCenter}>
      { cartState.items.length > 0
        ? cartState.items.map((item) => {
          return (
            <div className={classes.cartItem} key={item.id}>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <input type="number" className={classes.input} />
            </div>
          )
        })
        : 'El carrito está vacío'
      }
      <Typography variant="h4" gutterBottom marked="center" align="center">
        Total: $5555
      </Typography>
      <Button color="primary" variant="contained" className={classes.send}>
        Hacer pedido
        <WhatsAppIcon className={classes.wapp} />
      </Button>
    </div>
  )
}

export default Cart

const useStyles = makeStyles((theme) => ({
  alignCenter: {
    textAlign: 'center',
    fontSize: 14,
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '25%',
  },
  send: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  wapp: {
    marginLeft: 5,
  }
}));