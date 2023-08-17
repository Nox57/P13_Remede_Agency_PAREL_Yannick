import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authStart, authSuccess, authFailure } from '../../reducers/userSlice'
import './SignIn.css'

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const handleLogin = async (event) => {
        event.preventDefault()

        dispatch(authStart())

        try {
            const response = await fetch(
                'http://localhost:3001/api/v1/user/login',
                {
                    method: 'POST',
                    body: JSON.stringify({ email, password }),
                }
            )

            const data = await response.json()

            if (!response.ok) {
                throw new Error(
                    data.error || "Erreur lors de l'authentification"
                )
            }
            console.log(data)
            dispatch(authSuccess({ token: data.token }))
        } catch (error) {
            dispatch(authFailure({ error: error.message }))
        }
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleLogin}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    )
}

export default SignIn
