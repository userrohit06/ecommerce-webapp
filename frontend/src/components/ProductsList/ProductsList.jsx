import React from 'react'
import ProductCard from '../ProductCard/ProductCard.jsx'
import styles from "./ProductsList.module.css"

const ProductsList = ({ data }) => {
    return (
        <div className={styles.product_list}>
            {
                data.map(productData => {
                    return (
                        <ProductCard
                            data={productData}
                            key={productData.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default ProductsList