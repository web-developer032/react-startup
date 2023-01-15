import React from "react";

function Signup() {
    return (
        <form>
            <fieldset>
                <legend>Signup</legend>

                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <button>Signup</button>
            </fieldset>
        </form>
    );
}

export default Signup;
