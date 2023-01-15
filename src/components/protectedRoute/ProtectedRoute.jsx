import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import UnAuthorized from "../../pages/unAuthorized/UnAuthorized";

const ProtectedRoute = ({ children }) => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("PROTECTED ");
    }, []);

    if (!auth.user) {
        return <UnAuthorized to="/" replace />;
        // return <Navigate to="/" replace />;
    }

    return children;
};
export default ProtectedRoute;
