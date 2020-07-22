export const ADD_TO_CART = 'supreme/cart/ADD_ITEM';
export const REMOVE_FROM_CART = 'supreme/cart/REMOVE_ITEM';


const addItem = (product) => ({ type: ADD_TO_CART, product });
const removeItem = (productId) => ({ type: REMOVE_FROM_CART, productId });

export const loadCart = () => dispatch => {
    const cartItems = JSON.parse(window.localStorage.getItem("supreme/cart"));
    if (cartItems) {
        cartItems.forEach(item => {
            dispatch(addToCart(item));
        });
    }
}

let products = [];
export const addToCart = (product) => dispatch => {
    products.push(product);
    window.localStorage.setItem("supreme/cart", JSON.stringify(products))
    dispatch(addItem(product));
}

export const removeFromCart = (id) => dispatch => {
    const cartItemsArray = JSON.parse(window.localStorage.getItem("supreme/cart"));
    window.localStorage.removeItem("supreme/cart");
    products.splice(products.indexOf(id), 1);
    const newArray = cartItemsArray.filter(item => {
        return parseInt(item, 10) !== parseInt(id, 10);
    })
    window.localStorage.setItem("supreme/cart", JSON.stringify(newArray));
    dispatch(removeItem(id));
}