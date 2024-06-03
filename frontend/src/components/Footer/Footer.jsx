import React from 'react'
import styles from "./Footer.module.css"
import { FaSquareInstagram, FaSquareTwitter } from 'react-icons/fa6'
import { FaFacebookSquare } from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date()
    return (
        <div className={styles.footer}>
            {/* Social Icons */}
            <div className={styles.social_container}>
                <FaSquareInstagram className={styles.footer_social_icons} />
                <FaFacebookSquare className={styles.footer_social_icons} />
                <FaSquareTwitter className={styles.footer_social_icons} />
            </div>

            {/* Links */}
            <div className={styles.footer_links}>
                <p className={styles.footer_cursor}>Info | Support | Marketing</p>
                <p className={styles.footer_cursor}>Terms of Use | Privacy Policy</p>
            </div>

            {/* Copyright */}
            <div className={styles.copyright}>
                <p>&copy; {currentYear.getFullYear()} E-commerce</p>
            </div>
        </div>
    )
}

export default Footer
