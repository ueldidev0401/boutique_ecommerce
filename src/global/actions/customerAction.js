import { saveData } from "@global/slices/customerSlice";

export const saveCustomerData = (payload) => (dispatch) => {
  dispatch(saveData(payload));
};
