import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { busquedadReducers } from "../reducers/busquedadReducers";
import { loginRucers } from "../reducers/loginReducer";
import { monitoresReducer } from "../reducers/monitoresReducer";
import { monitoriasReducer } from "../reducers/monitoriasReducers";
import { registerReducer } from "../reducers/registerReducer";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
loginStore: loginRucers, 
monitoresStore: monitoresReducer,
monitoriasStore:monitoriasReducer,
registerStore:registerReducer,
busquedadStore:busquedadReducers
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))

)