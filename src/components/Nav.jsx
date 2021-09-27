import React from 'react'
import '../css/Nav.css';
import logo from '../assets/icons/ISRO.svg'
import logoD from '../assets/icons/ISROdark.svg'
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";

export default function Nav() {
    const location = useLocation().pathname;
    console.log(location.pathname);
    if (location === '/') {
        return (
            <nav class="navbar navbar-expand-lg position-absolute w-100 txt-lt">
                <div class="container-fluid justify-content-between align-items start pt-2 px-3">
                    <img className="logo" src={logo} alt="" />
                    <img className="nav-menu-icon navbar-toggler pb-0" src="https://img.icons8.com/ios-glyphs/60/ffffff/menu--v1.png" alt="" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" />
                    <div class="nav-menu-box collapse navbar-collapse px-2 me-3 position-absolute" id="navbarTogglerDemo01">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 p-4">
                            <Link className="text-decoration-none txt-lt" to="/">
                                <li class="nav-item d-flex align-items-center pe-5">
                                    <img className="nav-item-icon me-3" src="https://img.icons8.com/fluency-systems-filled/48/ffffff/home.png" alt="home icon" />
                                    <h4 className="nav-item-text m-0 fw-regular">Home</h4>
                                </li>
                            </Link>
                            <br />
                            <Link className="text-decoration-none txt-lt" to="/flights">
                                <li class="nav-item d-flex align-items-center pe-5">
                                    <img className="nav-item-icon me-3" src="https://img.icons8.com/ios-glyphs/60/ffffff/rocket.png" alt="rocket" />
                                    <h4 className="nav-item-text m-0 fw-regular">Flights</h4>
                                </li>
                            </Link>
                            <br />
                            <Link className="text-decoration-none txt-lt" to="/profile">
                                <li class="nav-item d-flex align-items-center  ">
                                    <img className="nav-item-icon me-3" src="https://img.icons8.com/ios-filled/50/ffffff/astronaut-helmet.png" alt="profilr" />
                                    <h4 className="nav-item-text m-0 fw-regular">Profile</h4>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    } else {
        return (
            <nav class="navbar navbar-expand-lg position-absolute w-100  txt-dr">
                <div class="container-fluid justify-content-between align-items start pt-2 px-3">
                    <img className="logo" src={logoD} alt="" />
                    <img className="nav-menu-icon navbar-toggler pb-0" src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png" alt="" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" />
                    <div class="nav-menu-box collapse navbar-collapse px-2 me-3 position-absolute" id="navbarTogglerDemo01">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 p-4">
                            <Link className="text-decoration-none" to="/">
                                <li class="nav-item d-flex align-items-center pe-5">
                                    <img className="nav-item-icon me-3" src="https://img.icons8.com/fluency-systems-filled/48/000000/home.png" alt="home icon" />
                                    <h4 className="nav-item-text m-0 fw-regular">Home</h4>
                                </li>
                            </Link>
                            <br />
                            <Link className="text-decoration-none" to="/flights">
                                <li class="nav-item d-flex align-items-center pe-5">
                                    <img className="nav-item-icon me-3" src="https://img.icons8.com/ios-glyphs/60/000000/rocket.png" alt="rocket" />
                                    <h4 className="nav-item-text m-0 fw-regular">Flights</h4>
                                </li>
                            </Link>
                            <br />
                            <Link className="text-decoration-none" to="/profile">
                                <li class="nav-item d-flex align-items-center  ">
                                    <img className="nav-item-icon me-3" src="https://img.icons8.com/ios-filled/50/000000/astronaut-helmet.png" alt="profilr" />
                                    <h4 className="nav-item-text m-0 fw-regular">Profile</h4>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}
