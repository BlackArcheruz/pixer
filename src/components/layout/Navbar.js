import logo from '../images/pixer-logo.svg';
import Sidebar from './Sidebar'

const Navbar = () => {
    return (
        <header>
            <div className="container">
        <nav className="navbar">
            <div className="logo">
            <a href="/"><img src={logo} alt=""/></a>
            </div>
            <ul>
            <li><a href="/">Bosh sahifa</a></li>
            <li><a href="/xizmatlar">Xizmatlar</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/jamoa">Jamoa</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/kontaktlar">Kontaktlar</a></li>
            <li><button className="btn btn-primary">+998 90 921 37 11</button></li>
            </ul>
            <Sidebar/> 
        </nav>
        </div>
        </header>
    )
}

export default Navbar
