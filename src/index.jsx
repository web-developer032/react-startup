import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import { UserStateProvider } from "./contextApi/contextApi";

// --------------------
// USING CONTEXT API
// --------------------
ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <UserStateProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </UserStateProvider>
    // </React.StrictMode>
);
