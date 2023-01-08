import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    console.log("PROTECTED AUTH:", auth);
    useEffect(() => {
        console.log("PROTECTED ");
    }, []);

    if (!auth.user) {
        return <Navigate to="/" replace />;
    }

    return children;
};
export default ProtectedRoute;
