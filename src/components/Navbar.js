import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    let location = useLocation();
    const navigate = useNavigate();

    function handleLogOut() {
        localStorage.removeItem('token');
        navigate('/login')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        iNotebook
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className= {`nav-link ${location.pathname === "/" ? "active" : ""}`}
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className = {`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            {!localStorage.getItem('token') ? 
                            <>
                                <Link className="btn btn-primary mx-2" to="/login" role="button">Sign in</Link>
                                <Link className="btn btn-primary mx-2" to="/signup" role="button">Sign up</Link>
                            </> :
                                <button className="btn btn-primary mx-2" onClick={handleLogOut}>Log Out</button>
                            }
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;