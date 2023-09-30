import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { updateUserProfile } from '../../reducers/userSlice'
import './Profile.css'

function Profile() {
    const user = useSelector((state) => state.user)
    const navigate = useNavigate()

    useEffect(() => {
        if (!user.token) {
            navigate('/')
        }
    }, [user.token, navigate])

    const [editing, setEditing] = useState(false)
    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const dispatch = useDispatch()

    useEffect(() => {
        setFirstName(user.firstName)
        setLastName(user.lastName)
    }, [user.firstName, user.lastName])

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(updateUserProfile({ firstName, lastName }))
        setEditing(false)
    }

    return (
        <main className="main bg-dark">
            <div className="header">
                {editing ? (
                    <>
                        <h1>Welcome back</h1>
                        <form
                            onSubmit={handleSubmit}
                            className="form-container"
                        >
                            <div className="input-group">
                                <div className="field-group">
                                    <input
                                        id="firstName"
                                        value={firstName}
                                        onChange={(e) =>
                                            setFirstName(e.target.value)
                                        }
                                        placeholder="Prénom"
                                    />
                                </div>
                                <div className="field-group">
                                    <input
                                        id="lastName"
                                        value={lastName}
                                        onChange={(e) =>
                                            setLastName(e.target.value)
                                        }
                                        placeholder="Nom"
                                    />
                                </div>
                            </div>
                            <div className="button-group">
                                <button
                                    type="submit"
                                    className="edit-button save-button"
                                >
                                    Save
                                </button>
                                <button
                                    className="edit-button cancel-button"
                                    onClick={() => setEditing(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </>
                ) : (
                    <>
                        <h1>
                            Welcome back
                            <br />
                            {user.firstName} {user.lastName}!
                        </h1>
                        <button
                            className="edit-button"
                            onClick={() => setEditing(true)}
                        >
                            Edit Name
                        </button>
                    </>
                )}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        Argent Bank Checking (x8349)
                    </h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">
                        Available Balance
                    </p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        Argent Bank Savings (x6712)
                    </h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">
                        Available Balance
                    </p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        Argent Bank Credit Card (x8349)
                    </h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">
                        Current Balance
                    </p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Profile
