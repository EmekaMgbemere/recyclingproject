import React from 'react';
import logo from "../images/logonew.png";
import { Link } from 'react-router-dom';


export default function Nav(){

  return(
<div>
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="navbarimg container-fluid">
          <div>
              <Link to={"/"}><img src={logo} alt='logo' /></Link>
          </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">CLOSE</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <Link to={"/about"} className='navlink'><li class="nav-item">ABOUT</li></Link>
              <Link to={"/products"} className='navlink'><li class="nav-item">PRODUCTS</li></Link>
              {/* <Link to={"/projects"} className='navlink'><li class="nav-item">PROJECTS</li></Link> */}
              <Link to={"/news"} className='navlink'><li class="nav-item">NEWS</li></Link>          
              <Link to={"/contactus"} className='navlink'><li class="nav-item">CONTACT US</li></Link>          
            </ul>
          </div>
        </div>
      </div>
    </nav>
</div>
  )
}
