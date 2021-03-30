import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { PhimReducer } from "./reducers/PhimReducer";
import {LoadingReducer} from "./reducers/LoadingReducer"
import { QuanLyDatVeReducer } from "./reducers/QuanLyVeReducer";

const rootReducer = combineReducers({
  PhimReducer,
  LoadingReducer,
  QuanLyDatVeReducer
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
