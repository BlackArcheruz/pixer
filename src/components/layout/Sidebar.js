import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <Menu>
        <a className="menu-item" href="/">
        Bosh sahifa
        </a>
        <a className="menu-item" href="/xizmatlar">
        Xizmatlar
        </a>
        <a className="menu-item" href="/portfolio">
        Portfolio
        </a>
        <a className="menu-item" href="/jamoa">
        Jamoa
        </a>
        <a className="menu-item" href="/blog">
        Blog
        </a>
        <a className="menu-item" href="/kontaktlar">
        Kontaktlar
        </a>
      </Menu>
    )
}

export default Sidebar
