import React, { useState } from "react";

const FancyButton = React.forwardRef((props, ref) => {
    const [text, setText] = useState("KHAATTOOOOONNNN");

    const handleClick = () => {};

    setTimeout(() => {
        setText("MAJISSTICCC FLAMEEEEEE");
    }, 2000);

    return (
        <button ref={ref} className="FancyButton" onClick={handleClick}>
            {text}
        </button>
    );
});

export default FancyButton;
