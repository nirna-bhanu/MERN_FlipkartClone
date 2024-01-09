import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk, withExtraArgument } from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import {cartReducer} from './reducers/cartReducer';
import {  getProductReducer ,getProductDetailsReducer} from './reducers/ProductReducer';


const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer
})


const middleware = [thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;