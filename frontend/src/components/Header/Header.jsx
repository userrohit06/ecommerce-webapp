import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Header.module.css"
import SearchBar from '../Search/Search'

const Header = () => {
    return (
        <nav className={styles.navbar}>

            {/* div 1 */}
            <div className={styles.logo}>
                <Link to="/">
                    <img
                        src="../../../Public/assets/logo.jpg"
                        alt="logo"
                        className={styles.logo_img}
                    />
                </Link>
            </div>

            {/* div 2 */}
            <div className={styles.search_div}>
                <SearchBar style={styles} />
            </div>

            {/* div 3 */}
            <div>
                <ul className={styles.navlist}>
                    <Link to="/" className={styles.navlist_items}>Home</Link>
                    <Link to="/" className={styles.navlist_items}>Logout</Link>
                    <Link to="/register" className={styles.navlist_items}>Register</Link>
                    <Link to="/login" className={styles.navlist_items}>Login</Link>
                    <Link to="/cart" className={styles.navlist_items}>Cart</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Header