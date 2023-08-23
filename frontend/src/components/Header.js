import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import LoginSignin from '../Components/LoginSignin';


function Header() {

    const {
        totalItems
    } = useCart();


    return (
        <div>

            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">

                <div class="container-fluid">

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <a class="navbar-brand mt-2 mt-lg-0"><Link to="/homebody" style={{ color: "black", textDecoration: 'none' }} >
                            <i class="fa-solid fa-house fa-lg"></i></Link>
                        </a>

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link"><Link to="/login" style={{ color: "black", textDecoration: 'none' }} > Login </Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"><Link to="/register" style={{ color: "black", textDecoration: 'none' }} > Register </Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"><Link to="/about" style={{ color: "black", textDecoration: 'none' }} > About </Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"><Link to="/contactus" style={{ color: "black", textDecoration: 'none' }} > Contact Us </Link></a>
                            </li>
                        </ul>

                        <div class="d-flex align-items-center">
                            <a class="text-reset me-3">
                                <Link to="cart" style={{ color: "black", textDecoration: 'none' }} >
                                    <div>
                                        <i class="fas fa-shopping-cart fa-xl position-relative ">
                                            <span class="position-top translate-middle badge rounded-pill bg-danger" style={{ "font-size": "10px" }} >
                                                {totalItems}
                                            </span>
                                        </i>
                                    </div>
                                </Link>
                            </a>

                        </div>
                        

                        {/* <div class="d-flex align-items-center" >
                            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                Left Canvas
                            </button>
                        </div> */}

                        {/* <div class="d-flex align-items-center">
                            <button type="button" class="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target="#signloginmodal">
                                Login
                            </button>
                        </div> */}


                    </div>


                </div>

            </nav>



















            <div class="modal fade" id="signloginmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Login/Register</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            < LoginSignin />
                        </div>
                    </div>
                </div>
            </div>


            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>
                </div>
            </div>













        </div>
    );
}

export default Header;
