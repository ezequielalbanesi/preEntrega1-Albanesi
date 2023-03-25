import React from 'react'
import './NavBar.css';
import Cartwidget from '../CartWidget/CartWidget';
import logo from './img/logo_white_large.png';

const NavBar = () => {
  return (
    <header>
          <nav className="navbar navbar-expand-lg">
                  <div>
                        <div className='contenedorLogo'>
                        <a className="navbar-brand" href="#"> <img src={logo} alt="" className="Logo" /></a>
                        </div>
                        </div> 
                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> 
                              <span className="navbar-toggler-icon" /> </button>

                            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                                    <div className="navbar-nav links containerLinks">
                                      <a className="nav-link active text-white " aria-current="page" href="#"> Camperas</a>
                                      <a className="nav-link active text-white " href="#">Camisetas</a>
                                      <a className="nav-link active text-white " href="#">Shorts</a>
                                    </div>
                            </div>
                            <Cartwidget />   
                 
</nav>

       
    </header>

  )
}

export default NavBar