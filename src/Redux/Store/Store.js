import { createStore } from 'redux'
import RootReducer from '../Reducers/RootReducer'

const store = createStore(RootReducer)

export default store