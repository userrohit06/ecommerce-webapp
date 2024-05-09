import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import styles from "./form.module.css"

const Register = () => {
    const URI = import.meta.env.VITE_BACKEND_URL
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        mobile: ''
    })
    const { name, email, password, address, mobile } = formData
    const navigate = useNavigate()

    // handle input change
    const onHandleChange = (event) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // submit form to the backend
    const onHandleSubmit = async (event) => {
        // prevent default behavior of browser (page refresh)
        event.preventDefault()

        try {
            // make post request to send data to backend
            const response = await axios.post(`${URI}/users/register`, formData)
            // console.log(response);

            // set fields to empty
            setFormData({
                name: "", email: "", password: "", address: "", mobile: ""
            })

            // redirect user to login page
            if (response?.status === 200) {
                navigate("/login")
            }
        } catch (error) {
            alert("Error in registration! Please check your inputs.")
        }
    }

    return (
        // main form tag
        <form className={styles.form} onSubmit={onHandleSubmit}>

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
                        value={name}
                        onChange={onHandleChange}
                    />
                </div>

                {/* div 2 */}
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

                {/* div 3 */}
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

                {/* div 4 */}
                <div className={styles.form_field}>
                    <input
                        type='text'
                        placeholder='Enter your address'
                        required
                        name='address'
                        value={address}
                        onChange={onHandleChange}
                    />
                </div>

                {/* div 5 */}
                <div className={styles.form_field}>
                    <input
                        type='number'
                        placeholder='Enter your mobile number'
                        required
                        name='mobile'
                        value={mobile}
                        onChange={onHandleChange}
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