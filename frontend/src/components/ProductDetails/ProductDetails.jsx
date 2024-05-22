import React, { useEffect, useState } from 'react'
import styles from './ProductDetails.module.css'
import ProductImages from "../ProductImages/ProductImages.jsx"
import Stars from '../Stars/Stars.jsx'
import Button from '../Button/Button.jsx'
import { fetchSingleProduct } from '../../store/thunks/productsThunk.js'
import { clearFetchProduct } from '../../store/slices/productsSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

// title, price, rating, stock, brand, images (array)

const ProductDetails = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const { id } = params
    const data = useSelector(state => state.products.productData)
    const [quantity, setQuantity] = useState(1)     // default quantity is 1

    useEffect(() => {
        dispatch(fetchSingleProduct(id))
        return (() => {
            dispatch(clearFetchProduct())
        })
    }, [dispatch, id])

    const handleQtyChange = (event) => {
        setQuantity(Math.min(parseInt(event.target.value), 10))   // convert string to integer
    }

    return (
        <div className={styles.container}>
            <div className={styles.product_images}>
                <ProductImages imgs={data.images} />
            </div>
            <div className={styles.product_details}>
                <p><span>Desc: </span>{data.description}</p>
                <p><span>Price: </span>{data.price}</p>
                <p><span>Rating: </span>{<Stars stars={data.rating} />}</p>
                <p><span>Product in stock: </span>{data.stock}</p>
                <p><span>Company: </span>{data.brand}</p>
                <div>
                    <select onChange={handleQtyChange}>
                        {Array.from({ length: Math.min(data.stock, 10) }, (_, index) => (
                            <option key={index + 1} value={index + 1}>{index + 1}</option>
                        ))}
                    </select>
                    <Button value={"Add to cart"} quantity={quantity} productId={data.id} />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails