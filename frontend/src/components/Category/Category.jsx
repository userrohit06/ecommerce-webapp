import React, { useState } from 'react'
import styles from './Category.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedCategories } from "../../store/slices/productsSlice.js"

const Category = ({ category }) => {
    const dispatch = useDispatch()
    const selectedCategories = useSelector(state => state.products.selectedCategories)

    const handleCategoryChange = (cat) => {
        const updatedCategories = selectedCategories.includes(cat) ? selectedCategories.filter(item => item !== cat) : [...selectedCategories, cat]

        dispatch(setSelectedCategories(updatedCategories))
    }
    return (
        <div>
            <div>
                <h3>Categories</h3>
            </div>
            {
                category.map((cat, index) => (
                    <div key={index} className={styles.category_list}>
                        <input
                            type="checkbox"
                            id={`category-${index}`}
                            value={cat}
                            checked={selectedCategories.includes(cat)}
                            onChange={() => handleCategoryChange(cat)}
                        />
                        <label htmlFor={`category-${index}`}>
                            {cat}
                        </label>
                    </div>
                ))
            }
        </div>
    )
}

export default Category