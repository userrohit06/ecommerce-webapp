import React, { Fragment, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Button = ({ value, quantity, productId }) => {
    // const [showMessage, setShowMessage] = useState(false)
    const authToken = localStorage.getItem('authToken')
    const params = useParams()
    const { id } = params

    // const onButtonClickHandler = async () => {
    //     if (!authToken) {
    //         // setShowMessage('Please login first to add items to cart')
    //         showMessageForLimitedTime('Please login first to add items to cart', "red", 3000)
    //     } else {
    //         // setShowMessage('Item added to cart')
    //         showMessageForLimitedTime('Item added to cart successfully', "green", 3000)

    //         const URI = import.meta.env.VITE_BACKEND_URL
    //         const ENV = import.meta.env.ENVIRONMENT
    //         try {
    //             const response = await axios.post(`${URI}/users/cart/add-to-cart/${id}`, { quantity }, {
    //                 headers: {
    //                     Authorization: `Bearer ${authToken}`
    //                 }
    //             })
    //             console.log(response);
    //         } catch (error) {
    //             ENV && console.log(`message: ${error.message}\nstack: ${error.stack}`);
    //         }
    //     }
    // }

    const onButtonClickHandler = async () => {
        const URI = import.meta.env.VITE_BACKEND_URL
        const ENV = import.meta.env.ENVIRONMENT
        try {
            const response = await axios.post(`${URI}/users/cart/add-to-cart`, { quantity, productId }, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            })
            console.log(response);
        } catch (error) {
            ENV && console.log(`message: ${error.message}\nstack: ${error.stack}`);
        }
    }

    const showMessageForLimitedTime = (message, color, duration) => {
        setShowMessage({ message, color })
        setTimeout(() => {
            setShowMessage(false)
        }, duration)
    }

    return (
        <Fragment>
            <button onClick={onButtonClickHandler}>
                {value}
            </button>
            {/* <div style={{ color: showMessage.color }}>
                {showMessage.message}
            </div> */}
        </Fragment>
    )
}

export default Button