import { useState } from 'react';
import './Navbar.scss';
import { BRACELETS, EARRINGS, NECKLACES, RINGS } from '../../constans/constans';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <button
                    className={`hamburger ${isOpen ? 'open' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`categories ${isOpen ? 'open' : ''}`}>
                    <Link to="/categories/earrings" className="category" onClick={() => setIsOpen(false)}>{EARRINGS}</Link>
                    <Link to="/categories/bracelets" className="category" onClick={() => setIsOpen(false)}>{BRACELETS}</Link>
                    <Link to="/categories/necklaces" className="category" onClick={() => setIsOpen(false)}>{NECKLACES}</Link>
                    <Link to="/categories/rings" className="category" onClick={() => setIsOpen(false)}>{RINGS}</Link>
                </div>
            </div>

            <Link to='/' className="logo" onClick={() => setIsOpen(false)}>
                <img src="/sheind-logo.png" alt="shein-D" />
            </Link>

            <div className="icons">
                <div className="cartIcon">
                    <ShoppingCartOutlinedIcon />
                    <span>0</span>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
