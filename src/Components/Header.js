import React from 'react';
import { Link } from 'react-scroll';
import logo from './images/logo.png'

const Header = () => {
    return (
        <header className="bg-orange-500 text-white w-full fixed top-0 z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="font-bold text-2xl">  {/* Zvětšení velikosti textu pro logo */}
                    <Link to="home"smooth={true} offset={-70} duration={850}>
                        <img src={logo} alt="Logo Půjčovny Aut" className="h-20 rounded-full cursor-pointer"/>
                    </Link>

            </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="cars" spy={true} smooth={true} offset={-70} duration={850} className="text-3xl font-thin hover:cursor-pointer hover:text-gray-300">CARS</Link></li>  {/* Zvětšení písma odkazů */}
                        <li><Link to="about" spy={true} smooth={true} offset={-70} duration={850} className="text-3xl font-thin hover:cursor-pointer hover:text-gray-300">ABOUT</Link></li>
                        <li><Link to="contact" spy={true} smooth={true} offset={-70} duration={850} className="text-3xl font-thin hover:cursor-pointer hover:text-gray-300">CONTACT</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
