import React from 'react';
import CartWidget from '../cartWidget/CartWidget';

const NavBar = () => {
    return <div className='container'>
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid ">
                <a className="navbar-brand fs-2 text-primary" href="#">Free-Market</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" >
                        <li className="nav-item">
                            <a className="nav-link fs-4"  href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-4" href="#">Ofertas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-4" href="#">Servicios</a>
                        </li>
                    </ul>
                </div>
                <div className='m-2'>
                    <CartWidget />
                </div>

            </div>

        </nav>
    </div>
}


export default NavBar;