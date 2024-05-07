import React from 'react'
import styles from "./Footer.module.css"
import { FaSquareInstagram, FaSquareTwitter } from 'react-icons/fa6'
import { FaFacebookSquare } from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date()
    return (
        // main div
        <div className={styles.footer}>
            {/* div 1 */}
            <div>
                <FaSquareInstagram className={styles.footer_social_icons} />
                <FaFacebookSquare className={styles.footer_social_icons} />
                <FaSquareTwitter className={styles.footer_social_icons} />
            </div>

            {/* div 2 */}
            <div>
                <p className={styles.footer_cursor}>Info | Support | Marketing</p>
                <p className={styles.footer_cursor}>Terms of User | Privacy Policy</p>
            </div>

            {/* div 3 */}
            <div className={styles.copyright}>
                <p>&copy; {currentYear.getFullYear()} E-commerce</p>
            </div>
        </div>
    )
}

export default Footer