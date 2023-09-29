import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// Pages
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
// Css
import './App.css'
// Hooks
import useUserProfile from './hooks/useUserProfile'

function App() {
    useUserProfile()

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login/" element={<Login />} />
                <Route path="/profile/" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
