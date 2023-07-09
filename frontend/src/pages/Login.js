import React, { useState } from 'react'

const Login = ({ setIsUserLoggedIn, setUserId }) => {

    const [formValues, setFormValues] = useState({})

    const [errorMessage, setErrorMessage] = useState('')

    function handleChange(e) {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    function handleLogin() {
        fetch('http://localhost:8000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValues)
        })
            .then(res => res.json())
            .then(res => {
                if (res.type == 'error') {
                    setErrorMessage(res.message)
                } else {
                    setUserId(res.userId)
                    setIsUserLoggedIn(true)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Login</h2>
            <label>Enter Email:</label>
            <input type='text' name='email' onChange={handleChange} />
            <label>Enter password:</label>
            <input type='text' name='password' onChange={handleChange} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login