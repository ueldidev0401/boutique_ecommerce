
import {changeView, changeIsModalShow, setCurrentCategory, changeIsShowSearchModel} from "@slices/cardSlice";

export const changeViewAction = (payload) => (dispatch) => {
    dispatch(changeView(payload));
}

export const changeIsModalShowAction = (payload) => (dispatch) => {
    dispatch(changeIsModalShow(payload));
}

export const setCurrentCategoryAction = (payload) => (dispatch) => {
    dispatch(setCurrentCategory(payload));
}

export const changeIsShowSearchModelAction = (payload) => (dispatch) => {
    dispatch(changeIsShowSearchModel(payload));
}