import CartActionTypes from './cart.types';

const toggleHiddenCart = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN
  };
};

const addItem = item => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item
  };
};

export { toggleHiddenCart, addItem };
