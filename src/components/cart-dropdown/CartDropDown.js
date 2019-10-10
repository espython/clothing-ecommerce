import React from 'react';

import CustomButton from '../custom-button/CustomButton';
import './cartDropDown.styles.scss';

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);

export default CartDropDown;
