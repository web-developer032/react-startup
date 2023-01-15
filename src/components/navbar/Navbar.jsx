import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../../redux/slices/authSlice";
import "./navbar.css";

function Navbar() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    return (
        <nav>
            <figure>
                <a href="$" className="logo">
                    Logo
                </a>
            </figure>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {!auth.user && (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </>
                )}
                {auth.user && (
                    <li>
                        <Link to="/" onClick={() => dispatch(setUser(false))}>
                            Logout
                        </Link>
                    </li>
                )}
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
