import {addToCart, removeCart, increment, decrement, clear} from "@slices/cartSlice";

export const addToCartAction = (payload) => (dispatch) => {
    dispatch(addToCart(payload));
}

export const removeCartAction = (payload) => (dispatch) => {
    dispatch(removeCart(payload));
}

export const incrementCartQuantityAction = (payload) => (dispatch) => {
    dispatch(increment(payload));
}

export const decrementCartQuantityAction = (payload) => (dispatch) => {
    dispatch(decrement(payload));
}

export const clearCartAction = () => (dispatch) => {
    dispatch(clear());
}
