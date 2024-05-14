import React, { useEffect } from 'react'
import styles from "./Sidebar.module.css"
import Category from "../Category/Category.jsx"
import { fetchCategories } from "../../store/thunks/productsThunk.js"
import { useDispatch, useSelector } from "react-redux"

const Sidebar = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.products.categories)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    return (
        <div className={styles.sidebar}>
            <Category category={categories} />
        </div>
    )
}

export default Sidebar