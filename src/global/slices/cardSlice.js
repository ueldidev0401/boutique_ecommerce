import {createSlice} from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name: 'cardSlice',
    initialState: {
        isGridView: false,
        isModalShow: false,
        carrentCategory: 0,
    },
    reducers: {
        changeView: (state, action) => {
            const isGridView = action.payload;
            return {
                ...state,
                isGridView
            };
        },
        changeIsModalShow: (state, action) => {
            return {
                ...state,
                isModalShow: action.payload
            }
        },
        setCurrentCategory: (state, action) => {
            return {
                ...state,
                currentCategory: action.payload
            }
        }
    }
})

const {reducer, actions} = cardSlice;
export const { changeView, changeIsModalShow, setCurrentCategory} = actions;
export default reducer;