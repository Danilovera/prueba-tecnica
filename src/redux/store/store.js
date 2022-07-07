import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginRucers } from "../reducers/loginReducer";
import { monitoresReducer } from "../reducers/monitoresReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
loginStore: loginRucers, 
monitoresStore: monitoresReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))

)