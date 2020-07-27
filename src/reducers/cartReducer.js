import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';
import { CREATE_TRANSACTION } from "../actions/transactionActions";


const cartReducer = (state = [], action) => {
    Object.freeze(state);
    let newState = Object.assign([], state)
    switch (action.type) {
        case ADD_TO_CART:
            newState.push(action.product)
            return newState;

        case REMOVE_FROM_CART:
            newState = state.filter(item => item.productId !== action.id)
            return newState;

        case CREATE_TRANSACTION:
            return [];

        default:
            return state;
    }
}


export default cartReducer 
