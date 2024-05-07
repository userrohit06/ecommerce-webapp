import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./form.module.css"

const Register = () => {
    return (
        // main form tag
        <form className={styles.form}>

            {/* first div */}
            <div className={styles.form_heading}>
                <h1>Create Account</h1>
            </div>

            {/* second div */}
            <div>
                {/* div 1 */}
                <div className={styles.form_field}>
                    <input
                        type='text'
                        placeholder='Enter your name'
                        required
                        name='name'
                    />
                </div>

                {/* div 2 */}
                <div className={styles.form_field}>
                    <input
                        type='email'
                        placeholder='Enter your email'
                        required
                        name='email'
                    />
                </div>

                {/* div 3 */}
                <div className={styles.form_field}>
                    <input
                        type='password'
                        placeholder='Enter your password'
                        required
                        name='password'
                    />
                </div>

                {/* div 4 */}
                <div className={styles.form_field}>
                    <input
                        type='text'
                        placeholder='Enter your address'
                        required
                        name='address'
                    />
                </div>

                {/* div 5 */}
                <div className={styles.form_field}>
                    <input
                        type='number'
                        placeholder='Enter your mobile number'
                        required
                        name='mobile'
                    />
                </div>
            </div>
            <button type='submit' className={styles.form_button_submit}>Submit</button>
            <p className={styles.text}>
                Already a user?
                <Link to="/login">
                    <span className={styles.form_login_text}> login</span>
                </Link>
            </p>
        </form>
    )
}

export default Register