import React, { useEffect } from "react";

function About() {
    useEffect(() => {
        console.log("ABOUT");
    }, []);
    return <h1>About</h1>;
}

export default About;
