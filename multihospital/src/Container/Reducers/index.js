import { combineReducers } from "redux";
import Auth_reducer from "./Auth.reducer";

 export const all_Reducers = combineReducers({
    Authreducer : Auth_reducer
});
