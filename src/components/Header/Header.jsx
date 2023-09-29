import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Header.css'
import Logo from '../../assets/argentBankLogo.png'
import { logout } from '../../reducers/userSlice'

function Header() {
    const { firstName } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = (event) => {
        event.preventDefault()
        dispatch(logout())
        navigate('/')
    }

    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="/">
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div className="main-nav-items">
                {firstName ? (
                    <>
                        <span className="main-nav-item user-name-span">
                            <FontAwesomeIcon icon={faUserCircle} />
                            {' ' + firstName}
                        </span>
                        <a
                            href="/"
                            className="main-nav-item"
                            onClick={handleLogout}
                        >
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            Sign Out
                        </a>
                    </>
                ) : (
                    <a className="main-nav-item" href="/login">
                        <FontAwesomeIcon icon={faUserCircle} />
                        Sign In
                    </a>
                )}
            </div>
        </nav>
    )
}

export default Header
