import {addToCompare, removeCompare} from "@slices/compareSlice";

export const addToCompareAction = (payload) => (dispatch) => {
    dispatch(addToCompare(payload));
}


export const removeCompareAction = (payload) => (dispatch) => {
    dispatch(removeCompare(payload));
}
