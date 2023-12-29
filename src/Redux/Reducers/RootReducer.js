import { combineReducers } from 'redux'
import CartReducer from './CartReducer'

const rootreducers = combineReducers({
    cart: CartReducer
})


export default rootreducers