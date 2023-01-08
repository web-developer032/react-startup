import React, { useEffect } from "react";

function Contact() {
    useEffect(() => {
        console.log("CONTAC");
    }, []);
    return <h1>Contact</h1>;
}

export default Contact;
