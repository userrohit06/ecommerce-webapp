import React from 'react'
import styles from "./ProductCard.module.css"
import { useNavigate } from "react-router-dom"

const ProductCard = ({ data }) => {
    const navigate = useNavigate()

    const onProductClickHandler = () => {
        navigate(`/product-details/${data.id}`)
    }
    return (
        <div className={styles.card} onClick={onProductClickHandler}>
            <div>
                <img src={data.thumbnail} alt={data.title} />
            </div>
            <div className={styles.card_details}>
                <p className={styles.price}>Rs. {data.price}</p>
                <p>{data.description.slice(0, 80)}</p>
            </div>
        </div>
    )
}

export default ProductCard
