import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Heading() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
  
    return (
        <header>
            <div className="menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
            <div className={`links ${isMenuOpen ? 'open' : ''}`}>
                <li><NavLink to="/"
                    className={({ isActive }) => (isActive ? 'links a active' : 'links li a ')}>
                        Home
                    </NavLink>
                </li>
                <li><NavLink to="/about"
                    className={({ isActive }) => (isActive ? 'links a active' : 'links li a ')}>
                        About
                    </NavLink>
                </li>
                <li><NavLink to="/blog"
                    className={({ isActive }) => (isActive ? 'links a active' : 'links li a ')}>
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/books"
                    className={({ isActive }) => (isActive ? 'links a active' : 'links li a ')}>
                        Books
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact"
                    className={({ isActive }) => (isActive ? 'links a active' : 'links li a ')}>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects"
                    className={({ isActive }) => (isActive ? 'links a active' : 'links li a ')}>
                        Projects
                    </NavLink>
                </li>
            </div>

        </header>     
    );
}