const initialState = {
    cartItems: []
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state]
        case 'REMOVE_FROM_CART':
            return [...state]
        default:
            return state;
            break;
    }

}

export default CartReducer