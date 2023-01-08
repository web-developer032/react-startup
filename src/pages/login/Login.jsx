import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices/authSlice";

function Login() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    console.log("LOGIN AUTH:", auth);
    useEffect(() => {
        console.log("LOGIN");
    }, []);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                dispatch(setUser(true));
            }}
        >
            <fieldset>
                <legend>Login</legend>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <button>Login</button>
            </fieldset>
        </form>
    );
}

export default Login;
