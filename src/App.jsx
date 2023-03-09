import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Profile from "./pages/profile/Profile";
import NotFound from "./pages/notFound/NotFound";
import { setUser } from "./redux/slices/authSlice";

function App() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // FETCH USER DATA USING TOKEN
        dispatch(setUser(!!localStorage.getItem("user")));

        setLoading(false);
    }, []);

    console.log("APP STATE: ", auth);

    return loading ? (
        <h1>Loading...</h1>
    ) : (
        <>
            <Routes>
                <Route
                    path="login"
                    element={
                        <ProtectedRoute isAllowed={!auth.user} redirectedUrl={"/"}>
                            <Login />
                        </ProtectedRoute>
                    }
                />
                <Route path="signup" element={<Signup />} />

                <Route
                    path="/"
                    element={
                        <ProtectedRoute isAllowed={auth.user} redirectedUrl={"/login"}>
                            <Home />
                        </ProtectedRoute>
                    }
                >
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
