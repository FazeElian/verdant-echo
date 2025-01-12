import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

// Styles
import "../assets/css/components/Header.css";

// Logo
import Logo from "../assets/img/Logo.png";

// React icons
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart, MdPermPhoneMsg } from "react-icons/md";
import { IoIosMenu, IoMdCart } from "react-icons/io";
import { ImHome } from "react-icons/im";
import { RiPlantFill } from "react-icons/ri";
import { PiPlantFill } from "react-icons/pi";

const Header = () => {
    const [ menu, setMenu ] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <>
            <header className="header">
                <div className="cont-img-header">
                    <img src={Logo} alt="Verdant Echo Logo" loading="lazy" />
                </div>
                <nav className="nav-header">
                    <ul className={`nav-list-header ${menu ? "active": ""}`}>
                        <Link to="/" className="nav-list-item-header" onClick={() => setMenu(false)}>
                            <ImHome />
                            Inicio
                        </Link>
                        <Link to="/" className="nav-list-item-header" onClick={() => setMenu(false)}>
                            <PiPlantFill />
                            Plantas
                        </Link>
                        <Link to="/plantpots" className="nav-list-item-header" onClick={() => setMenu(false)}>
                            <RiPlantFill />
                            Macetas
                        </Link>
                        <Link to="/" className="nav-list-item-header" onClick={() => setMenu(false)}>
                            <MdPermPhoneMsg />
                            Contáctanos
                        </Link>
                        <Link to="/cart" className="nav-list-item-header nav-list-cart-item-header" onClick={() => setMenu(false)}>
                            <IoMdCart />
                            Carrito de Compras
                        </Link>
                    </ul>
                    <ul className="nav-search-header">
                        <button className="nav-search-item-header">
                            <IoSearch />
                        </button>
                        <Link to="/cart" className="nav-search-item-header" onClick={() => setMenu(false)}>
                            <MdOutlineShoppingCart />
                        </Link>
                    </ul>
                    <button className="btn-menu" onClick={handleMenu}>
                        <IoIosMenu />
                    </button>
                </nav>
            </header>

            <Outlet />
        </>
    )
}

export { Header };