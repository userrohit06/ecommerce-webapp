import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from "./form.module.css"

const Register = () => {
    const URI = import.meta.env.VITE_BACKEND_URL
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '', password: ''
    })
    const { email, password } = formData

    // handle input change
    const onHandleChange = (event) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // handle form submit
    const onHandleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post(`${URI}/users/login`, formData, {
                withCredentials: true
            })
            // console.log(response);

            // set form fields to empty
            setFormData({
                email: "", password: ''
            })

            // redirect user to hoome page
            if (response?.data?.status === 'success') {
                navigate('/')
            }

            // set token to local storage
            localStorage.setItem("authToken", response?.data?.token)
        } catch (error) {
            alert('Wrong credentials')
        }
    }
    return (
        // main form tag
        <form className={styles.form} onSubmit={onHandleSubmit}>

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
                        value={email}
                        onChange={onHandleChange}
                    />
                </div>

                {/* div 2 */}
                <div className={styles.form_field}>
                    <input
                        type='password'
                        placeholder='Enter your password'
                        required
                        name='password'
                        value={password}
                        onChange={onHandleChange}
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