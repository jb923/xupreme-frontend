import { LOAD_SIZES } from "../actions/sizeActions";

const sizeReducer = (state = {}, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case LOAD_SIZES:
            let newState = {};
            action.list.productsizes.forEach(productsize => newState[productsize.productId] = productsize);
            return Object.assign(nextState, newState);
        default:
            return state;
    }
};

export default sizeReducer;
