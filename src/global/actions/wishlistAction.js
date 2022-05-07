import {addToWishlist, removeWishlist} from "@slices/wishlistSlice";

export const addToWishlistAction = (payload) => (dispatch) => {
    dispatch(addToWishlist(payload));
}

export const removeWishlistAction = (payload) => (dispatch) => {
    dispatch(removeWishlist(payload));
}
