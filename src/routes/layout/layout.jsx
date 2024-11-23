import './layout.scss'
import Navbar from '../../components/navbar/navbar'
import HomePage from '../homePage/homePage'

function Layout() {
    return (
        <div className="layout">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="content">
                <HomePage />
            </div>
        </div>
    )
}

export default Layout