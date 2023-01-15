import React from "react";
import { useUserState, userActions } from "../../contextApi/contextApi";
import { useNavigate } from "react-router-dom";

function Login() {
    const [userState, userDispatch] = useUserState();

    const navigate = useNavigate();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                userDispatch({ type: userActions.SET_USER, payload: true });
                navigate("/");
                console.log("SUBMIT");
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
