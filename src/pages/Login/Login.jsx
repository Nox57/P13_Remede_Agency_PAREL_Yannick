import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser, fetchUserProfile } from '../../reducers/userSlice'
import './Login.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()
        dispatch(loginUser({ email, password }))
            .unwrap()
            .then(() => {
                // Après avoir obtenu le token JWT, on recupère les informations du profil
                return dispatch(fetchUserProfile())
            })
            .then(() => {
                navigate('/profile')
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleLogin}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Username</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            autoComplete="username"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            autoComplete="current-password"
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

export default Login
