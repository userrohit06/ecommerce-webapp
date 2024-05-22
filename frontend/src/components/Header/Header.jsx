import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Header.module.css"
import SearchBar from '../Search/Search'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Header = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("authToken")

    // handler logout user
    const onHandleLogout = async () => {
        const URI = import.meta.env.VITE_BACKEND_URL

        try {
            const response = await axios.post(`${URI}/users/logout`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            if (response.data.success === true) {
                localStorage.removeItem("authToken")
                navigate("/login")
            } else {
                console.log(error.message);
            }
        } catch (error) {
            return error.message
        }
    }

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
                    {
                        token ? (
                            <Link
                                to="/"
                                className={styles.navlist_items}
                                onClick={onHandleLogout}
                            >Logout</Link>
                        ) : (
                            <>
                                <Link to="/register" className={styles.navlist_items}>Register</Link>
                                <Link to="/login" className={styles.navlist_items}>Login</Link>
                            </>
                        )
                    }
                    <Link to="/cart" className={styles.navlist_items}>Cart</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Header