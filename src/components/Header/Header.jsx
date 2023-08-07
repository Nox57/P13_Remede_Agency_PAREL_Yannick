import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import Logo from '../../assets/argentBankLogo.png'

function Header() {
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
            <div>
                <a className="main-nav-item" href="/sign-in/">
                    <FontAwesomeIcon icon={faUserCircle} />
                     Sign In
                </a>
            </div>
        </nav>
    )
}

export default Header
