import React from "react";
import { Link } from "react-router-dom";

function UnAuthorized() {
    return (
        <section className="container-full">
            <h1>You are not authorized to access this page</h1>
            <Link to="/">Go to Dashboard</Link>
        </section>
    );
}

export default UnAuthorized;
