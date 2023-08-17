import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// Pages
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import SignIn from './pages/SignIn/SignIn'
import User from './pages/User/User'
// Css
import './App.css'

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login/" element={<SignIn />} />
                <Route path="/profile/" element={<User />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
