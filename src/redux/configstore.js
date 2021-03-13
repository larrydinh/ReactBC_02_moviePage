import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { PhimReducer } from "./reducers/PhimReducer";
import {LoadingReducer} from "./reducers/LoadingReducer"

const rootReducer = combineReducers({
  PhimReducer,
  LoadingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
