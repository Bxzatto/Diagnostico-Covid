
import diagnosticoReducer from './diagnosticoReducer'
import { combineReducers, createStore } from "redux";

export default function configureStore() {
    return createStore(
        combineReducers({
            diagnosticoReducer
        })
    );
}