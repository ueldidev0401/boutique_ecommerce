import {v4 as uuid} from "uuid";
import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'shoppingCart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const productInCart = state.find(item => item.id === product.id && item.variations.title === product.variations.title);

            if (productInCart) {
                const cartProductIndex = state.findIndex(item => item.id === product.id);
                state[cartProductIndex].quantity = state[cartProductIndex].quantity + product.quantity;
            } else {
                product['cartId'] = uuid();
                return [product, ...state];
            }
        },

        removeCart: (state, action) => {
            const product = action.payload;
            return state.filter(item => item.cartId !== product.cartId);
        },

        increment: (state, action) => {
            const product = action.payload;
            const isIncrementProduct = state.find(item => item?.cartId === product?.cartId);

            if (isIncrementProduct) {
                const incrementProductIndex = state.findIndex(item => item.cartId === product.cartId);
                state[incrementProductIndex].quantity += 1;

                return state;
            } else {
                return state;
            }
        },

        decrement: (state, action) => {
            const product = action.payload;
            const isDecrementProduct = state.find(item => item.cartId === product.cartId);

            if (isDecrementProduct) {
                const decrementProductIndex = state.findIndex(item => item.cartId === product.cartId);
                state[decrementProductIndex].quantity -= 1;
                return state;
            } else {
                return state;
            }
        },

        clear: () => {
            return [];
        }
    }
})

const {reducer, actions} = cartSlice;
export const {addToCart, removeCart, increment, decrement, clear} = actions;
export default reducer;