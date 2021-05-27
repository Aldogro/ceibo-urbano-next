export const clearCart = () => dispatch => {
  dispatch({ type: 'CLEAR_CART'})
}

export const onAmountAdd = (item) => dispatch => {
  dispatch({ type: 'ADD_ITEM', payload: item })
}

export const onAmountRemove = (item) => dispatch => {
  dispatch({ type: 'REMOVE_AMOUNT', payload: item })
}

export const onRemoveItem = (item) => dispatch => {
  dispatch({ type: 'REMOVE_ITEM', payload: item })
}

export const onSelectedPaymentMethod = (paymentMethod) => dispatch => {
  dispatch({ type: 'SET_PAYMENT_METHOD', payload: paymentMethod})
}