import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./form.module.css"

const Register = () => {
    return (
        // main form tag
        <form className={styles.form}>

            {/* first div */}
            <div className={styles.form_heading}>
                <h1>Log In</h1>
            </div>

            {/* second div */}
            <div>
                {/* div 1 */}
                <div className={styles.form_field}>
                    <input
                        type='email'
                        placeholder='Enter your email'
                        required
                        name='email'
                    />
                </div>

                {/* div 2 */}
                <div className={styles.form_field}>
                    <input
                        type='password'
                        placeholder='Enter your password'
                        required
                        name='password'
                    />
                </div>
            </div>
            <button type='submit' className={styles.form_button_submit}>Submit</button>
            <p className={styles.text}>
                Not a user?
                <Link to="/register">
                    <span className={styles.form_login_text}> register</span>
                </Link>
            </p>
        </form>
    )
}

export default Register