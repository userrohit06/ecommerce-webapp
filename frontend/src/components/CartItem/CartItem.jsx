import React from 'react';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { removeFromCart } from '../../store/slices/cartSlice';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './CartItem.module.css';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    // const history = useHistory();

    const handleRemove = () => {
        dispatch(removeFromCart(item.product._id));
    };

    const handleRedirect = () => {
        history.push(`/product/${item.product._id}`);
    };

    return (
        <div className={styles.cartItem}>
            <img src={item.product.image} alt={item.product.name} onClick={handleRedirect} />
            <div className={styles.details} onClick={handleRedirect}>
                <h4>{item.product.name}</h4>
                <p>${item.product.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.totalAmount}</p>
            </div>
            <button onClick={handleRemove} className={styles.deleteBtn}>
                <FaTrashAlt />
            </button>
        </div>
    );
};

export default CartItem;
