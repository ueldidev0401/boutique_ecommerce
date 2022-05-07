import {createSlice} from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addToWishlist: (state, action) => {
            const product = action.payload;
            const productInWishlist = state.find(({id}) => id === product.id);
            if (productInWishlist) {
                return state;
            } else {
                return [product, ...state];
            }
        },

        removeWishlist: (state, action) => {
            const product = action.payload;
            return state.filter(item => item.id !== product.id);
        }
    }
})

const {reducer, actions} = wishlistSlice;
export const {addToWishlist, removeWishlist} = actions;
export default reducer;