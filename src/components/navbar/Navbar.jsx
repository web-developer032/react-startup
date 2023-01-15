import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useUserState, userActions } from "../../contextApi/contextApi";

function Navbar() {
    const [userState, userDispatch] = useUserState();

    console.log("NAVBAR STATE:", userState);

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
                {!userState.user && (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </>
                )}
                {userState.user && (
                    <li>
                        <Link
                            to="/"
                            onClick={() => userDispatch({ type: userActions.DELETE_USER })}
                        >
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
