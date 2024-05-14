import React from 'react'
import styles from "./Home.module.css"
import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import Products from "../../components/Products/Products.jsx"

const Home = () => {
    return (
        <div className={styles.main}>
            <Sidebar />
            <Products />
        </div>
    )
}

export default Home