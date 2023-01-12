import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../cartWidget/CartWidget';

const NavBar = () => {
    return (
    

        <nav >
            <div className='header'>
                <Link to={'/'}><img src={"https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"} alt="logo" width={90}></img></Link>
                <div className='div-lista-header'>
                    <ul className='lista-header'>
                        <li >
                            <NavLink className="navlink" activeclassname='page' to={'/category/AURICULAR'}>Auriculares</NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" activeclassname='page' to={'/category/TECLADO'}>Teclados</NavLink>
                        </li>
                        <li >
                            <NavLink className="navlink" activeclassname='page' to={'/category/MOUSE'}>Mouse</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='carrito'>
                    <CartWidget />
                </div>

            </div>

        </nav>
   
)}


export default NavBar;