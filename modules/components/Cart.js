import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { useCart, ActionType } from '../../services/Cart.context'
import { useSnackbar } from 'notistack'
import { useConfig } from '../../services/Config.context'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import Typography from '../components/Typography'
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

const Cart = () => {
  const classes = useStyles();
  const [cartState, cartDispatch] = useCart()
  const [config, configDispatch] = useConfig()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const onAmountAdd = (item) => {
    cartDispatch({
      type: ActionType.ADD_ITEM,
      payload: item,
    })
  }

  const onAmountRemove = (item) => {
    cartDispatch({
      type: ActionType.REMOVE_AMOUNT,
      payload: item,
    })
  }

  const onRemoveItem = (item) => {
    cartDispatch({
      type: ActionType.REMOVE_ITEM,
      payload: item,
    })
  }

  const getTotal = () => {
    let total = 0
    cartState.items.forEach(item => {
      total += item.amount * item.price
    })
    return total
  }

  const clearCart = () => {
    cartDispatch({
      type: ActionType.CLEAR_CART,
    })
  }

  const generateText = (br) => {
    let temp = `¡Hola!, mi pedido:${br}${br}`
    cartState.items.forEach(item => {
      temp += `${item.name}: $${item.price} x${item.amount} - $${item.price * item.amount}${br}`
    })
    temp += `${br}Método de pago: ${cartState.paymentMethod}${br}${br}Precio TOTAL $${getTotal()}`
    return temp
  }

  const handlePaymentMethodChange = (e) => {
    cartDispatch({
      type: ActionType.SET_PAYMENT_METHOD,
      payload: e.target.value,
    })
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateText('\n'))
      .then(() => enqueueSnackbar('Se ha copiado correctamente el contenido del carrito', { variant: 'success'}))
      .catch(() => enqueueSnackbar('Ocurrió un error al intentar copiar el contenido del carrito', { variant: 'error'}))
  }

  return (
    <div className={classes.alignCenter}>
      { cartState.items.length > 0
        ? cartState.items.map((item) => {
          return (
            <Grid container cols={1} className={classes.cartItem} key={item.id}>
              <Grid item xs={4} lg={4}>
                <p className={classes.itemText}>{item.name}</p>
              </Grid>
              <Grid item xs={2} lg={2}>
                <p className={classes.itemPrice}>${item.price}</p>
              </Grid>
              <Grid item xs={5} lg={5}>
                <IconButton className={classes.modifyItem} onClick={() => onAmountRemove(item)}>
                  <RemoveCircleOutlineIcon />
                </IconButton>
                {item.amount}
                <IconButton className={classes.modifyItem} onClick={() => onAmountAdd(item)}>
                  <AddCircleOutlineIcon />
                </IconButton>
              </Grid>
              <Grid item xs={1} lg={1}>
                <IconButton className={classes.removeItem} onClick={() => onRemoveItem(item)}>
                  <ClearIcon />
                </IconButton>
              </Grid>
            </Grid>
          )
        })
        : <p>El carrito está vacío</p>
      }
      <Typography variant="h4" gutterBottom marked="center" align="center">
        Total: ${getTotal()}
      </Typography>
      <RadioGroup aria-label="quiz" color="primary" name="quiz" value={cartState.paymentMethod} onChange={handlePaymentMethodChange}>
        <FormControlLabel value="Mercado Pago" control={<Radio color="primary" />} label="Mercado Pago" />
        <FormControlLabel value="Efectivo" control={<Radio color="primary" />} label="Efectivo" />
      </RadioGroup>
      * Selecciona algún método de pago para poder realizar el pedido.
      <hr />
      { !cartState.items.length < 1 || cartState.paymentMethod
        ?
        <Button onClick={() => clearCart()}>
          Vaciar carrito
        </Button>
        : null
      }
      <br />
      <br />
      Envíos gratis en Rosario con tu compra superior a $500 🎉🚛🚀
      <br />
      <br/>
      <Button
        color="primary"
        variant="contained"
        className={classes.send}
        disabled={cartState.items.length < 1 || !cartState.paymentMethod}
        target="_blank"
        rel="noopener noreferrer"
        href={`https://api.whatsapp.com/send?phone=+549${config.phone}&text=${generateText('%0A')}`}
      >
        Hacer pedido
        <WhatsAppIcon className={classes.wapp} />
      </Button>
      <br />
      <hr />
      * Si no tenés whatsapp, no te preocupes, podés copiar el contenido del Carrito para enviarlo por email haciendo
      <Button disabled={cartState.items.length < 1 || !cartState.paymentMethod} onClick={copyToClipboard}>
        click aquí
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
  modifyItem: {
    padding: theme.spacing(0, 1),
  },
  removeItem: {
    padding: theme.spacing(0, 1),
    color: theme.palette.error.main,
  },
  itemText: {
    fontSize: '12px',
    textAlign: 'left',
    [theme.breakpoints.up('sm')]: {
      fontSize: '14px',
    },
  },
  itemPrice: {
    fontSize: '12px',
    textAlign: 'right',
    [theme.breakpoints.up('sm')]: {
      fontSize: '14px',
    },
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