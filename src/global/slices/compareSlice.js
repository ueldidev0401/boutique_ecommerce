import {createSlice} from "@reduxjs/toolkit";

export const compareSlice = createSlice({
    name: 'compareList',
    initialState: [],
    reducers: {
        addToCompare: (state, action) => {
            const product = action.payload;
            const productInCompareList = state.find(({id}) => id === product.id);
            if (productInCompareList) {
                return state;
            } else {
                return [product, ...state];
            }
        },

        removeCompare: (state, action) => {
            const product = action.payload;
            return state.filter(item => item.id !== product.id);
        }
    }
})

const {reducer, actions} = compareSlice;
export const {addToCompare, removeCompare} = actions;
export default reducer;