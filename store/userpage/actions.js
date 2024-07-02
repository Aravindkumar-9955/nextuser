import { userStore } from "./reducers"; // Assuming userStore is the action creator exported from reducers

export const StoreuserDataApi = (data) => (dispatch) => {
    // Assuming userStore accepts data as its payload
    dispatch(userStore(data));
};
