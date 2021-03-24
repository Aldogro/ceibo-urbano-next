import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useCart, ActionType } from '../../services/Cart.context'
import Button from '@material-ui/core/Button'
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

  const generateTextForWhatsapp = () => {
    let temp = '¡Hola!, mi pedido:%0A%0A'
    cartState.items.forEach(item => {
      temp += `_*${item.name}*_: $${item.price} x${item.amount} - _*$${item.price * item.amount}*_%0A`
    })
    temp += `%0AMétodo de pago: *${cartState.paymentMethod}*%0A%0A*Precio TOTAL $${getTotal()}*`
    return temp
  }

  const generateTextForEmail = () => {
    let temp = '¡Hola!, mi pedido:\n\n'
    cartState.items.forEach(item => {
      temp += `${item.name}: $${item.price} x${item.amount} - $${item.price * item.amount}\n`
    })
    temp += `\nMétodo de pago: ${cartState.paymentMethod}\n\nPrecio TOTAL $${getTotal()}`
    return temp
  }

  const handlePaymentMethodChange = (e) => {
    cartDispatch({
      type: ActionType.SET_PAYMENT_METHOD,
      payload: e.target.value,
    })
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateTextForEmail())
      .then(() => console.log('Se copió al portapapeles')) // #FIX ME --> Agregar toast o notificación avisando que salió todo bien
      .catch(() => console.log('Algo salió mal'))
  }

  return (
    <div className={classes.alignCenter}>
      { cartState.items.length > 0
        ? cartState.items.map((item) => {
          return (
            <div className={classes.cartItem} key={item.id}>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>
                <IconButton onClick={() => onAmountRemove(item)}>
                  <RemoveCircleOutlineIcon />
                </IconButton>
                {item.amount}
                <IconButton onClick={() => onAmountAdd(item)}>
                  <AddCircleOutlineIcon />
                </IconButton>
              </p>
              <IconButton onClick={() => onRemoveItem(item)}>
                <ClearIcon />
              </IconButton>
            </div>
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
      <br />
      Envíos gratis en Rosario con tu compra superior a $500 🎉🚛🚀
      <br /><br/>
      <Button
        color="primary"
        variant="contained"
        className={classes.send}
        disabled={cartState.items.length < 1 || !cartState.paymentMethod}
        target="_blank"
        rel="noopener noreferrer"
        href={`https://api.whatsapp.com/send?phone=+5493416871302&text=${generateTextForWhatsapp()}`}
      >
        Hacer pedido
        <WhatsAppIcon className={classes.wapp} />
      </Button>
      <br />
      <hr />
      * Si no tenés whatsapp, no te preocupes, podés copiar el contenido del Carrito para enviarlo por email haciendo <Button onClick={copyToClipboard}>click aquí</Button>
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