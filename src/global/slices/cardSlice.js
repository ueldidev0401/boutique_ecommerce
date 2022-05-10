import {createSlice} from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name: 'cardSlice',
    initialState: {
        isGridView: false,
        isModalShow: false,
        isShowSearchModel: false,
        currentCategory: 0,
        currentPage: 1,
        isCategoriesModalSHow: false,
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
        changeIsCategoriesModalShow: (state, action) => {
            return {
                ...state,
                isCategoriesModalSHow: action.payload
            }
        },
        setCurrentCategory: (state, action) => {
            return {
                ...state,
                currentCategory: action.payload
            }
        },
        changeIsShowSearchModel: (state, action) => {
            return {
                ...state,
                isShowSearchModel: action.payload
            }
        },
        changeCurrentPage: (state, action) => {
            return {
                ...state,
                currentPage: action.payload
            }
        }
    }
})

const {reducer, actions} = cardSlice;
export const { changeView, changeIsModalShow, setCurrentCategory, changeIsShowSearchModel, changeCurrentPage, changeIsCategoriesModalShow} = actions;
export default reducer;