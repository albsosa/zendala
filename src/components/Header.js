import React from 'react';
import './Header.css';
import logo from '../zendala.png';
import {NavLink, Link} from 'react-router-dom';
const Header = () => {
    return ( 
        <nav className="navegacion navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"  id="mainNav">
            <div className="container">
            <Link className="navbar-brand js-scroll-trigger"  to="/"><img src={logo}  width="200" alt="logo" /></Link>

                <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <NavLink className="nav-item mx-0 mx-lg-1"  to={'/login'}  activeClassName="activo">Lista de clientes</NavLink>
                        </ul>
                </div>
                
            </div>
        </nav>
     );
}
 
export default Header;