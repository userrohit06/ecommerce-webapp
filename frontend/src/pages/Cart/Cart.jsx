import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems } from '../../store/thunks/cartThunk';
import CartItem from '../../components/CartItem/CartItem';
import styles from './Cart.module.css';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const cartStatus = useSelector(state => state.cart.status);
    const error = useSelector(state => state.cart.error);

    useEffect(() => {
        if (cartStatus === 'idle') {
            dispatch(fetchCartItems());
        }
    }, [cartStatus, dispatch]);

    return (
        <div className={styles.cart}>
            <h2>Your Cart</h2>
            {cartStatus === 'loading' && <p>Loading...</p>}
            {cartStatus === 'failed' && <p>{error}</p>}
            {cartStatus === 'succeeded' && cartItems.length === 0 && <p>Your cart is empty.</p>}
            {cartStatus === 'succeeded' && cartItems.map(item => (
                <CartItem key={item.product._id} item={item} />
            ))}
        </div>
    );
};

export default Cart;
