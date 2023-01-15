import { useSelector } from "react-redux";
import UnAuthorized from "../../pages/unAuthorized/UnAuthorized";

const ProtectedRoute = ({ children }) => {
    const auth = useSelector((state) => state.auth);

    if (!auth.user) {
        return <UnAuthorized to="/" replace />;
        // return <Navigate to="/" replace />;
    }

    return children;
};
export default ProtectedRoute;
