import { useState } from 'react';
import './Navbar.scss';
import { BRACELETS, EARRINGS, NECKLACES, RINGS } from '../../constans/constans';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
                    <ul className="category">{EARRINGS}</ul>
                    <ul className="category">{BRACELETS}</ul>
                    <ul className="category">{NECKLACES}</ul>
                    <ul className="category">{RINGS}</ul>
                </div>
            </div>

            <div className="logo">
                <img src="../.././public/sheind-logo.png" alt="" />
            </div>
            
            <div className="icons">
                <div className="cartIcon">
                    <ShoppingCartIcon/>
                    <span>0</span>
                </div>
            </div>
            
        </nav>
    );
};

export default Navbar;
