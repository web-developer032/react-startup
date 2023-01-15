import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useUserState } from "./contextApi/contextApi";

import Navbar from "./components/navbar/Navbar";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import NotFound from "./pages/notFound/NotFound";

function App() {
    const [userState, userDispatch] = useUserState();

    useEffect(() => {
        // FETCH USER DATA USING TOKEN
        console.log("APP STATE: ", userState);

        return () => {};
    }, []);

    return (
        <>
            <Navbar />

            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route
                    path="profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
